import React from 'react';
import {Link} from 'react-router-dom';
import './falStyle.css';

function Fal() {
    return (
        <div className='fal'>
            <div className='fal-info'>
                <div className='poem-box'>
                    <div className='fal-poem'>
                        <div className="poem-result">
               <span id="fal-result" className='fal-result'>
               </span>
                            <span id="fal-poem-result" className='fal-poem-result'>
               </span>
                            <audio id="fal-poem-audio" controls className='fal-poem-audio' />
                        </div>
                        <div className="fal-backspace">
                            <Link to="/">
                                <button className="backspace-btn">بازگشت به صفحه اصلی</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Fal
