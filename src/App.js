import React, { Component } from 'react';
import './App.css';
import logo from './assets/image/logo.svg';
import smartwatch from './assets/image/smartwatch-blue.png';

class App extends Component {
  
  constructor() {
    super();
    this.setDate = this.setDate.bind(this);
    this.state = {
      secondsDegrees: 0,
      minutesDegrees: 0,
      hoursDegrees: 0,
      containerScale: 0.1,
      containerOpacity: 0
    };
  }
  
  componentDidMount() {
    setInterval(this.setDate, 1000);
    
    setTimeout(() => {
      this.setState({
        containerScale: 1,
        containerOpacity: 1     
      });
    }, 1000);
  }
  
  setDate() {    
    const currentTime = new Date();
    
    // seconds
    let seconds = currentTime.getSeconds();    
    let secondsDegrees = seconds * 6;
    
    // minutes
    let minutes = currentTime.getMinutes();
    let minutesDegrees = minutes * 6;
 
    // hours
    let hours = currentTime.getHours();
    let hoursDegrees = (hours % 12) * 30 + (minutes / 2);

    this.setState({
      secondsDegrees: secondsDegrees,
      minutesDegrees: minutesDegrees,
      hoursDegrees: hoursDegrees
    });
  }
  
  render() {
    const { secondsDegrees, 
            minutesDegrees, 
            hoursDegrees, 
            containerScale, 
            containerOpacity } = this.state;
    
    const containerStyle = {
      transform: `scale(${containerScale})`,
      opacity: containerOpacity
    };
        
    return (
      <div id="container" style={containerStyle}>

        <img
          src={smartwatch}
          alt="smartwatch" 
        />
        
        <div id="clock">
          
          <div id="decoration">
            
            <div className="marker"></div>
            <div className="marker"></div>
            <div className="marker"></div>
            <div className="marker"></div>
            <div className="marker"></div>
            <div className="marker"></div>
            <div className="marker"></div>
            <div className="marker"></div>
            <div className="marker"></div>
            <div className="marker"></div>
            <div className="marker"></div>
            <div className="marker"></div>
            
            <div id="marker-cover"></div>
            
            <div id="logo-container">
              <img
                src={logo}
                id="watch-logo" 
                alt="logo" 
              />
            </div>
            
          </div>
          
          <div id="second-hand" style={{transform: `rotate(${secondsDegrees}deg)`}}></div>
          <div id="hour-hand" style={{transform: `rotate(${hoursDegrees}deg)`}}></div>
          <div id="minute-hand" style={{transform: `rotate(${minutesDegrees}deg)`}}></div>
          <div id="center-outside"></div>
          <div id="center-inside"></div>

        </div>

      </div>
    );
  }
}

export default App;
