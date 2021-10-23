import React from 'react';
import Header from '../components/Header';
import About from '../components/About';
import Team from '../components/Team';
import Features from '../components/Features';
import Community from '../components/SupplyChain';
/*eslint-disable*/ 
const App = ({
  isClicked, card, teamCard, twitter, github, linkedin, lightMode, darkMode,
}) => (
  <main>
    <div style={!isClicked ? lightMode : darkMode}>
      <div className="wrapper">
        <Header
          isClicked={isClicked}
        />
        <About
          isClicked={isClicked}
        />
        <Features
          card={card}
          isClicked={isClicked}
        />
      </div>
    </div>

    <div className="team">
      <div className="wrapper">
        <Team
          teamCard={teamCard}
          twitter={twitter}
          github={github}
          linkedin={linkedin}
        />
      </div>
    </div>
    <div style={!isClicked ? lightMode : darkMode}>
      <div className="wrapper">
        <Community
          isClicked={isClicked}
        />
      </div>
    </div>
  </main>
);

export default App;