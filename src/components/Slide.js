import React from 'react';

function Slide(props){

    return(
        <div className='shippingCont'>
            <button className='exit' onClick={props.clickX}>X</button>
            <div className='SlideTop'>
                <p>Shipping fees and delivery times</p>
            </div>

            <div className='slideBottom'>
                <div className='sliderInner1'>
                    <div className='sliderL'>
                        <p>  Standard Shipping </p>
                        <p>2-4 business days</p>
                        <p>Order by December 16, 11:59 PM EDT to ensure delivery by December 24</p>
                        
                     </div> 
             
                    <p className='sliderR'> Complimentary </p>
            
                </div>
               
                <div className='sliderInner2'>
                    <div className='sliderL'>
                        <p> Next Day Shipping </p>
                        
                        <p>Order by 12PM for delivery on the next working day</p>
                                    
                    </div> 

                    <p className='sliderR'>
                         $35  </p> 
                    </div>               
                
             </div>


        </div>
    )
}

export default Slide;