// homePage.jsx
import React, { useState, useEffect } from 'react';
import Header from '../../../components/user/header/header';
import Footer from '../../../components/user/footer/footer';
import Banner from '../../../components/user/banner/banner';
import Cards from '../../../components/user/cards/cards';
import Lottie from "lottie-react";
import loader from '../../../assets/loader.json'
import './homePage.css'

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
        <div className ="loader-container">
          <Lottie animationData={loader} />
        </div>
      ) : (
        <>
          <Header />
          <Banner />
          <Cards />
          <Footer />
        </>
      )}
    </>
  );
}

export default HomePage;

