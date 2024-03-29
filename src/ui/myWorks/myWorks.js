import React, { useState } from 'react';
import style from './myWorks.module.css';
import MyWorkButton from './myWorkButton';
import portfolio from '../../img/portfolio.png';
import todo from '../../img/todo.png';
import weather from '../../img/weather.png';
import socialnetwork from '../../img/socialnetwork.png';


const SelectedWork = {
    portfolio: 'portfolio',
    todo: 'todolist',
    weatherApp: 'weatherApp',
    socialNetwork: 'socialNetwork'
}

let MyWorks = () => {

    const [selectedWork, setSelectedWork] = useState(SelectedWork.portfolio);

    return <div>
        <div>
            <div className={style.choiceWork}>
                <MyWorkButton selected={selectedWork === SelectedWork.portfolio} onClick={() => setSelectedWork(SelectedWork.portfolio)}>My portfolio</MyWorkButton>
                <MyWorkButton selected={selectedWork === SelectedWork.todo} onClick={() => setSelectedWork(SelectedWork.todo)}>To do list</MyWorkButton>
                <MyWorkButton selected={selectedWork === SelectedWork.weatherApp} onClick={() => setSelectedWork(SelectedWork.weatherApp)}>Weather app</MyWorkButton>
                <MyWorkButton selected={selectedWork === SelectedWork.socialNetwork} onClick={() => setSelectedWork(SelectedWork.socialNetwork)}>Social network</MyWorkButton>
            </div>
            <div className={style.allMyWorks}>


                {selectedWork === SelectedWork.portfolio && <div className={style.myWork}>
                    <div className={style.status}><div className={style.statusSpan}>Status:</div> <div className={style.statusRes}>completed</div></div>
                    <div>
                        <div>Demo: <a href="https://romakurilovich.github.io/portfolio/">romakurilovich.github.io/portfolio/</a></div>
                        <div>Source: <a href="https://github.com/RomaKurilovich/portfolio">github.com/RomaKurilovich/portfolio</a></div>
                    </div>
                    <div className={style.technology}> <div className={style.technologySpan}>Technology stack:</div>
                        <div className={style.technologyStack}>
                            React, hooks, grid, module css.
                    </div>
                    </div>
                    <div className={style.portfolioImg}> <img alt="portfolio" src={portfolio}></img> </div>
                </div>}


                {selectedWork === SelectedWork.todo && <div className={style.myWork}>
                    <div className={style.status}><div className={style.statusSpan}>Status:</div> <div className={style.statusRes}>completed</div></div>
                    <div>
                        <div>Demo: <a href="https://romakurilovich.github.io/todo-app/">romakurilovich.github.io/todo-app/</a></div>
                        <div>Source: <a href="https://github.com/RomaKurilovich/todo-app">github.com/RomaKurilovich/todo-app</a></div>
                    </div>
                    <div className={style.technology}> <div className={style.technologySpan}>Technology stack:</div>
                        <div className={style.technologyStack}>
                            React, redux, RestAPI, nodejs, express, mongodb, heroku, selectors, classes, thunk, axios, styled-components.
                    </div>
                    </div>
                    <div className={style.portfolioImg}> <img alt="portfolio" src={todo}></img> </div>
                </div>}


                {selectedWork === SelectedWork.weatherApp && <div className={style.myWork}>
                    <div className={style.status}><div className={style.statusSpan}>Status:</div> <div className={style.statusRes}>completed</div></div>
                    <div>
                        <div>Demo: <a href="https://romakurilovich.github.io/weather-app-for-test/">romakurilovich.github.io/weather-app-for-test/</a></div>
                        <div>Source: <a href="https://github.com/RomaKurilovich/weather-app-for-test">github.com/RomaKurilovich/weather-app-for-test</a></div>
                    </div>
                    <div className={style.technology}> <div className={style.technologySpan}>Technology stack:</div>
                        <div className={style.technologyStack}>
                            React, redux, RestAPI, localStorage, axios, hooks, thunk, grid.
                    </div>
                    </div>
                    <div className={style.portfolioImg}> <img alt="portfolio" src={weather}></img> </div>
                </div>}


                {selectedWork === SelectedWork.socialNetwork && <div className={style.myWork}>
                    <div className={style.status}><div className={style.statusSpan}>Status:</div> <div className={style.statusRes}>On development stage</div></div>
                    <div>
                        <div>Demo: <a href="https://romakurilovich.github.io/social-network/#/login">romakurilovich.github.io/social-network/#/</a></div>
                        <div>Source: <a href="https://github.com/RomaKurilovich/social-network">github.com/RomaKurilovich/social-network</a></div>
                    </div>
                    <div className={style.technology}> <div className={style.technologySpan}>Technology stack:</div>
                        <div className={style.technologyStack}>
                            React, redux, RestAPI, typescript, classes, hooks, thunk, redux-form, axios, grid, flex, styled-components, module css.
                    </div>
                    </div>
                    <div className={style.portfolioImg}> <img alt="portfolio" src={socialnetwork}></img> </div>
                </div>}
            </div>
        </div>

    </div>
}

export default MyWorks