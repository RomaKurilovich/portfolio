import React, { useState } from 'react';
import style from './Portfolio.module.css';
import MenuBlock from './menuBlock/MenuBlock';
import logoProfile from '../img/profileInfo.png';
import contacts from '../img/contacts.png';
import myWorks from '../img/myWorks.png';
import myFoto from '../img/I.jpg';

const block = {
    openInfoBlock: 'openInfoBlock',
    openMyWorksBlock: 'openMyWorksBlock',
    openMyContactsBlock: 'openMyContactsBlock',
    closedAll: 'closedAll',
}



let Portfolio = (props) => {

    const [openBlock, setopenBlock] = useState(block.closedAll);

    return <div className={style.app}>
        <div className={style.portfolioApp}>
            <div className={style.myFoto}> <img src={myFoto} /> </div>
            <div className={style.firstInfo}>
                <div className={style.name}>Roma</div>
                <div className={style.name}>kurilovich</div>
                <div className={style.specialty}>Junior react developer</div>
            </div>

            <div className={style.aboutMe} onClick={()=>setopenBlock(block.openInfoBlock)}> <MenuBlock logoProfile={logoProfile} color="#4AB6EE" /> </div>
            <div className={style.myWorks} onClick={()=>setopenBlock(block.openMyWorksBlock)}> <MenuBlock logoProfile={myWorks} color="#A6C41F" /></div>
            <div className={style.contacts} onClick={()=>setopenBlock(block.openMyContactsBlock)}> <MenuBlock logoProfile={contacts} color="#7B9F00" /></div>

            { openBlock === block.openInfoBlock && <div className={style.myInfo}>
                tut rodilsay tut uchilsay
            </div>}
            { openBlock === block.openMyWorksBlock && <div className={style.aboutMyWorks}>
                tut moi raboti
            </div>}
            { openBlock === block.openMyContactsBlock && <div className={style.aboutMyContacts}>
                tut moi kinacti
            </div>}
        </div>

    </div>
}

export default Portfolio;