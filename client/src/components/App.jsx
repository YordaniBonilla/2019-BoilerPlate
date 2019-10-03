import React, { Component } from "react";
import logo from "../logo.svg";
import "./App.css";
import logo2 from '../anchor.svg'
import logo3 from '../hummingbird.svg'
class App extends Component {

	render() {
    return (
      <div className="App">
        <header className="App-header">
   
        <img className="hummingbird" src={logo3}/>
      
        2019 BoilerPlate
        </header>
        
        <div className="logos">
        <img className="App-logo" src={logo} />
        <img className="App-logo" src={logo2} />
        </div>
        <div>
        <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        <a href="https://www.freepik.com/free-photos-vectors/background">Background vector created by rawpixel.com - www.freepik.com</a>
        </div>
      </div>
    );
  }
}
export default App;