import React from "react";
import Navbar from "../components/Navbar";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./LandingPage.css";
import carousel1 from "../assets/images/carousel1.jpg";
import carousel2 from "../assets/images/carousel2.jpg";
import carousel3 from "../assets/images/carousel3.jpg";

import aboutus from "../assets/images/aboutUs.jpg";

const images = [
  { src: carousel1, alt: "Banking Solutions 1" },
  { src: carousel2, alt: "Banking Solutions 2" },
  { src: carousel3, alt: "Banking Solutions 3" },
];

const LandingPage = () => {

  return (
    <div className="landing-container">
      <Navbar />

      <main className="hero">
      
        {/* Image Carousel */}
        <Carousel
          showThumbs={false}
          infiniteLoop
          autoPlay
          interval={4000}
          showStatus={false}
          swipeable
          emulateTouch
          dynamicHeight={false}
          className="hero-carousel"
        >
          {images.map(({ src, alt }, idx) => (
            <div key={idx}>
              <img src={src} alt={alt} />
            </div>
          ))}
        </Carousel>
      </main>

      <section className="features">
        <div className="feature">
          <h3>Smart Loan Tracking</h3>
          <p>Monitor and manage NPAs, overdue loans, and recovery pipelines with ease.</p>
        </div>
        <div className="feature">
          <h3>Secure & Compliant</h3>
          <p>Built with top-tier encryption and full compliance with financial regulations.</p>
        </div>
        <div className="feature">
          <h3>Custom Reporting</h3>
          <p>Generate insights and reports tailored to your institution’s needs.</p>
        </div>
      </section>
      <section className="aboutUsSection">
        <div className="aboutUsContainer">
          <div className="aboutUsLeft">
            <div className="backgroundTiltBox"></div>
            <img src={aboutus} alt="About Us" className="aboutUsImageOverlap" />
          </div>
          <div className="aboutUsContent">
            <h2>About Us</h2>
            <p>
              Jagannath BankTech is a forward-thinking fintech solution provider. We
              specialize in advanced NPA tracking, loan management, and digital
              compliance tools. Our mission is to empower financial institutions with
              secure, intuitive, and results-driven technology.
            </p>
          </div>
        </div>
      </section>

      <section className="assetManagementSection">
      <div className="assetManagementContainer">
        <div className="assetManagementText">
          <h2>Smooth Asset Management</h2>
          <p>
            Ensure full control and transparency over your valuable assets with our
            intelligent tools. From tracking to securing, we offer solutions that 
            prioritize safety and efficiency in asset lifecycle management.
          </p>
        </div>

        <div className="assetImageContainer">
          <div className="backgroundTiltBox"></div>
          <img src={aboutus} alt="Asset Management" className="assetImageOverlap" />
        </div>
      </div>
    </section>

    <section className="loanRecoverySection">
      <div className="loanRecoveryContainer">
        <div className="loanRecoveryImageWrapper">
          <div className="loanTiltedBox"></div>
          <img src={aboutus} alt="Loan Recovery" className="loanRecoveryImage" />
        </div>
        <div className="loanRecoveryText">
          <h2>Effortless Loan Recovery</h2>
          <p>
            Achieve faster and more reliable loan recoveries through a secure and asset-backed system. Our tools enable efficient monitoring and tracking of collaterals to ensure seamless recovery processes with minimal risk.
          </p>
        </div>
      </div>
    </section>

    <section className="contactSection">
      <div className="contactContainer">
        {/* Left: Quick Links */}
        <div className="contactLinks">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/solutions">Solutions</a></li>
            <li><a href="/recovery">Loan Recovery</a></li>
            <li><a href="/security">Asset Security</a></li>
            <li><a href="/pricing">Pricing</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        {/* Right: Map & Address */}
        <div className="contactDetails">
          <div className="mapAddressWrapper">
            <div className="mapContainer">
              {/* Replace the iframe with your map URL */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18..."
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Office Location"
              ></iframe>
            </div>
            <div className="addressContainer">
              <h4>Corporate Office</h4>
              <p>
                MicrTrack Technologies Pvt. Ltd.<br />
                Plot 17, Infotech Park,<br />
                Bhubaneswar, Odisha - 751024<br />
                India
              </p>

              {/* New: Contact Emails */}
              <div className="officeEmails">
                <p><strong>Product Queries:</strong> product@micrtrack.in</p>
                <p><strong>Business Inquiries:</strong> business@micrtrack.in</p>
                <p><strong>Call Us:</strong> +91-9876543210</p>
              </div>
            </div>
          </div>

          {/* Bottom General Info */}
          <div className="contactInfo">
            <p><strong>Support Email:</strong> support@micrtrack.in</p>
            <p><strong>Phone:</strong> +91-9876543210</p>
          </div>
        </div>
      </div>
    </section>




      <footer className="footer">
        <p>© {new Date().getFullYear()} Jagannath BankTech. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
