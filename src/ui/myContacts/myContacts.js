import React from 'react';
import style from './myContacts.module.css';

let MyContacts = () => {
    return <div className={style.contacts}>
        <div className={style.myContacts}>
         <div>+375 (29) 201-78-37</div>
        <div>kamazaff22@gmail.com</div>
        </div>
    </div>
}

export default MyContacts;