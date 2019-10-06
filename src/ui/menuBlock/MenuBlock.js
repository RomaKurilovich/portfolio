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
        } else setCursore('pointer')
    }, [props.selected])

    let mouseOver = () =>{
        if (!props.selected){
            setColor(props.colorHover)
        }
    }

    return <div style={{background: color, cursor: cursor }} onMouseOver={mouseOver} onClick={()=>setColor(props.color)} onMouseOut={()=>setColor(props.color)} className={style.menuBlock}>
        <div className={style.logo}>
            <img src={props.logoProfile} />
        </div>
    </div>
}

export default MenuBlock;