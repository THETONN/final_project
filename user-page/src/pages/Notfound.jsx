import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Notfound.css'; // Make sure to create this CSS file

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className="not-found-container">
      <div className="not-found">
        <h1 className="not-found-404">404</h1>
        <div className="not-found-text">
          <h2>We are sorry, page not found!</h2>
          <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
          <button onClick={() => navigate('/')} className="home-button">
            Back to Homepage
          </button>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage;
