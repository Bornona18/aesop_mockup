import React from 'react';

function DiscoverMore() {
  return (
    <div className="outsideDiscoverWrap">
        <img id="discoverImg" alt='travel gift kit' src={require('../assets/images/Aesop-Discover-More-Desktop-1860x969px.png')}/>
        <div className="discoverMoreWrap">
            <h2 id='discoverMoreTitle'>Discover more</h2>
            <div className="ulWrap">
                <ul>
                    <li><a href="#" target="blank">Travel</a></li>
                    <li><a href="#" target="blank">Gift Kits</a></li>
                    <li><a href="#" target="blank">Skin</a></li>
                    <li><a href="#" target="blank">Hand & Body</a></li>
                </ul>
                <ul>
                    <li><a href="#" target="blank">Cleanse</a></li>
                    <li><a href="#" target="blank">Condition</a></li>
                    <li><a href="#" target="blank">Treat</a></li>
                    <li><a href="#" target="blank">Groom</a></li>
                </ul>
            </div>
        </div>        
    </div>
  );
}

export default DiscoverMore;