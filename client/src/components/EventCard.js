import React from "react";
import {useState} from "react"
// import CreateEvent from './CreateEvent';

// import {useNavigate} from "react-router-dom"


export default function EventCard({event, title, description, attire}) {
    console.log(event);

    
    const [plusOne, setPlusOne] = useState(false)


    function handleClick(e) {
        e.preventDefault();
        fetch("/eventcard", {
            method: "GET",
            headers: {"Content-Type": "application/json"},
            // body: JSON.stringify(plusOne),
        }).then((r) => {setPlusOne(!plusOne);
            // navigate('/eventcard')

        })  
    }    


    
    return(
        <div className="eventCard">
            <h3>{`Event's Title: ${event.title}`}</h3>
            <h4>{`Event's Description: ${event.description}`}</h4>
            <h5>{`Event's Attire: ${event.attire}`}</h5>
        <br/> 
        {/* <button onClick={handleClick}>{plusOne ? "Lone Ranger" : "More Friends, More fun"}</button> */}
        </div>

    )
}


  //   setBringiningBuddy("I have Friends!")

    // function addBuddy() {
    //     if (plusOne) {
    //         // eslint-disable-next-line no-undef
    //         <button onClick={handleClick}>Lone Ranger</button>

    //     } else {
    //         <button onClick={handleClick}>Lone Ranger</button>
    //     }
    // }


// const [bringiningBuddy, setBringiningBuddy] = useState("Lone Ranger")

    // let navigate = useNavigate()



// {bringiningBuddy}
// {/* {`Gotta plus one?: ${plus_one} yes : no `}  */}
//             {/* some how we can make this boolean work, we need to use a ternary.. */}


    // plus_one = {event_settings: true}
 // const handleClick = () => {
    //     setPlusOne(!plusOne)
    // }

        // const [errors, setErrors] = useState([])
