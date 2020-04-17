import React from "react";
import "./components.css";

class ForAllAges extends React.Component{

    render(){
        return(
           <div id="forAllMain">
               <div id="forAllLeft">
               <p className="textAllAgesLeft">Nurturing formulations</p>
               <h3 className="textAllAgesLeft">For all ages, genders and skin types</h3>
               <p className="textAllAgesLeft">Healthy skin is the product of careful cleansing, nourishing hydration and protection against environmental factors.</p>
               <p className="textAllAgesLeft">See all Body &rarr; </p>
               </div>
               <div id="forAllItemsDiv">
               <div className="forAllItems">
                   <img className="allAgesImg" src={require("../assets/images/for_all_products/Aesop-Skin-Parsley-Seed-Anti-Oxidant-Serum-100mL-medium.png")} alt="Serum" />
                   <h5>Parsley Seed Anti-Oxidant Serum</h5>
                   <p className="productsDesc">Perfect for use in humid climates</p>
               </div>
               <div className="forAllItems">
                   <img className="allAgesImg" src={require("../assets/images/for_all_products/Aesop-Skin-Mandarin-Facial-Hydrating-Cream-60mL-large.png")} alt="Cream" />
                   <h5>Mandarin Facial Hydrating Cream</h5>
                   <p className="productsDesc">Rapidy absorbed, lightly hydrating</p>
               </div>
               <div className="forAllItems">
                   <img className="allAgesImg" src={require("../assets/images/for_all_products/Aesop-Skin-Fabulous-Face-Oil-25mL-Large-684x668px.png")} alt="Oil" />
                   <h5>Fabulous Face Oil</h5>
                   <p className="productsDesc">Softens, nourishes and balances skin</p>
               </div>
               <div className="forAllItems">
                   <img className="allAgesImg" src={require("../assets/images/for_all_products/Aesop-SkinParsley-Seed-Facial-Cleanser-100mL-large.png")} alt="Cleanser" />
                   <h5>Parsley Seed Facial Cleanser</h5>
                   <p className="productsDesc">For those in polluted urban environments</p>
               </div>
               <div className="forAllItems">
                   <img className="allAgesImg" src={require("../assets/images/for_all_products/AesopSkin-B-Tea-Balancing-Toner-200mL-large.png")} alt="Cleanser" />
                   <h5>B&Tea Balancing Toner</h5>
                   <p className="productsDesc">Particularly suited to sensitive skin</p>
               </div>
               </div>
           </div>
        )
    }
}

export default ForAllAges;