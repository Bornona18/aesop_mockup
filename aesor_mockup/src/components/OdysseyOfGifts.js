import React from "react";
import "./components.css";

class OdysseyOfGifts extends React.Component{

    render(){
        return(
           <div id="odysseyMain">
               <div>
                   <h2 id="odysseyHeader">An odyssey of gifts, for generous and inpired giving</h2>
                   <ul id="odysseyUl">
                       <li className="odysseyLi">Seasonal Gift Kits</li>
                       <li className="odysseyLi">Aesop favourites</li>
                       <li className="odysseyLi">Small gestures</li>
                       <li className="odysseyLi">Generous offerings</li>
                       <li className="odysseyLi">Fragrant formulations</li>
                       <li className="odysseyLi">Treats for self</li>
                       <li className="odysseyLi">All gifts</li>
                   </ul>
               </div>
               <div>
                   <img id ="odysseyImg" src={require("../assets/images/daily.png")} alt="abstract" />
               </div>
           </div> 
        )
    }
}

export default OdysseyOfGifts;