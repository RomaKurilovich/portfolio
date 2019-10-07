import React, { useState } from 'react';
import style from './Portfolio.module.css';
import MenuBlock from './menuBlock/MenuBlock';
import logoProfileWhite from '../img/profileInfo.png';
import logoProfileColor from '../img/profileInfoColor.png';
import contactsWhite from '../img/contacts.png';
import contactsColor from '../img/contactsColor.png';
import myWorksWhite from '../img/myWorks.png';
import myWorksColor from '../img/myWorksColor.png';
import myFoto from '../img/I.jpg';
import MyFullInfo from './../ui/myInfo/myFullInfo';
import MyWorks from './myWorks/myWorks';
import MyContacts from './myContacts/myContacts';


const block = {
    openInfoBlock: 'openInfoBlock',
    openMyWorksBlock: 'openMyWorksBlock',
    openMyContactsBlock: 'openMyContactsBlock',
    closedAll: 'closedAll',
}

let Portfolio = () => {

    const [openBlock, setopenBlock] = useState(block.closedAll);

    return <div className={style.app}>
        <div className={style.portfolioApp}>
            <div className={style.myFoto}> <img alt="Roma Kurilovich" src={myFoto} /> </div>
            <div className={style.firstInfo}>
                <div className={style.name}>Roma</div>
                <div className={style.name}>kurilovich</div>
                <div className={style.specialty}>Junior react developer</div>
            </div>

            <div className={style.aboutMe} onClick={
                () => setopenBlock(block.openInfoBlock)
            }> <MenuBlock logo={openBlock === block.openInfoBlock ? logoProfileColor : logoProfileWhite} colorHover='#87CCEE' selected={openBlock === block.openInfoBlock} color="#4AB6EE" />
            </div>

            <div className={style.myWorks} onClick={
                () => setopenBlock(block.openMyWorksBlock)
            }> <MenuBlock logo={openBlock === block.openMyWorksBlock ? myWorksColor : myWorksWhite} colorHover='#B6C479' selected={openBlock === block.openMyWorksBlock} color="#A6C41F" />
            </div>

            <div className={style.contacts} onClick={
                () => setopenBlock(block.openMyContactsBlock)
            }><MenuBlock logo={openBlock === block.openMyContactsBlock ? contactsColor : contactsWhite} colorHover='#929F68' selected={openBlock === block.openMyContactsBlock} color="#7B9F00" />
            </div>

            {openBlock === block.openInfoBlock && <div className={style.myInfo}>
                <MyFullInfo />
            </div>}
            {openBlock === block.openMyWorksBlock && <div className={style.aboutMyWorks}>
                <MyWorks />
            </div>}
            {openBlock === block.openMyContactsBlock && <div className={style.aboutMyContacts}>
                <MyContacts />
            </div>}
        </div>

    </div>
}

export default Portfolio;