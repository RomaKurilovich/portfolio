import React from 'react';
import style from './myFullInfo.module.css';

let MyFullInfo = () => {
    return <div className={style.myInfo}>
        <div>
            <div className={style.headline}> ОБРАЗОВАНИЕ </div>
            <div className={style.justText}>
                Неоконченное высшее. Учился в БГУИРе на ФИТУ на специальности АСОИ.
                (С армией проблем нет)
                </div>
        </div>
        <div>
            <div className={style.headline}> ОБО МНЕ </div>
            <div className={style.justText}>
            Frondend разработчик, участвовал в разработке нескольких проектов на react,
             базовые знания C++ (матрицы, ссылки, циклы, if else),
              базовые знания node js express mongodb. 
              Рассматриваю предложения на full time с официальным трудоустройством.
                </div>
        </div>
        <div>
            <div className={style.headline}> КЛЮЧЕВЫЕ НАВЫКИ </div>
            <div className={style.justText}>
                React, Redux, javascript, axios, thunk, typescript, hooks, classes, RestAPI, async/await, promises, git,
                reselect, LocalStorage, flux, module css, grid, flexbox, styled-components.
                </div>
        </div>
        <div>
            <div className={style.headline}> МОЙ АНГЛИЙСКИЙ </div>
            <div className={`${style.justText} ${style.english}`}> 
                 A2 pre-intermediate
                </div>
        </div>
    </div>
}

export default MyFullInfo;