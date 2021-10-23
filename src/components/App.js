import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

// components
/*eslint-disable*/ 

import NavBar from './Navbar';
import Footer from './Footer';
import InputForm from './Input';

// container

import Main from '../Containers/main';
// import Documentation from './containers/documentation';

// css

import '../styles/bootstrap-grid.min.css';
import '../styles/bootstrap.min.css';
import '../styles/animate.css';
import '../styles/navbar.css';
import '../styles/Footer.css';
import '../styles/main.css';

// icons
import dark from '../icons/dark.svg';
import light from '../icons/light.svg';
import twitter from '../icons/twitter.svg';
// import linkedin from './icons/telegram.svg';
import github from '../icons/github.svg';
import linkedin from '../icons/linkedin.svg';
import close from '../icons/close.svg';
import rightArrow from '../icons/rightarrow.svg';
import leftArrow from '../icons/leftArrow.svg';
import view from '../icons/view.svg';
import copy from '../icons/copy.svg';

class App extends Component {
  state = {
    isClicked: true,
    darkmode: dark,
    lightmode: light,
    aboutCard: [
      {
        id: 0,
        image: 'images/data.jpg',
        heading: 'Supply Chain Data',
        paragraph: 'Helping supply chain actors collect data effeciently and ensure it is stored on a secure and immutable platform',
      },
      {
        id: 1,
        image: 'images/qrcode.jpg',
        heading: 'QR Code Generator',
        paragraph: 'In-built QR Code Generator that converts data entered on blockchain convertable into sharable and downloadbale version',
      },
      {
        id: 2,
        image: 'images/verification.jpg',
        heading: 'Verification',
        paragraph: 'Data stored on the blockchain can be accessed by supply chain actors upto end-user',
      },
      {
        id: 3,
        image: 'images/logistics.jpg',
        heading: 'Logistics',
        paragraph: '',
      },
      {
        id: 4,
        image: 'images/compliance.jpg',
        heading: 'Compliance & Regulation',
        paragraph: 'Tracely works under the compliance and regulation by the Buraue of Standards and Ministry of Agriculture requirements',
      },

    ],
    teamCard: [
      {
        id: 0,
        image: 'images/cedric.jpg',
        name: 'Cedric Odongo',
        job: 'Agribusiness Expert and Market Aggregator',
        about: 'Has experience working in different value chains and helping with market aggregation',
        twitter: 'https://www.twitter.com/',
        linkedin: 'https://www.linkedin.com/in//',
      },
      {
        id: 1,
        image: 'images/',
        name: 'Svetlana',
        job: 'Back-end Developer Engineer',
        about: 'Java Developer with experience building REST APIs and scalable databases',
        twitter: 'https://twitter.com/',
        linkedin: 'https://www.linkedin.com/in/',
        github: 'https://github.com/',
      },
      {
        id: 2,
        image: 'images/jebitok.png',
        name: 'Sharon Jebitok',
        job: 'Software Developer',
        about: 'Building my skills in Software Development & blockchain technology.',
        twitter: 'https://twitter.com/SharonJebitok',
        linkedin: 'https://linkedin.com/in/sharon-jebitok',
        github: 'https://github.com/jebitok-dev',
      },
    ],
    docs: [
      {
        id: 0,
        heading: '',
        paragraph: '',
      },
    ],
  }

  render() {
    const switchMode = () => {
      this.setState({
        isClicked: !this.state.isClicked,
        darkmode: this.state.lightmode,
        lightmode: this.state.darkmode,
      });
    };

    const lightMode = {
      background: '#dee5ed',
      transition: 'all 0.2s ease',
      color: '#24292E',
    };

    const lightLinkColor = {
      color: '#C9D1D9',
    };

    const darkLinkColor = {
      color: '#24292E',
    };

    const darkMode = {
      background: '#0D1117',
      transition: 'all 0.2s ease',
      color: '#C9D1D9',
    };
    return (
      <Router>
        <div style={!this.state.isClicked ? lightMode : darkMode}>
          <div className="wrapper">
            <NavBar
              switchMode={switchMode}
              isClicked={this.state.isClicked}
              darkMode={this.state.darkmode}
              lightMode={this.state.lightmode}
              lightLinkColor={lightLinkColor}
              darkLinkColor={darkLinkColor}
            />
          </div>
        </div>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <Main
                {...props}
                darkMode={darkMode}
                lightMode={lightMode}
                isClicked={this.state.isClicked}
                card={this.state.aboutCard}
                teamCard={this.state.teamCard}
                twitter={twitter}
                github={github}
                linkedin={linkedin}
              />
            )}
          />
          <Route
            path="/Input"
            render={(props) => (
              <InputForm
                {...props}
                darkMode={darkMode}
                lightMode={lightMode}
                isClicked={this.state.isClicked}
                metamask={metamask}
                trustwallet={trustwallet}
                // binancechain={binancechain}
                walletconnect={walletconnect}
                close={close}
                view={view}
                copy={copy}
              />
            )}
          />
          <Route
            path="/documentation"
            render={(props) => (
              <Documentation
                {...props}
                docsData={this.state.docs}
                darkMode={darkMode}
                lightMode={lightMode}
                rightArrow={rightArrow}
                leftArrow={leftArrow}
                isClicked={this.state.isClicked}
                lightLinkColor={lightLinkColor}
                darkLinkColor={darkLinkColor}
              />
            )}
          />
        </Switch>

        <Footer
          twitter={twitter}
          linkedin={linkedin}
          github={github}
        />

      </Router>
    );
  }
}

export default App;
