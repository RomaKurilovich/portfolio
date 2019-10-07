import React, {useState, useEffect} from 'react';
import style from './MenuBlock.module.css';


let MenuBlock = (props) => {
    debugger
    const [color, setColor] = useState('')
    const [cursor, setCursore] = useState('pointer')

    useEffect(()=>{
        setColor(props.color)
    }, [props.color])

    useEffect(()=>{
        if (props.selected) {
            setCursore('default')
            setColor('#FFFFFF')
        } else {
            setCursore('pointer')
            setColor(props.color)
        }
    }, [props.selected])

    let mouseOver = () =>{
        if (!props.selected){
            setColor(props.colorHover)
        } 
    }
    let mouseOut = () => {
        if (props.selected) {
            setColor('#ffffff')
        } else setColor(props.color)
    }
    let click = () => {
        if (props.selected){
            setColor('#ffffff')
        } else setColor(props.color)
    }

    return <div style={{background: color, cursor: cursor }} onMouseOver={mouseOver} onClick={click} onMouseOut={mouseOut} className={style.menuBlock}>
        <div className={style.logo}>
            <img src={props.logo}/>
        </div>
    </div>
}

export default MenuBlock;