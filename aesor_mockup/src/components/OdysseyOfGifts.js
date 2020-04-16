import React from "react";

class OdysseyOfGifts extends React.Component{

    render(){
        return(
           <div>
               <div>
                   <h3>An odyssey of gifts, for generous and inpired giving</h3>
                   <ul>
                       <li>Seasonal Gift Kits</li>
                       <li>Aesop favourites</li>
                       <li>Small gestures</li>
                       <li>Generous offerings</li>
                       <li>Fragrant formulations</li>
                       <li>Treats for self</li>
                       <li>All gifts</li>
                   </ul>
               </div>
               <div>
                   <img src={require("../assets/images/daily.png")} alt="abstract" />
               </div>
           </div> 
        )
    }
}

export default OdysseyOfGifts;