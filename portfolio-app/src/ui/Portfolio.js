import React from 'react';
import style from './Portfolio.module.css';
import MenuBlock from './menuBlock/MenuBlock';
import logoProfile from '../img/profileInfo.png';
import contacts from '../img/contacts.png';
import myWorks from '../img/myWorks.png';
import myFoto from '../img/I.jpg';



let Portfolio = (props) => {
    return <div className={style.app}>
        <div className={style.portfolioApp}>
            <div className={style.myFoto}> <img src={myFoto} /> </div>
            <div className={style.firstInfo}>
                <div className={style.name}>Roma</div>
                <div className={style.name}>kurilovich</div>
                <div className={style.specialty}>Junior react developer</div>
            </div>
            <div className={style.aboutMe}> <MenuBlock logoProfile={logoProfile} color="#4AB6EE" /> </div>
            <div className={style.myWorks}> <MenuBlock logoProfile={myWorks} color="#A6C41F" /></div>
            <div className={style.contacts}> <MenuBlock logoProfile={contacts} color="#7B9F00" /></div>
        </div>
    </div>
}

export default Portfolio;