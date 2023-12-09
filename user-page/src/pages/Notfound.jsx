// import React from 'react';
// import './NotFound.css'; // Make sure to create a corresponding CSS file

// const NotFoundPage = () => {
//   return (
//     <div className="NotFound">
//       <h1>404</h1>
//       <h2>Lost in Space</h2>
//       <p>You have reached the edge of the universe. The page you requested could not be found. Don't worry and return to the previous page.</p>
//       <div className="buttons">
//         <button onClick={() => window.history.back()}>Go Back</button>
//         <button onClick={() => window.location.href = '/'}>Go Home</button>
//       </div>
//       <div className="animation">
//         {/* Animation goes here */}
//       </div>
//     </div>
//   );
// }

// export default NotFoundPage;
// import React, { useState } from 'react';

// const NotFoundPage = () => {
//   // Store the position of the background
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   // Update the position based on the mouse movement
//   const handleMouseMove = (event) => {
//     const { clientX, clientY } = event;
//     const width = window.innerWidth;
//     const height = window.innerHeight;
//     const moveX = (clientX - width / 2) / width * 50; // These numbers control the amount of movement
//     const moveY = (clientY - height / 2) / height * 50; // These numbers control the amount of movement
//     setPosition({ x: moveX, y: moveY });
//   };

//   // Inline styles for the container
//   const containerStyle = {
//     height: '100vh',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     flexDirection: 'column',
//     background: `linear-gradient(${position.x + 45}deg, #9B5DE5 0%, #F15BB5 100%)`, // Adjust the colors as needed
//     transition: 'background 0.5s',
//     cursor: 'pointer',
//     overflow: 'hidden',
//   };

//   // Inline styles for the text and button
//   const textStyle = {
//     color: 'white',
//     textAlign: 'center',
//     userSelect: 'none',
//     padding: '10px',
//   };

//   const buttonStyle = {
//     border: 'none',
//     padding: '10px 20px',
//     backgroundColor: '#F15BB5',
//     color: 'white',
//     cursor: 'pointer',
//     transition: 'transform 0.3s ease',
//   };

//   return (
//     <div style={containerStyle} onMouseMove={handleMouseMove}>
//       <h1 style={{ ...textStyle, fontSize: '6em' }}>404</h1>
//       <p style={{ ...textStyle, fontSize: '1.5em' }}>
//         Uh oh! Looks like you got lost.
//       </p>
//       <button style={buttonStyle} onClick={() => (window.location.href = '/')}>
//         Go back to the homepage
//       </button>
//     </div>
//   );
// };

// export default NotFoundPage;
import React from 'react';
import Tilt from 'react-parallax-tilt';
import './NotFound.css'; // Your CSS file path here

const NotFoundPage = () => {
  return (
    <>
      
      {/* <nav>
        <div className="menu">
          <p className="website_name">LOGO</p>
          <div className="menu_links">
            <a href="/" className="link">about</a>
            <a href="/" className="link">projects</a>
            <a href="/" className="link">contacts</a>
          </div>
          <div className="menu_icon">
            <span className="icon"></span>
          </div>
        </div>
      </nav> */}

      <section className="wrapper">
        
        <div className="container">
        <Tilt tiltMaxAngleX={20} tiltMaxAngleY={20} id="scene" className="scene">

          
            <div className="circle"></div>

            <div className="one">
              <div className="content">
                <span className="piece"></span>
                <span className="piece"></span>
                <span className="piece"></span>
              </div>
            </div>

            <div className="two">
              <div className="content">
                <span className="piece"></span>
                <span className="piece"></span>
                <span className="piece"></span>
              </div>
            </div>

            <div className="three">
              <div className="content">
                <span className="piece"></span>
                <span className="piece"></span>
                <span className="piece"></span>
              </div>
            </div>

            <p className="p404">404</p>
            <p className="p404">404</p>
          
          </Tilt>
          

          <div className="text">
            
            <article>
              <p>Uh oh! Looks like you got lost.<br/>Go back to the homepage if you dare!</p>
              <button onClick={() => window.location.href = '/'}>Back Homepage!</button>
            </article>
          </div>
        </div>
        
      </section>
    </>
  );
};

export default NotFoundPage;

