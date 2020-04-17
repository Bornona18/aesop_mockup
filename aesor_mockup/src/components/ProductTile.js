import React, { Component } from 'react';

class ProductTile extends Component {
    render(){
        return (
            <div className="tileWrap">
              <img alt={this.props.title} src={this.props.image}/>
              <h1> {this.props.title} </h1>
              <p> {this.props.description} </p>
            </div>
          );
    } 
}

export default ProductTile;