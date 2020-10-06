import React from "react";

import NavBar from "../components/navBar.js";
import Devices from "../images/illustration-devices.svg";
import "./styles/homePage.css";

class HomePage extends React.Component {
    
    render() {
        
    return (
      <div>
        <NavBar state={this.state}/>
        <div className="hero container">
          <div className="hero__description">
            <div className="hero__description--overTitle">
              <p className="hero__description--new">NEW</p>
              <p>M O N O G R A P H D A S H B O A R D</p>
            </div>
            <div className="hero__description--principal">
              <h1 className="hero__description--title">
                POWERFUL INSIGHTS INTO YOUR TEAM
              </h1>
              <p>
                Project planning and time tracking <br /> for agile teams
              </p>
              <div className="hero_description--button">
                <button >SCHEDULE A DEMO</button>
                <div className="hero_description--text">
                  <p>T O</p> <p> S E E</p> <p> A</p> <p> L I V E</p>{" "}
                  <p>P R E V I E W</p>
                </div>
              </div>
            </div>
          </div>
          <div className="hero__container--images">
            <div className="hero__container--background">
              <img src={Devices} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
