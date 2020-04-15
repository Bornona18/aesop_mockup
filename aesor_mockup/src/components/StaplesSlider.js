import React, { Component } from 'react'

class App extends Component {
  
    constructor(props) {
      super(props);
  
      this.state = {
        firstTile: this.tiles[0],
        tiles: []
      }
    }
    
    render(){
      return (
        <div className="App">
          
        </div>
      );
    }
  }
  
  export default App;