import React, { Component } from 'react';
import './App.css';
import BackgroundImage from 'react-background-image-loader';
import HomepageLayout from "./components/homepageDir/homepage";

class App extends Component {
  render() {
    return (
        <div className="App">
         <BackgroundImage className="bg" src="">
                    <HomepageLayout />
         </BackgroundImage>
      </div>
    );
  }
}

export default App;


