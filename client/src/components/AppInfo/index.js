import React from 'react';
import Zoom from 'react-reveal/Zoom';


function AppInfo (){
    return (
        <div className='bck_black'> 
         <div className='center_wrapper'>
             <div className='cn_wrapper'>
<Zoom duration={500}>
    <div className='cn_item'>
        <div className='cn_outer'>
            <div className='cn_inner'>
                <div className='cn_icon_sqare bck_black'></div>
                <div className='cn_icon'></div>
                <div className='cn_title'>About APP</div>
                <div className='cn_desc'>this is your Library</div>
            </div>
        </div>
    </div>
</Zoom>
<Zoom duration={500}>
    <div className='cn_item'>
        <div className='cn_outer'>
            <div className='cn_inner'>
                <div className='cn_icon_sqare bck_black'></div>
                <div className='cn_icon'></div>
                <div className='cn_title'>img</div>
                <div className='cn_desc'></div>
            </div>
        </div>
    </div>
</Zoom>
             </div>
         </div>
        </div>
    )
  
}

export default AppInfo;