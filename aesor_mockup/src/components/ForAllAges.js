import React from "react";

class ForAllAges extends React.Component{

    render(){
        return(
           <div>
               <div>
               <p>Nurturing formulations</p>
               <h3>For all ages, genders and skin types</h3>
               <p>Healthy skin is the product of careful cleansing, nourishing hydration and protection against environmental factors.</p>
               <p>See all Body <img src={require("../assets/images/arrow.png")} alt="arrow" /></p>
               </div>
               <div>
                   <img src={require("../assets/images/for_all_products/Aesop-Skin-Parsley-Seed-Anti-Oxidant-Serum-100mL-medium.png")} alt="Serum" />
                   <h3>Parsley Seed Anti-Oxidant Serum</h3>
                   <p>Perfect for use in humid climates</p>
               </div>
               <div>
                   <img src={require("../assets/images/for_all_products/Aesop-Skin-Mandarin-Facial-Hydrating-Cream-60mL-large.png")} alt="Cream" />
                   <h3>Mandarin Facial Hydrating Cream</h3>
                   <p>Rapidy absorbed, lightly hydrating</p>
               </div>
               <div>
                   <img src={require("../assets/images/for_all_products/Aesop-Skin-Fabulous-Face-Oil-25mL-Large-684x668px.png")} alt="Oil" />
                   <h3>Fabulous Face Oil</h3>
                   <p>Softens, nourishes and balances skin</p>
               </div>
               <div>
                   <img src={require("../assets/images/for_all_products/Aesop-SkinParsley-Seed-Facial-Cleanser-100mL-large.png")} alt="Cleanser" />
                   <h3>Parsley Seed Facial Cleanser</h3>
                   <p>For those in polluted urban environments</p>
               </div>
               <div>
                   <img src={require("../assets/images/for_all_products/AesopSkin-B-Tea-Balancing-Toner-200mL-large.png")} alt="Cleanser" />
                   <h3>B&Tea Balancing Toner</h3>
                   <p>Particularly suited to sensitive skin</p>
               </div>
           </div> 
        )
    }
}

export default ForAllAges;