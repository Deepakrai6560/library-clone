import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import './Index.css';

const Index = () => {
  return (
    <nav className="navLinks">
      <div className="mail">
        <MdOutlineMail size={15} />
        <a href="mailto:director@maimt.com" target="_blank" rel="noopener noreferrer">
          director@maimt.com
        </a>
      </div>

      <div className="center-textArea">
        Welcome To MAHARAJA AGRASEN INSTITUTE of Management & Technology Digital Library
      </div>

      <div className="social-media-links">
        <a href="https://www.facebook.com/maimtdetail/" target="_blank" rel="noopener noreferrer">
          <FaFacebookF size={15} />
        </a>
        <a href="https://www.youtube.com/channel/UC1QMVfQRa6IC-ljOBu1HIBQ" target="_blank" rel="noopener noreferrer">
          <FaYoutube size={15} />
        </a>
        <a href="https://www.instagram.com/maimt_official/" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={15} />
        </a>
        <a href="https://www.linkedin.com/school/maimtdetail/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
          <FaLinkedinIn size={15} />
        </a>
      </div>
    </nav>
  );
};

export default Index;