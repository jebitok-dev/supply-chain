import React from 'react';
import { Link, withRouter } from 'react-router-dom';
/*eslint-disable*/ 
const Header = ({ isClicked }) => (
  <section className="row">
    <div className="col hero-text">
      <h1 className="wow fadeInDown" data-wow-duration="0.5s" data-wow-delay="0.1s">Tracely</h1>
      <p className="wow fadeInDown" data-wow-duration="0.5s" data-wow-delay="0.2s">
        A digital  
        <br />
        traceability solution
        <br />
        {' '}
        powered on blockchain
      </p>
      <button className={isClicked ? 'lightmodeButton my-2 ' : 'darkmodeButton my-2'}><Link to="/Input">Use Tracely</Link></button>
    </div>
    <div className="col hero-text">
      <img className="about-img" src="images/chain.png" alt="" />
    </div>
  </section>

);

export default withRouter(Header);
