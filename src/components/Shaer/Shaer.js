import React ,{useState} from 'react';
import './shaerStyle.css';
import {Link} from "react-router-dom";
import molana from  "../../images/molana.png"
import ferdosi from "../../images/ferdosi.png"
import hafez from "../../images/hafez.png"
import sadi from "../../images/sadi.png"
import nezami from "../../images/nezami.png"

function Shaer() {
    const [value] = useState('');

    function ashaar(event, value) {
                fetch("https://ganjgah.ir/api/ganjoor/poem/random?poetId=" + value +"?poems=true")
                    .then(res=> res.json())
                    .then(item => {
                        let poemTitle = document.querySelector('#poemTitle')
                        let poemText = document.querySelector('#poemId')
                        let poemAudio = document.querySelector('#poemAudio')
                        poemTitle.textContent = item.title;
                        let verses = item.verses;
                        let info = '';
                        verses.map((x,y) => {
                            if(y % 2 === 0){
                                info +=  '<span id="verse1">' + x.text + '</span>' + '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;' + '<span id="verse2">' + verses[y+1].text + '</span>' + "<br/>";
                            }
                        })
                        poemText.innerHTML = info
                        let srcImg = document.querySelector('#imgId')
                        srcImg.src = "https://ganjgah.ir" + item.imageUrl
                    })
    }
    return (
        <div className='shaer'>
        <div className='shaer-bg-color-orange'>
       <div className='shaer-bg-tarh'>
       </div>
           <div className='shaer-bg-color-blue'>
           </div>
            <div className='shoara'>
                <div className='molana-info'>
                    <Link to="/random/poet" value={value} onClick={(e) => ashaar(e, '97')}>
                        <img src={molana}  />
                        <span className="molana-info-span">مولانا</span>
                    </Link>
                </div>
                <div className='ferdosi-info'>
                    <Link to="/random/poet" value={value} onClick={(e) => ashaar(e, '118')}>
                        <img src={ferdosi} />
                        <span className="ferdosi-info-span">فردوسی</span>
                    </Link>
            </div>
                <div className='hafez-info'>
                    <Link to="/random/poet" value={value} onClick={(e) => ashaar(e, '9')}>
                        <img src={hafez} />
                        <span className="hafez-info-span"> حافظ</span>
                    </Link>
                </div>
                <div className='sadi-info'>
                    <Link to="/random/poet" value={value} onClick={(e) => ashaar(e, '118')}>
                        <img src={sadi} />
                        <span className="sadi-info-span"> سعدی</span>
                    </Link>
                </div>
                <div className='nezami-info'>
                    <Link to="/random/poet" value={value} onClick={(e) => ashaar(e, '110')}>
                        <img src={nezami} />
                        <span className="nezami-info-span"> نظامی </span>
                    </Link>
                </div>
            </div>
            </div>
        </div>
    )
}
export default Shaer
