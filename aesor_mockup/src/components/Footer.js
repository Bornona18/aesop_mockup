import React, { Fragment } from 'react';



const contacts = [
    'Contact Us',
    'Contact us',
    'FAQs',
    'Delivery and Returns',
    'Track your order',
    'Check Gift Card balance',
    'Terms and conditions',
    'Accessibility'
  ]
  
  const about =[
  'About',
  'Our story',
  'Careers',
  'Press',
  'Corporate gifts',
  'Facial appointment'
  ]
  
  const social = [
    'Social',
    'Instagram ↗', 
    'Twitter ↗', 
    'LinkedIn ↗' 
  ]
  
  function FooterLinks(props){
    return( 
     <Fragment>
        <ul className='FooterLinkBorder'>
          {
            props.arr.map((Links, id) =>{
              if(id === 0 ){
                return <li className='FooterLinklListTitle'>{Links}</li>
              }
              else{
                return <li className='FooterLinklList'>{Links}</li>
              }
            })
          }
        </ul>
      </Fragment>
    )
  
  }
  
  function Footer(){
    return(
      <Fragment>
        <div className='Footer'>
          <div className='fotterSubs'>
            <p>I would like to recieve communications about Aesop products,stores and events and matters of culteral interest</p>
  
            <input 
              className='email' 
              type="email" 
              name="email" 
              placeholder='email'
              />
          </div>
  
        
          <div className= 'footerLinkContainer'>
            <FooterLinks arr={contacts} />
            <FooterLinks arr={about}/>
            <FooterLinks  arr={social}/>
          </div>
      
      </div>
      <div className="bottomLogo"> ©  Aesop</div>
   </Fragment>
    )
  
  }

  export default  Footer;