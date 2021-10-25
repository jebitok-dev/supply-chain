import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';

/* eslint-disable */ 
class NavBar extends Component {
	state = {
	  clicked: false,
	}

	render() {
	  // hamburger button color
	  const hamLight = {
	    background: '#5E5E5E',
	  };

	  const hamDark = {
	    background: '#C9D1D9',
	  };

	  // hamburger click function
	  const handleClick = () => {
	    this.setState({
	      clicked: !this.state.clicked,
	    });
	  };
	  return (
  <header>
    <div className="navbar">
      <li className={this.state.clicked ? 'd-none' : 'd-block list-unstyled'}>
        <NavLink exact to="/"></NavLink>
      </li>
      <span className={this.state.clicked ? 'd-block' : 'd-none'} onClick={this.props.switchMode}><img src={this.props.lightMode} alt="ok" width="20px" /></span>
      <div className="togglenavbar" onClick={handleClick}>
        <div className={this.state.clicked ? 'ln1 hamburger' : 'hamburger '} style={!this.props.isClicked ? hamLight : hamDark} />
        <div className={this.state.clicked ? 'ln2 hamburger' : 'hamburger '} style={!this.props.isClicked ? hamLight : hamDark} />
        <div className={this.state.clicked ? 'ln3 hamburger' : 'hamburger'} style={!this.props.isClicked ? hamLight : hamDark} />
      </div>
    </div>
    <nav className={this.state.clicked ? 'nav1' : 'nav'}>
      <ul className="d-flex list-unstyled m-0">
        <li className="list-unstyled" onClick={handleClick}>
          <NavLink exact to="/"></NavLink>
        </li>
        <li onClick={handleClick}><NavLink style={this.props.isClicked ? this.props.lightLinkColor : this.props.darkLinkColor} exact to="/documentation">Documentations</NavLink></li>
        <div />
        <li onClick={handleClick}><a style={this.props.isClicked ? this.props.lightLinkColor : this.props.darkLinkColor} href="" target="blackx">About</a></li>
        <div />
        <li onClick={handleClick}><Link to="/#team" style={this.props.isClicked ? this.props.lightLinkColor : this.props.darkLinkColor} animate={{ offset: 0, duration: 500 }}>Contact</Link></li>
        <li onClick={handleClick}><button className={this.props.isClicked ? 'lightmodeButton' : 'darkmodeButton'}><NavLink to="/Input">Use Tracely</NavLink></button></li>
      </ul>
    </nav>
    <div className="desktop-nav">
      <nav className="topnav">
        <ul className="d-flex list-unstyled my-3">
          <li className="m-0">
            <NavLink exact to="/"></NavLink>
            <ul className="my-auto ml-2 list-unstyled"><li className="my-auto"><NavLink style={this.props.isClicked ? this.props.lightLinkColor : this.props.darkLinkColor} exact to="/">Tracely</NavLink></li></ul>
          </li>
          <li className="ml-auto my-auto"><NavLink style={this.props.isClicked ? this.props.lightLinkColor : this.props.darkLinkColor} to="/documentation">About</NavLink></li>
          <li className="my-auto"><a style={this.props.isClicked ? this.props.lightLinkColor : this.props.darkLinkColor} href="" target="blackx">Contact</a></li>
          <li className="my-auto"><Link to="/#team" style={this.props.isClicked ? this.props.lightLinkColor : this.props.darkLinkColor} animate={{ offset: 0, duration: 500 }}>Team</Link></li>
          <li className="my-auto"><button className={this.props.isClicked ? 'lightmodeButton' : 'darkmodeButton'}><NavLink to="/Input">Use Tracely</NavLink></button></li>
          <li onClick={this.props.switchMode}><img src={this.props.lightMode} alt="ok" width="20px" /></li>
        </ul>
      </nav>
    </div>
  </header>
	  );
	}
}

export default withRouter(NavBar);
