import React from 'react';
/* eslint-disable*/ 
const Community = ({ isClicked }) => (
  <section className="community-wrapper row">
    <div className="col-sm-8">
      <h1 color="">Our Community</h1>
      <br />
      <p className="text-align">You can join the community if you're interested in supply chain verification solution or you can help better our idea. Producers who want to show authenticity by communicating eco-friendly production practices.
      Manufacturers who want to tap into consumers values by allowing them to verify the authenticity of their products and help them make informed purchasing decisions.
      Certification bodies that want a tool to ease auditing and enhance the speed of quality control  procedures
      Consumers who want to “vote” with their money supporting responsible food
      You are welcome to discuss any project related to Tracely with our friendly community in our Forums.
      Any contribution or partnership is welcome.</p>
      <button className={isClicked ? 'lightmodeButton' : 'darkmodeButton'}><a href="https://t.me/joinchat/t8Dl5-j2GjczZjFk" target="bla_nck">Join Our Community</a></button>
    </div>
    <div className="col-sm-4">
      <img className="about-img" src="images/compliance.jpg" alt="" />
    </div>

  </section>
);

export default Community;
