import React from 'react'
import tarh from '../../images/tarh1.png'
import fal from '../../images/fal.png'
import './homeStyle.css';
import Tabs from '../Tabs/Tabs';
import {Link} from 'react-router-dom';
function Home() {
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
        <div className='home_fal_body'>
            <img className='home_logo' src={tarh} alt='title'/>
            <Tabs/>
            <div className='home_fal'>
                <div className='home_fal_info'>
                        <img src={fal} alt='fal' className='home_fal_info_img'/>
                    <div className='home_fal_info_title'>
                        <span className='home_fal_info_span'>
                                              تاریخ کهن ایران زمین با پیشینه ای از فرهنگ و هنر از دیرباز با شعر و ادبیات در هم
                        پیچیده و ایران مهد پرورش شاعران بزرگی بوده و در گیر و دار فراز و نشیب هایی که در طول تاریخ بر آن گذشت است اما شاهنامه وزین وپارسی پرور فردوسی بزرگ اشعار روح بخش مولانا و عشق بازیش با حق غزل های عاشقانه و عارفانه عالم گیر در دیوان حافظ اندیشه ژرف و عارفان ناب عطار نیشابوری همه و همه همچون مرهمی بر زخم های کوچک و برزگش مرحم داده اند</span>

                    <div className='home_buttons'>
                        <Link to="/fal">
                        <button className='home_button1' onClick={fetchFal}> فال حافظ</button>
                        </Link>
                        <Link to='/shaer'>
                        <button className='home_button2'>گنجینه اشعار</button>
                        </Link>
                    </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home
