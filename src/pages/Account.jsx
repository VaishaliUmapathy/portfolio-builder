import React from 'react';
import '../SCSS/Account.scss';
import { useState, useEffect } from 'react';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { auth, db } from '../firebase';

function Account() {
  return (
    <>
      <section className='account-section'>
             
          <div className="account-container">
            <BasicInformation/>
            <Portfolios/>
              
          </div>
          
       </section>
    </>
 
  )
}

function BasicInformation() {
  return(
    <>
    
     <div style={{display: "flex", gap: "2rem",flexDirection: "column"}}>
        <ProfilePhoto/>
        <UpdateInformation/>
     </div>
   
    </>
   
  )
}
function ProfilePhoto(){
  return(
            <div className="profile-photo">
                <img src="./avatars/girl2.jpeg" alt="Profile" />
            </div>
  )
}
function UpdateInformation() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dob: '',
    gender: '',
    address: '',
  });

  // Load current user data
  useEffect(() => {
    const fetchData = async () => {
      if (auth.currentUser) {
        const userDocRef = doc(db, 'users', auth.currentUser.uid);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          const data = userDoc.data();
          setFormData(prev => ({
            ...prev,
            name: data.name || '',
            email: data.email || '',
            phone: data.phone || '',
            dob: data.dob || '',
            gender: data.gender || '',
            address: data.address || ''
          }));
        }
      }
    };
    fetchData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userDocRef = doc(db, 'users', auth.currentUser.uid);
      await updateDoc(userDocRef, formData);
      alert('Information updated successfully!');
    } catch (err) {
      console.error('Error updating info:', err);
      alert('Failed to update information.');
    }
  };

  return (
    <div className="basic-information">
      <p>Here you can update your basic information.</p>
      <form className="basic-information-form" onSubmit={handleSubmit}>
        <div className="left">
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          <label htmlFor="phone">Phone:</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>
        <div className="right">
          <label htmlFor="dob">Date of Birth:</label>
          <input type="date" name="dob" value={formData.dob} onChange={handleChange} required />
          <label htmlFor="gender">Gender:</label>
          <input type="text" name="gender" value={formData.gender} onChange={handleChange} required />
          <label htmlFor="address">Address:</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />
          <button type="submit">Update</button>
        </div>
      </form>
    </div>
  );
}

function Portfolios() {
  return (
    <div className="portfolios">
      <h2>Your Portfolios</h2>
      <p>Here you can view and manage your portfolios.</p>
      {/* Add portfolio management functionality here */}
    </div>
  )
}
export default Account