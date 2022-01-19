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

                    </div>
                    <div className='tafsir-fal'>
                        <img src="" id="imgId" alt="" />
                        <div className="ashaar-shaer-result">
                                <span className='tafsir-title'> :ای صاحب فال
                                </span>
                            <span className='tafsir-text'>  روز های غم و سختی به زودی تمام خواهد شد و خبر های خوشی به شما
                                میرسد، چنان ذوق زده خواهی شد که برای خودتان هم غیر قابل باور است
                                مطمن باش که دیگر ناراحتی های تو دوام ندارد و به زودی روزگار خوشی فرا خواهد رسید
                                </span>
                        </div>

                    </div>
                    <div className="fal-backspace">
                        <Link to="/">
                            <button className="backspace-btn">بازگشت به صفحه اصلی</button>
                        </Link>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Fal
