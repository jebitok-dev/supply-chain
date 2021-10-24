import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

/* eslint-disable*/ 

const Footer = ({ twitter, telegram, github }) => (
  <footer>
    <div className="footer-wrapper py-5">
      <ul className="list-unstyled">
        <li className="my-auto d-flex">
          <NavLink exact to="/"></NavLink>
        </li>
      </ul>
      <ul className="list-unstyled footer-nav d-md-flex pb-3">
        <li className="my-auto mr-3 py-1"><NavLink to="/about">About</NavLink></li>
        <li className="my-auto py-1"><Link to="/#team">Contact</Link></li>
        <li className="my-auto ml-auto py-1"><button className="lightmodeButton"><Link to="/Input">Use Tracely</Link></button></li>
      </ul>
      <div id="hr" />
      <div className="d-flex py-3">
        <p className="my-auto">&copy; 2021 Tracely</p>
        <ul className="socials d-flex list-unstyled ml-auto my-auto">
          <li className="mx-1"><a href="https://github.com/jebitok-dev/supplychain" target="_hello"><img src={github} alt="github" width="20px" /></a></li>
          <li className="mx-1"><a href="kk" target="_hi"><img src={telegram} alt="telegram" width="20px" /></a></li>
          <li className="mx-1"><a href="kk" target="_hey"><img src={twitter} alt="twitter" width="20px" /></a></li>
        </ul>
      </div>
    </div>
  </footer>

);

export default withRouter(Footer);
