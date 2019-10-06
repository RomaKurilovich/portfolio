import React, {useState} from 'react';
import style from './myWorks.module.css';
import MyWorkButton from './myWorkButton';

const SelectedWork = {
    portfolio: 'portfolio',
    todo: 'todolist',
    weatherApp: 'weatherApp',
    socialNetwork: 'socialNetwork'
}

let MyWorks = (props) => {

    const [selectedWork, setSelectedWork] = useState(SelectedWork.portfolio);

    return <div>
        <div>
            <div className={style.choiceWork}>
                <MyWorkButton selected={selectedWork === SelectedWork.portfolio} onClick={()=>setSelectedWork(SelectedWork.portfolio)}>My portfolio</MyWorkButton>
                <MyWorkButton selected={selectedWork === SelectedWork.todo} onClick={()=>setSelectedWork(SelectedWork.todo)}>To do list</MyWorkButton>
                <MyWorkButton selected={selectedWork === SelectedWork.weatherApp} onClick={()=>setSelectedWork(SelectedWork.weatherApp)}>Weather app</MyWorkButton>
                <MyWorkButton selected={selectedWork === SelectedWork.socialNetwork} onClick={()=>setSelectedWork(SelectedWork.socialNetwork)}>Social network</MyWorkButton>
            </div>
            <div>
                <div> first info</div>
                <div> all info </div>
            </div>
        </div>

    </div>
}

export default MyWorks