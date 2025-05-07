import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { useState } from 'react';
const messages = 
    [
        {
          id: 1,
          sender: "vibegirl123",
          avatar: "/avatars/girl1.jpeg",
          lastMessage: ["Hey!", "How are you?", "Wanna see beach pics?"]
        },
        {
          id: 2,
          sender: "cooldude_yo",
          avatar: "/avatars/boy2.jpeg",
          lastMessage: ["Yo!", "Skate park was wild today", "Landed a trick finally!"]
        },
        {
          id: 3,
          sender: "mocha.mood",
          avatar: "/avatars/girl3.jpeg",
          lastMessage: ["Reading that book you gave me", "It’s so good!", "Plot twist blew my mind"]
        },
        {
          id: 4,
          sender: "zoomboy",
          avatar: "/avatars/boy1.jpeg",
          lastMessage: ["Grinding late again 😅", "Still fixing that bug", "Almost done tho"]
        },
        {
          id: 5,
          sender: "sunny.soul",
          avatar: "/avatars/boy2.jpeg",
          lastMessage: ["On the way to the café!", "Don’t forget to bring your sketchbook!", "It’s chill today ☀️"]
        },
        {
          id: 6,
          sender: "code.crush",
          avatar: "/avatars/girl1.jpeg",
          lastMessage: ["Just pushed code", "Can you check PR?", "Let’s sync tomorrow"]
        },
        {
          id: 7,
          sender: "wanderlust.kai",
          avatar: "/avatars/boy1.jpeg",
          lastMessage: ["Booked Iceland trip!!", "So hyped 😍", "Let’s catch up soon"]
        },
        {
          id: 8,
          sender: "artist.ella",
          avatar: "/avatars/girl3.jpeg",
          lastMessage: ["Working on new canvas 🎨", "Sending preview", "Pick your fave"]
        }
      ];
  
function Messages() {


  return (
    <div>
        <Navbar />
       <MsgPage/>

    </div>
  );
}
function MsgPage(){
    return(
        <div style={{display:"flex",gap:"20px",padding:"20px"}}>
            <MsgList/>
            <DisplayMessages/>
        </div>
    )
}
function MsgList() {
   
    return(
        <div style={{width:"350px",borderRight:"2px solid rgb(235, 204, 217)"}}>
            <h2 style={{color:"#ebbbae",textShadow:"2px 2px 2px rgb(217, 208, 218)",textAlign:"center"}}>Mesaages</h2>
            <div onClick={<Msg/>}>
                {messages.map((message) => (
                <div
                key={message.id}
                style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "15px",
                    padding: "10px",
                    margin: "10px 0",
                    borderRadius: "12px",
                    backgroundColor: "#f5f5f5",
                    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
                    width: "300px",
                }}
               
                >
                <img
                    src={message.avatar}
                    alt="avatar"
                    style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "2px solid #ccc"
                    }}
                />
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <h4 style={{ fontSize: "16px", margin: "0", color: "#333" }}>{message.sender}</h4>
                    <p style={{ fontSize: "13px", color: "#777", marginTop: "4px" }}>
                    {`${message.lastMessage.length} Messages`}
                    </p>
                </div>
            </div>
            ))}
        </div>

        </div>
    )
}
function DisplayMessages(){
    return(
        <div>
            <h1 style={{textAlign:"center"}}>Display messages</h1>

        </div>
    )
    
}
function Msg(){
    return(
        <div>
            hi hello
        </div>
    )
}
export default Messages;
