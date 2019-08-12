import React from 'react'
import { FiClock } from "react-icons/fi";
import scrollToComponent from 'react-scroll-to-component';

//layoutObject
export default (props)=>(
    <div className="timing"
    onClick={() => scrollToComponent(props.layoutObject.contact, { offset: 0, align: 'middle', duration: 1000})}
    >
        <div className="icon time" style={{color:"#1ea51e",fontWeight:"bold"}}><FiClock /></div>
        <div>
            Montag to Freitag:   08.30 – 13.00 und 14.00 - 17.00 Uhr
        </div>
    </div>
)