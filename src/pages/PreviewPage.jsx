import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { doc, updateDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db } from '../firebase';
import Minimalist from '../templates/Minimalist';
import Creative from '../templates/Creative';
import Bold from '../templates/Bold';
import Professional from '../templates/Professional';
import Artistic from '../templates/Artistic';
import Modern from '../templates/Modern';
import { toast } from 'react-toastify';

export default function PreviewPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const { data, template } = location.state || {};
  const auth = getAuth();
  const user = auth.currentUser;
  const storage = getStorage();

  const renderTemplate = () => {
    switch (template) {
      case 'minimalist': return <Minimalist data={data} />;
      case 'creative': return <Creative data={data} />;
      case 'bold': return <Bold data={data} />;
      case 'professional': return <Professional data={data} />;
      case 'artistic': return <Artistic data={data} />;
      case 'modern': return <Modern data={data} />;
      default: return <div>No template selected</div>;
    }
  };
  const [isPublishing, setIsPublishing] = React.useState(false);
  const handlePublish = async () => {
    if (!user) {
      toast.error("Please log in to publish.");
      return;
    }
    setIsPublishing(true);

    try {
      let imageUrl = data.image;

      // Check if the image is a File object and upload it
      if (data.image instanceof File) {
        const imageRef = ref(storage, `portfolioImages/${user.uid}/${data.image.name}`);
        await uploadBytes(imageRef, data.image);
        imageUrl = await getDownloadURL(imageRef); // Get the download URL
      }
      const projectsWithUrls = await Promise.all(
               data.projects.map(async (proj) => {
                 let projImgUrl = proj.project_image;
                 if (proj.project_image instanceof File) {
                   const projRef = ref(
                     storage,
                     `portfolioImages/${user.uid}/projects/${proj.project_image.name}`
                 );
                  await uploadBytes(projRef, proj.project_image);
                  projImgUrl = await getDownloadURL(projRef);
                }
                return { ...proj, project_image: projImgUrl };
              })
            );
      const updatedData = { ...data, image: imageUrl,projects: projectsWithUrls, }; // Include the image URL in the updated data

      // Update user document in Firestore
      const userDocRef = doc(db, 'users', user.uid);
      await updateDoc(userDocRef, {
        isPublished: true,
        selectedTemplate: template,
        portfolioData: updatedData,
        publishedAt: new Date().toISOString()
      });

      // Construct portfolio URL and copy it to clipboard
      const portfolioUrl = `${window.location.origin}/portfolio-view/${user.uid}`;
      try {
        await navigator.clipboard.writeText(portfolioUrl); // Attempt to copy the URL
        toast.success("Portfolio published and link copied to clipboard!");
      } catch (err) {
        toast.warn("Failed to copy the portfolio URL to clipboard.");
      }

      navigate("/dashboard"); // Redirect to dashboard after publishing
    } catch (error) {
      console.error("Error publishing portfolio:", error);
      toast.error("Failed to publish portfolio.");
    }
    finally {
          setIsPublishing(false);
          }
  };

  return (
    <div className="preview-page">
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <h2 style={{ fontSize: '1.8rem', color: '#333' }}>{template} Template</h2>
        <button onClick={handlePublish}>
          Publish Portfolio
        </button>
        <button
       onClick={handlePublish}
       disabled={isPublishing}
      style={{ opacity: isPublishing ? 0.6 : 1 }}
    >
       {isPublishing ? "Publishing…" : "Publish Portfolio"}
    </button>
      </div>
      {renderTemplate()}
    </div>
  );
}
