import React, { Component } from 'react'
import ProductTile from 'ProductTile.js'

class StaplesSlider extends Component {
  
    constructor(props) {
      super(props);
  
      this.state = {
        images: [
          
        ],
        names: [

        ],
        descriptions: [

        ]
      }
    }
    
    render(){
      return (
        <div className="wrapper">
          
          <ProductTile name="" description=""/>
          <ProductTile name="" description=""/>
          <ProductTile name="" description=""/>
          <ProductTile name="" description=""/>
          <ProductTile name="" description=""/>
          <ProductTile name="" description=""/>

        </div>
      );
    }
  }
  
  export default App;