import React from 'react';
import style from './MenuBlock.module.css';


let MenuBlock = (props) => {
    return <div style={{background: props.color}} className={style.menuBlock}>
        <div className={style.logo}>
            <img src={props.logoProfile} />
        </div>
    </div>
}

export default MenuBlock;