import React from "react";
// import CreateEvent from './CreateEvent';
import {useState} from "react"
import {useNavigate} from "react-router-dom"


export default function EventCard({eventObj}) {
    

    const {event, title, description, attire} = eventObj
    
    const [plusOne, setPlusOne] = useState(false)

    // const [event_setting, setevent_setting] = useState(false)

    let navigate = useNavigate()

    function handleClick(e) {
        e.preventDefault();
        fetch("/eventcard", {
            method: "GET",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(plusOne),
        }).then((r) => {setPlusOne(!plusOne);
            navigate('/eventcard')

        })        
    }    

    return(
        <div className="eventCard">
            {`Event's Title: ${event.title}`}
            {`Event's Description: ${event.description}`}
            {`Event's Attire: ${event.attire}`}
            <br/>
        <button onClick={handleClick}>
            {plusOne}
        </button>
        </div>

    )
}

// {/* {`Gotta plus one?: ${plus_one} yes : no `}  */}
//             {/* some how we can make this boolean work, we need to use a ternary.. */}


    // plus_one = {event_settings: true}
 // const handleClick = () => {
    //     setPlusOne(!plusOne)
    // }

        // const [errors, setErrors] = useState([])
