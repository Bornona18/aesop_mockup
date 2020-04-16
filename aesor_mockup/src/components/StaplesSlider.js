import React, { Component } from 'react'
import ProductTile from 'ProductTile.js'

class StaplesSlider extends Component {
  
    constructor(props) {
      super(props);
  
      this.state = {
        images: [
          '../assets/images/staple_products/Aesop-Hand-Resurrection-Aromatique-Hand-Wash-500mL-large.png',
          '../assets/images/staple_products/Aesop-Body-Resurrection-Aromatique-Hand-Balm-75mL-large.png',
          '../assets/images/staple_products/Large-PNG-Aesop-Personal-Deodorant-50mL-large.png',
          '../assets/images/staple_products/Aesop-Skin-Purifying-Facial-Exfoliant-Paste-75mL-large.png',
          '../assets/images/staple_products/Aesop-Skin-Camellia-Nut-Facial-Hydrating-Cream-60mL-large.png'
        ],
        names: [
          'Resurrection Aromatique Hand Wash',
          'Resurrection Aromatique Hand Balm',
          'Deodorant',
          'Purifying Facial Exfoliant Paste',
          'Camellia Nut Facial Hydrating Cream'
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