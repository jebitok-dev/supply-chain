import React from 'react';
/* eslint-disable*/ 
const About = ({ isClicked }) => (
  <section className="about-section">
    <h2 className="wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.1s">What Is SmartTrace</h2>
    <div className="about-wrapper d-flex flex-column flex-md-row wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.1s">
      <div>
        <p>SmartTrace is a digital tracer and verifier that allows supply chain actors to record data of the varoius value chain batch endpoints</p>
        <p>Data is stored on the blockchain for security and storage. With this data the user can generate QR Code that can be printed out into document</p>
        <p>and stored on blockchain in hash rate format. The QR Code can be attached on end product for end-user or buyer to check various VC information.</p>
      </div>
      <div className="w-100 about-img-container d-flex justify-center"><img className="about-img" src="images/about.png" alt="" /></div>
    </div>
  </section>
);

export default About;
