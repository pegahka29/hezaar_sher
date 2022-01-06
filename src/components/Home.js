import React from 'react'
import tarh from  '../images/tarh1.png'
import fal from  '../images/fal.png'
function home() {
    return (
        <div className='home_fal_body'>
            <div className='home_fal'>
                    <div className='home_logo'>
                        <img src={tarh} alt='title'/>
                    </div>
                <div className='home_fal_info'>
                        <img src={fal} alt='fal' className='home_fal_info_img'/>
                    <div className='home_fal_info_title'>
                        <span className='home_fal_info_span'>
                                              تاریخ کهن ایران زمین با پیشینه ای از فرهنگ و هنر از دیرباز با شعر و ادبیات در هم
                        پیچیده و ایران مهد پرورش شاعران بزرگی بوده و در گیر و دار فراز و نشیب هایی که در طول تاریخ بر آن گذشت است اما شاهنامه وزین وپارسی پرور فردوسی بزرگ اشعار روح بخش مولانا و عشق بازیش با حق غزل های عاشقانه و عارفانه عالم گیر در دیوان حافظ اندیشه ژرف و عارفان ناب عطار نیشابوری همه و همه همچون مرهمی بر زخم های کوچک و برزگش مرحم داده اند</span>

                    <div className='home_buttons'>
                        <button className='home_button1'>فال حافظ</button>
                        <button className='home_button2'>گنجینه اشعار</button>
                    </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default home
