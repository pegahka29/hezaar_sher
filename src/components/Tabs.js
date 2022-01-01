import React from 'react'
import logo from '../images/1 3.png'

function tabs() {
    return (
        <div className='tabs'>
          <div className='tabs_logo'>
              <img src={logo} alt='logo'/>
          </div>
            <div className='tabs_items'>
                <span className='tab1'>فال حافظ</span>
                <span className='tab2'>گنجینه اشعار</span>
                <span className='tab3'>درباره ما</span>
            </div>
        </div>
    )
}

export default tabs
