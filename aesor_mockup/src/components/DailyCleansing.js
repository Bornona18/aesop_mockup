import React from "react";

class DailyCleansing extends React.Component{

    render(){
        return(
           <div>
               <div>
                  <p>For hands and body</p>
                <h3> Daily cleansing</h3>
                <p>Ensure impeccable hygiene with our range of mild yet efficacious formulations</p>
                <p>See all Body <img src={require("../assets/images/arrow.png")} alt="arrow" /></p>
               </div>
               <div>
                   <img src={require("../assets/images/daily_products/Aesop-Body-A-Rose-By-Any-Other-Name-Body-Cleanser-500mL-large.png")} alt="hand wash" />
                   <h4>Reverence Aromatique Hand Wash</h4>
                   <p>Woody, earthy, smoky aroma</p>
               </div>
               <div>
                   <img src={require("../assets/images/daily_products/Aesop-Body-Redemption-Body-Scrub-180mL-large.png")} alt="Scrub"/>
                   <h4>Redemption Body Scrub</h4>
                   <p>Bamboo Steam and Pumice to polish skin</p>
               </div>
               <div>
                   <img src={require("../assets/images/daily_products/")} alt="Cleansing"/>
                   <h4>Body Cleansing Slab</h4>
                   <p>Enriched with Bergamont Rind, Tahitian</p>
               </div>
               <div>
                   <img src={require("../assets/images/daily_products/Aesop-Body-Geranium-Leaf-Body-Scrub-180mL-large.png")} alt="Scrub"/>
                   <h4>Geranium Leaf Body Scrub</h4>
                   <p>Pumice, Bamboo Steam, and purifying botanical oils</p>
               </div>
               <div>
                   <img src={require("../assets/images/daily_products/Aesop-Body-Geranium-Leaf-Body-Cleanser-500mL-large.png")} alt="cleanser"/>
                   <h4>Geranium Leaf Body Cleanser</h4>
                   <p>Mandarin and Bergamont Rind oils</p>
               </div>
           </div> 
        )
    }
}

export default DailyCleansing;