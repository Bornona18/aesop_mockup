import React from "react";

class SpacesOfDistinction extends React.Component{

    render(){
        return(
           <div>
               <div>
                <div>
                    <p>Architecture and Design</p>
                    <h4>Spaces of Distinction</h4>
                </div>  
                <div>
                    <p>Aesop stores are informed by the history, fabric and context of their local environments, yet retain an aesthetic consistency.</p>
                    <button type="button">Find a nearby store <img src={require("../assets/images/arrow.png")} alt="arrow"/></button>
                </div>
                </div>
               <div>
                   <img src={require("../assets/images/Aesop-Bleecker-Street-Carousel-1-Desktop-2560x1440px.jpg")}
               </div>
           </div> 
        )
    }
}

export default SpacesOfDistinction;