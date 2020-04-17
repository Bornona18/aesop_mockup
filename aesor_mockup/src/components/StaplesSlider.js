import React, { Component } from 'react'
import ProductTile from './ProductTile'

class StaplesSlider extends Component {
  
    constructor(props) {
      super(props);
  
      this.state = {
        images: [
          require('../assets/images/staple_products/Aesop-Hand-Resurrection-Aromatique-Hand-Wash-500mL-large.png'),
          require('../assets/images/staple_products/Aesop-Body-Resurrection-Aromatique-Hand-Balm-75mL-large.png'),
          require('../assets/images/staple_products/Large-PNG-Aesop-Personal-Deodorant-50mL-large.png'),
          require('../assets/images/staple_products/Aesop-Skin-Purifying-Facial-Exfoliant-Paste-75mL-large.png'),
          require('../assets/images/staple_products/Aesop-Skin-Camellia-Nut-Facial-Hydrating-Cream-60mL-large.png')
        ],
        titles: [
          'Resurrection Aromatique Hand Wash',
          'Resurrection Aromatique Hand Balm',
          'Deodorant',
          'Purifying Facial Exfoliant Paste',
          'Camellia Nut Facial Hydrating Cream'
        ],
        descriptions: [
          'Gentle cleansing for hard-working hands',
          'Richly hydrating, greaseless finish',
          'Woody, herbaceous, earthy aromatics',
          'Enhanced with fine Quartz and Lactic Acid',
          'A nourishing blend of nut a plant extracts'
        ]
      }
    }
    
    render(){
      return (
        <div className="staplesWrapper">
          <div className="descWrap">
            <h3>A selection of staples</h3>
            <p>From beloved formulations first created decades ago to personal care necessities</p>
          </div>
          <ProductTile title={this.state.titles[0]} description={this.state.descriptions[0]} image={this.state.images[0]}/>
          <ProductTile title={this.state.titles[1]} description={this.state.descriptions[1]} image={this.state.images[1]}/>
          <ProductTile title={this.state.titles[2]} description={this.state.descriptions[2]} image={this.state.images[2]}/>
          <ProductTile title={this.state.titles[3]} description={this.state.descriptions[3]} image={this.state.images[3]}/>
          <ProductTile title={this.state.titles[4]} description={this.state.descriptions[4]} image={this.state.images[4]}/>

        </div>
      );
    }
  }
  
  export default StaplesSlider;