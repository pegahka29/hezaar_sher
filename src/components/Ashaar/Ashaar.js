import React from 'react';
import './Ashaar.css';
import refresh from "../../images/refresh.png"
function Ashaar() {
    return(
        <div className='ashaar-container'>
            <div className='ashaar-tarh'>
            </div>
            <div className='poets'>
                <div className='ashaar-box'>
                    <div className="ashaar-shaer-orange-box">
                        <div className='ashaar-shaer-white-box'>
                            <img src="" id="imgId" alt="" />
                            <div className="ashaar-shaer-result">
                                <span id="poemTitle" className='poemTitle'>
                                </span>
                                <span id="poemId" className='poemId'>
                                </span>
                            </div>
                        </div>
                        <img src={refresh} alt='update' className='refresh-ashaar'/>
                        </div>
                </div>
                </div>
            </div>
    )
}

export default Ashaar;
