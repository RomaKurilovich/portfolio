import React from 'react';
import style from './myFullInfo.module.css';

let MyFullInfo = (props) => {
    return <div className={style.myInfo}>
        <div>
            <div className={style.headline}> ОБРАЗОВАНИЕ </div>
            <div className={style.justText}>
                Неоконченое высшее. Учился в БГУИРе на ФИТУ на специальности АСОИ.
                Не сдал вовремя зачет из-за чего был не допущен к сдаче экзаменов.
                Забрал документы незакрыв вторую сессию. (С армией проблем нет)
                </div>
        </div>
        <div>
            <div className={style.headline}> МОИ ЗНАНИЯ </div>
            <div className={style.justText}>
                Изучаю веб около года, за это время сделал несколько небольших проектов на react (не коммерческих),
                не много знаком с C++ (матрицы, ссылки, циклы, if else),
                пару раз трогал node js express mongodb. Ищу работу как frontend developer,
                но в планах на будущее стать full stack developer
                </div>
        </div>
        <div>
            <div className={style.headline}> КЛЮЧЕВЫЕ НАВЫКИ </div>
            <div className={style.justText}>
                React, Redux, axios, thunk, typescript, hooks, classes,
                selectors/reselect, LocalStorage, понимание flux архитектуры, module css, grid, flexbox, styled-components.
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