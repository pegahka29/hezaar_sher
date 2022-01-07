import React from 'react';
import './Ashaar.css';
import bg from '../../images/shaer.png'

function Ashaar() {
    return(
        <div className="container-poets">
            <img src={bg} className="bg-tarh-r" alt="" />
            <div className="flex-direction">
                <div className="list--poets-random-p">
                    <img src="" id="imgId" alt="" />
                    <div className="box-poems">
                        <p id="poemTitle"></p>
                        <p id="poemId"></p>
                    </div>
                </div>
                <div className="box-about-poets">
                    <p id="textPoet"></p>
                    <audio controls id='poemAudio'></audio>
                </div>
            </div>
        </div>
    )
}

export default Ashaar;
