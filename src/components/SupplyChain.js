import React from 'react';
/* eslint-disable*/ 
const Community = ({ isClicked }) => (
  <section className="community-wrapper">
    <h1>Our Community</h1>
    <p>You can join the community if you're interested in supply chain verification solution or you can help better our idea</p>
    <p>
      Visit our
      <a href="https://github.com/jebitok-dev/supply-chain" target="sbalck">Github</a>
      {' '}
      repository.
    </p>
    <p>You are welcome to discuss any project related to Tracely with our friendly community in our Forums.</p>
    <p>Any contribution or partnership is welcome.</p>
    <button className={isClicked ? 'lightmodeButton' : 'darkmodeButton'}><a href="https://t.me/alph_One" target="bla_nck">Join Our Community</a></button>
  </section>
);

export default Community;
