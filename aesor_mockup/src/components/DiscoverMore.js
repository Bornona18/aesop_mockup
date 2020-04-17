import React from 'react';

function DiscoverMore() {
  return (
    <div className="outsideDiscoverWrap">
        <img id="discoverImg" alt='travel gift kit' src={require('../assets/images/Aesop-Gift-Kits-2019-20-Hybris-Range-Page-Secondary-Mid-Desktop-1690x945px.png')}/>
        <div className="discoverMoreWrap">
            <h1 id='discoverMoreTitle'>Discover more</h1>
            <div className="ulWrap">
                <ul>
                    <li><a href="#">Travel</a></li>
                    <li><a href="#">Gift Kits</a></li>
                    <li><a href="#">Skin</a></li>
                    <li><a href="#">Hand & Body</a></li>
                </ul>
                <ul>
                    <li><a href="#">Cleanse</a></li>
                    <li><a href="#">Condition</a></li>
                    <li><a href="#">Treat</a></li>
                    <li><a href="#">Groom</a></li>
                </ul>
            </div>
        </div>        
    </div>
  );
}

export default DiscoverMore;