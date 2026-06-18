import React, { useState, useEffect } from "react";

function App() {
  const [dogImage, setDogImage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchDog = () => {
    setIsLoading(true);
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setDogImage(data.message);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchDog();
  }, []);

  return (
    <div className="app-container">
      <div className="card">
        <h1 className="title">🐕 Doggo Picker</h1>
        
        <div className="content-area">
          {isLoading ? (
            <div className="loader-container">
              <div className="spinner"></div>
              <p className="loading-text">Loading...</p>
            </div>
          ) : (
            dogImage && (
              <div className="image-container">
                <img src={dogImage} alt="A Random Dog" className="dog-image" />
              </div>
            )
          )}
        </div>

        <button 
          onClick={fetchDog} 
          className="fetch-button" 
          disabled={isLoading}
        >
          {isLoading ? "Fetching..." : "Fetch New Dog"}
        </button>
      </div>
    </div>
  );
}

export default App;

