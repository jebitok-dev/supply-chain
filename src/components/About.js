import React from 'react';
/* eslint-disable*/ 
const About = ({ isClicked }) => (
  <section className="about-section">
    <h2 className="wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.1s">What Is Tracely</h2>
    <div className="about-wrapper d-flex flex-column flex-md-row wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.1s">
      {/* <div>
        <p>Tracely is a digital tracer and verifier that allows supply chain actors to record data of the varoius svalue chain endpoints</p>
        <p>The success of the Tracely will be totally achieved with a global community of supply chain actors of various Value Chains and researchers with blockchain experts who will create tools and research data, to help make this successful especially with complaince</p>
      </div> */}
      <div>
        <p>We are leveraging blockchain technology to build a digital traceability solution that enables consumers to trace the origin/movement of food products in the supply chain. Our solution captures relevant information about food products and stores this information on the blockchain for security and verification and all this information is available to consumers via QR code labeling. By working with food safety authorities and eco-friendly certification bodies, consumers can scan labels on product packaging with their smartphones to verify specific product claims thus helping them to make informed purchasing decisions hence companies with positive environmental efforts won't struggle to differentiate themselves in the crowded marketplace.</p>
      </div>
      <div className="w-100 about-img-container d-flex justify-center"><img className="about-img" src="images/chain.png" alt="" /></div>
    </div>
  </section>
);

export default About;
