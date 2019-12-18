import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PicCard from "./components/PicCard/PicCard.js";
import Wrapper from "./components/Wrapper/Wrapper.js";
import Score from "./components/Score/Score.js"
import landmarks from "./landmarks.json";

class App extends Component {

  state = {
    landmarks,
    clickedArray:[],
    topScore: 0,
    score: 0,
    message: "",
    shakeit: "false"
  };

  clickPicture = id => {
    const shuffledArray = this.shuffleArray(landmarks);
    this.setState({landmarks: shuffledArray});
    if (this.state.clickedArray.includes(id)) {
      this.setState({ score: 0, clickedArray: [], message: "Wrong! Game Over. Click an image to start again!", shakeit:"true"});
    } else {
      this.setState({
        clickedArray: this.state.clickedArray.concat([id]),
        score: this.state.score +1,
        message: "You Guessed Correctly!",
        shakeit: "false"
      });
    }
    if (this.state.score > this.state.topScore) {
      this.setState({ topScore: this.state.score });
    }
    if(this.state.score  === 12) {
      this.setState({message: "You Won! Great Job! Click to play again!"});
      return;
    }
  }
    shuffleArray = (landmarksArray) => {
      for (let i = landmarksArray.length -1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [landmarksArray[i], landmarksArray[j]] = [landmarksArray[j], landmarksArray[i]];
      }
      return landmarksArray;
    }
  render() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className = "App-title">Welcome To The Landmarks Clicky Game Made By React!</h1>
      </header>
      <Score
      score = {this.state.score}
      topscore = {this.state.topScore}
      message = {this.state.message}
      />
      <Wrapper
      shakeWrapper = {this.state.shakeit}
      pictures = 
      {this.state.landmarks.map(picture => (
        <PicCard
        clickPicture = {this.clickPicture}
        id={picture.id}
        key = {picture.id}
        name = {picture.name}
        image = {picture.image}
        />
      ))}
      />
      <footer className = "footer">
        <div className = "container">
          <span className="text-muted">© Turan Ketene</span>
        </div>
      </footer>
    </div>
  );
  }
}

export default App;
