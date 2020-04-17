import React from "react";
import "./components.css";

class DailyCleansing extends React.Component{

    render(){
        return(
           <div id="dailyMain">
               <div id="leftSideDiv">
                  <p className="dailyParagraph">For hands and body</p>
                <h2 id="dailyHeader"> Daily cleansing</h2>
                <p className="dailyParagraph">Ensure impeccable hygiene with our range of mild yet efficacious formulations</p>
                <p>See all Body <img src={require("../assets/images/arrow.png")} alt="arrow" /></p>
               </div>
               <div>
                   <img className="dailyImg" src={require("../assets/images/daily_products/Aesop-Body-A-Rose-By-Any-Other-Name-Body-Cleanser-500mL-large.png")} alt="hand wash" />
                   <h5>Reverence Aromatique Hand Wash</h5>
                   <p className="productsDesc">Woody, earthy, smoky aroma</p>
               </div>
               <div>
                   <img className="dailyImg" src={require("../assets/images/daily_products/Aesop-Body-Redemption-Body-Scrub-180mL-large.png")} alt="Scrub"/>
                   <h5>Redemption Body Scrub</h5>
                   <p className="productsDesc">Bamboo Steam and Pumice to polish skin</p>
               </div>
               <div>
                   <img className="dailyImg" src={require("../assets/images/daily_products/Aesop-Body-Geranium-Leaf-Body-Cleanser-500mL-large.png")} alt="Cleansing"/>
                   <h5>Body Cleansing Slab</h5>
                   <p className="productsDesc">Enriched with Bergamont Rind, Tahitian</p>
               </div>
               <div>
                   <img className="dailyImg" src={require("../assets/images/daily_products/Aesop-Body-Geranium-Leaf-Body-Scrub-180mL-large.png")} alt="Scrub"/>
                   <h5>Geranium Leaf Body Scrub</h5>
                   <p className="productsDesc">Pumice, Bamboo Steam, and purifying botanical oils</p>
               </div>
               <div>
                   <img  className="dailyImg" src={require("../assets/images/daily_products/Aesop-Body-Geranium-Leaf-Body-Cleanser-500mL-large.png")} alt="cleanser"/>
                   <h5>Geranium Leaf Body Cleanser</h5>
                   <p className="productsDesc">Mandarin and Bergamont Rind oils</p>
               </div>
           </div> 
        )
    }
}

export default DailyCleansing;