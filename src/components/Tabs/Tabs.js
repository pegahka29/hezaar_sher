import React from 'react'
import './tabsStyle.css'
import logo from '../../images/logo.png'
import {Link} from 'react-router-dom';

function Tabs() {
    function fetchFal(){
        fetch("https://ganjgah.ir/api/ganjoor/hafez/faal")
            .then(res=> res.json())
            .then(data => {
                let id = document.querySelector('#fal-result');
                let text = document.querySelector('#fal-poem-result');
                let audio = document.querySelector('#fal-poem-audio')
                id.textContent = data.title;
                let poemFal = data.verses;

                let info = '';
                poemFal.map((x,y) => {
                    if(y % 2 === 0){
                        info +=  '<span class="verse1">' + x.text + '</span>' + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + '<span class="vers2">' + poemFal[ y+1 ].text + '</span>' + "<br/>";
                    }
                })
                text.innerHTML = info
                audio.src = data["recitations"][0].mp3Url;
            })
    }
    return (
        <div className='tabs'>
          <div className='tabs_logo'>
              <img src={logo} alt='logo'/>
          </div>
            <div className='tabs_items'>
                <Link to="/fal">
                <span className='tab1' onClick={fetchFal}>فال حافظ</span>
                </Link>
                <Link to='/random/poet'>
                <span className='tab2'>گنجینه اشعار</span>
                </Link>
                <span className='tab3'>درباره ما</span>
            </div>
        </div>
    )
}

export default Tabs
