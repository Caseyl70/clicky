import React, { Component } from 'react';
import './App.css';
import images from "./images.json";
import Image from "./components /Image";
class App extends Component {
  state = {
    score: 0,
    topScore: 0,
    images: images,
    marvel: []
  }
  topScore = score => {
    if (this.state.topScore < score) {
      return score;
    } else {
      return this.state.topScore
    }
  }
  clickedHero = event => {
    const userClick = event.target.dataset.id;
    if (!this.state.marvel.includes(userClick)) {
      this.setState({
        images: this.shuffle(this.state.images),
        score: this.state.score + 1,
        topScore: this.topScore(this.state.score + 1),
        marvel: [...this.state.marvel, userClick] //creating a new array each time and the ...  is the base array essentially creating a brand new array. "Updating  the array held  within state"
      })
    } else {
      this.setState({
        images: this.shuffle(this.state.images),
        marvel: [],
        score: 0
      })
    }
  }
  shuffle = (a) => {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }
  render() {
    return (
      <div className="App" >
        <h1>Clicky Game | score: {this.state.score} | topScore: {this.state.topScore}</h1>
        {this.state.images.map(hero => (
          <Image
            id={hero.id}
            pic={hero.image}
            myFunc={this.clickedHero}
          />
        ))}

      </div>
    );
  }
}

export default App;
