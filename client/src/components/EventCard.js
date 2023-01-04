import React from "react";

export default function EventCard({event, setting, user, setUser}){
    console.log(event, setting)

    // plus_one = {event_settings: true}
    return(
        <div className="eventCard">
            {`Event's Title: ${event.title}`}
            {`Event's Description: ${event.description}`}
            {`Event's Attire: ${event.attire}`}
            {/* {`Got your plus one? ${event_settings.plus_one}`} */}
            <br/>
            <br/>
            {/* {`Gotta plus one?: ${plus_one} yes : no `}  */}
            {/* some how we can make this boolean work, we need to use a ternary.. */}
        </div>

    )
}