import React from 'react';
import './NotFound.css'; // Make sure to create a corresponding CSS file

const NotFoundPage = () => {
  return (
    <div className="NotFound">
      <h1>404</h1>
      <h2>Lost in Space</h2>
      <p>You have reached the edge of the universe. The page you requested could not be found. Don't worry and return to the previous page.</p>
      <div className="buttons">
        <button onClick={() => window.history.back()}>Go Back</button>
        <button onClick={() => window.location.href = '/'}>Go Home</button>
      </div>
      <div className="animation">
        {/* Animation goes here */}
      </div>
    </div>
  );
}

export default NotFoundPage;
