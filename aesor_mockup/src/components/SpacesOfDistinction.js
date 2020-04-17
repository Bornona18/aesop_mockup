import React from "react";
import "./components.css";

class SpacesOfDistinction extends React.Component{

    render(){
        return(
           <div id="spacesMain">
               <div id="topspacesDiv">
                <div id="topspacesLeft">
                    <p className="topspacesP">Architecture and Design</p>
                    <p id="spacesHeader">Spaces of Distinction</p>
                </div>  
                <div id="topspacesRight">
                    <p className="topspacesP">Aesop stores are informed by the history, fabric and context of their local environments, yet retain an aesthetic consistency.</p>
                    <button type="button">Find a nearby store &rarr; </button>
                </div>
                </div>
               <div>
                   <img id="spaceMainImg" src={require("../assets/images/Aesop-Bleecker-Street-Carousel-1-Desktop-2560x1440px.jpg")} alt="picture"/>
                   <div id="bottomSpacesDiv">
                   <p>1 of 5</p>
                   <div id="addressSpaces">
                       <p className="address">Aesop Bleecker Street</p>
                       <p className="address">341 Bleecker St, New York, NY 10014</p>
                   </div>
                   </div>
               </div>

           </div> 
        )
    }
}

export default SpacesOfDistinction;