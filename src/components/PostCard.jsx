import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import '../assets/socail.css'; // (make sure the path is correct)
import { Link } from 'react-router-dom';

const stories = [
  {
    id: 1,
    username: "vibegirl123",
    avatar: "/avatars/boy1.jpeg",
    storyImage: "/stories/story1.jpg",
    caption: "Beach day 🌊☀️",
    time: "10m ago"
  },
  {
    id: 2,
    username: "cooldude_yo",
    avatar: "/avatars/girl2.jpeg",
    storyImage: "/stories/story1.jpg",
    caption: "Skrrt skrrt 🛹",
    time: "25m ago"
  },
  {
    id: 3,
    username: "mocha.mood",
    avatar: "/avatars/girl3.jpeg",
    storyImage: "/stories/story3.jpg",
    caption: "cozy vibes ☕ + 📖",
    time: "1h ago"
  },
  {
    id: 4,
    username: "zoomboy",
    avatar: "/avatars/girl1.jpeg",
    storyImage: "/stories/story4.jpg",
    caption: "Late night grind 🚀",
    time: "3h ago"
  }
];

function PostCard() {
  return (
    <div className='container'>
     
      <Story stories={stories} />
      <Posts/>
      <Suggestion/>
    </div>
  );
}

function Story({ stories }) {
  const [eye, setEye] = useState(false);

  const storyClick = () => {
    setEye(!eye);
  };

  return (
    <div>
      <div style={{ border: "2px solid rgb(235, 204, 217)", width: "280px", height: "100vh" }}>
        <h3
          style={{
            fontSize: "20px",
            textShadow: "2px 2px 2px rgb(189, 165, 175)",
            color: "rgb(161, 119, 137)",
            textAlign: "center"
          }}
        >
          Stories
        </h3>
        {stories.map((story) => (
          <div className="story-card" key={story.id}>
            <div className="story-image">
              <div className="story-image-container">
                <img
                  className="avatar"
                  src={story.avatar}
                  alt={story.username}
                  onClick={storyClick}
                  style={{ cursor: 'pointer', borderRadius: '50%', width: '60px', height: '60px' }}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "2px"
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    gap: "10px"
                  }}
                >
                  <h5>{story.time}</h5>
                  <h5 >{eye ? <FaEye /> : <FaEyeSlash />}</h5>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Posts() {
    return (
     <div className='posts'>
        <Notes/>
     </div>
    )
}
function Suggestion() {
    return (
        <div>
            <h3 style={{ fontSize: "20px", textShadow: "2px 2px 2px rgb(189, 165, 175)", color: "rgb(161, 119, 137)",textAlign:"center" }}>Suggestion</h3>
            <div className='suggestion'>
                <img src='/avatars/girl1.jpeg' alt='avatar' className='avatar' />
                <h4 style={{ fontSize: "20px",  color: "rgb(161, 119, 137)" }}>Suggestion</h4>
            </div>
        </div>
    )
}
function Notes(){
    return(
        <div>
            

        </div>
    )
}
export default PostCard;
