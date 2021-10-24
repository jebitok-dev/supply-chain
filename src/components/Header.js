import React from 'react';
import { Link, withRouter } from 'react-router-dom';
/*eslint-disable*/ 
const Header = ({ isClicked }) => (
  <section>
    <div className="hero-text">
      <h1 className="wow fadeInDown" data-wow-duration="0.5s" data-wow-delay="0.1s">Tracely</h1>
      <p className="wow fadeInDown" data-wow-duration="0.5s" data-wow-delay="0.2s">
        A digital traceability supply chain
        <br />
        verification tool
        <br />
        {' '}
        powered by blockchain
      </p>
      <button className={isClicked ? 'lightmodeButton my-2 ' : 'darkmodeButton my-2'}><Link to="/Input">Use Tracely</Link></button>
    </div>

  </section>

);

export default withRouter(Header);
