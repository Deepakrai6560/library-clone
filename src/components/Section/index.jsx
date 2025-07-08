import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import bcaImage from '../../assets/bca.png';
import bbaImage from '../../assets/bba.png';
import mcaImage from '../../assets/mca.png';
import mbaImage from '../../assets/mba.png';
import valueMba from '../../assets/value-mba.png';
import valueMca from '../../assets/value-mca.png';

import image1 from '../../assets/library.png';
import image2 from '../../assets/library2.png';
import image3 from '../../assets/library3.png';

const Index = () => {
  const images = [image1, image2, image3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % images.length);
    }, 4000); // 4 seconds per image
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className='bg-img'></div>
      <section className='library-section'>
        <div className='left'>
          <h2>About the Digital Library</h2>
          <p>
            The MAIMT Digital Library is a gateway to a rich collection of academic resources,
            research papers, journals, e-books, and more. Our aim is to provide students and
            faculty with seamless access to quality learning materials anytime, anywhere.
          </p>
          <p>
            Whether you're preparing for exams or conducting research, the digital library
            ensures you have the right tools at your fingertips, supported by modern technology
            and an intuitive interface.
          </p>
          <button>Details</button>
        </div>
        <div className='right'>
          <div className='slideshow-wrapper'>
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Slide ${idx + 1}`}
                className={`slideshow-image ${idx === currentIndex ? 'active' : ''}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className='bottom-part'>
        <h2>E-CONTENT</h2>
        <div className='container-bottom'>
          {[
            { to: "/bca", img: bcaImage, label: "BCA" },
            { to: "/bba", img: bbaImage, label: "BBA" },
            { to: "/mca", img: mcaImage, label: "MCA" },
            { to: "/mba", img: mbaImage, label: "MBA" },
            { to: "/value-management", img: valueMba, label: "ADDED COURSE FOR MANAGEMENT" },
            { to: "/value-computer", img: valueMca, label: "ADDED COURSE FOR COMPUTER APPLICATIONS" }
          ].map(({ to, img, label }, i) => (
            <Link key={i} to={to}>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={img} alt={label} style={{ width: '60px', height: '60px', marginBottom: '8px',borderRadius: '50%'}} />
                    {label}
                  </div>
                  <div className="flip-card-back">
                    {label}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
};

export default Index;
