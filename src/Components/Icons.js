
import React from "react"
import { FaRegCircle,FaTimes } from "react-icons/fa";

function Icon(props){
switch(props.choice){
    case "cross":
        return <FaTimes className="icon"/>
    case "circle":
        return <FaRegCircle className="icon"/>
    default :
        return ""
}
}
export default Icon