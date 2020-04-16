import React, {Component, Fragment } from 'react';
import Slide from './Slide'


class  Slider extends Component{
  constructor(props){
    super(props)
    this.state={
      on: false

    } 
  }
  runSlider = () => {
    this.setState({on : !this.state.on})
  }

  render(){
    return (
      <div className="topBar">
        <p className='topSlider' onClick={this.runSlider}>Complementary standard shipping on all order + </p>
        {
          this.state.on
          ? <Slide clickX={this.runSlider}/>
          : null
        }       
      </div>
    );

  }
  
  }
  



  function NavHeader(){
    const  navButtons = ['Shop','Read','Stores','Search']
    return (
      <div className='headerBackground'>
        <div className="navContainer">
          <ul className='navBttnContainer'>{
            navButtons.map((buttons => {
              return <li className='navBttns'>{buttons}</li>
              }))
            }
            <li className='logIn'> Login</li>
            <li className='LogIndot'>•</li>
          </ul>
        </div>
        < NameAndMotto />
      </div>
    )
  }
  function NameAndMotto(){
    return(
      <div className='brandMotto'>
        <div className='brandName'>
          <p>Aēsop</p>
        </div>
        <div className='brandMottoText'>
          <p className='motto1'>Formulation for Skin,Hair, home and body </p><br></br>
          <p className='motto2'>Create with sensory pleasure in mind.</p>      
        </div>
      </div>
    )
  }
  
  function Header(){
    return(
      <Fragment>
        <Slider />
        <NavHeader />
      </Fragment>
    )
  }
  


  export default Header;