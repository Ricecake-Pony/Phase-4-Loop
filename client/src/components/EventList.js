import { useState } from "react"
import { useEffect } from "react"

function EventList() {
    
    const [allEvents, setAllEvents] = useState([])
    console.log(allEvents);

    useEffect(() => {
    fetch("/events")
        .then((eventsarray) => {
            setAllEvents(eventsarray);       
    })   
    }, [])
    
    return (
        <div>
            <h1>
                All the events for you!
            </h1>
        </div>
            
    )
}   

export default EventList;



