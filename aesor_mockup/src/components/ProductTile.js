import React, { Component } from 'react';


class ProductTile extends Component {
    render(){
        return (
            <div className="tileWrap">
              <img className="productTileImg" alt={this.props.title} src={this.props.image}/>
              <h5> {this.props.title} </h5>
              <p className="productsDesc"> {this.props.description} </p>
            </div>
          );
    } 
}

export default ProductTile;