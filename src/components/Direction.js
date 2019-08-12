import React from 'react'
import { MdPhone,MdLocationOn ,MdEmail} from "react-icons/md";
import scrollToComponent from 'react-scroll-to-component';
// layoutObject
export default (props)=>(
    <div className="direction">
        <div
        onClick={() => scrollToComponent(props.layoutObject.location, { offset: -150, align: 'middle', duration: 1000})}
        >
            <div className="location"><MdLocationOn /></div>
            <div>Auf der Warte 1, 61184 Karben</div>
        </div>
        <div
        onClick={() => scrollToComponent(props.layoutObject.contact, { offset: 0, align: 'middle', duration: 1000})}
        >
            <div className="phone"><MdPhone /></div>
            <div>06039 41414</div>
        </div>
        <div
        onClick={() => scrollToComponent(props.layoutObject.contact, { offset: 0, align: 'middle', duration: 1000})}
        >
            <div className="mail"><MdEmail /></div>
            <div>info@larik-praxis.de</div>
        </div>
    </div>
)
