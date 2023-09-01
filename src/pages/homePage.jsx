// homePage.jsx
import React, { useState, useEffect } from 'react';
import NavBar from '../components/navbar';
import Footer from '../components/footer';
import Banner from '../components/banner';
import Cards from '../components/cards';
import Lottie from "lottie-react";
import loader from '../assets/loader.json'

function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate a loading delay (replace this with your actual loading logic)
  useEffect(() => {
    const delay = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // Simulating a 2-second loading time
    return () => clearTimeout(delay);
  }, []);

  return (
    <>
      {isLoading ? (
        <div class="loader-container">
          <Lottie animationData={loader} />
        </div>
      ) : (
        <>
          <NavBar />
          <Banner />
          <Cards />
          <Footer />
        </>
      )}
    </>
  );
}

export default HomePage;

