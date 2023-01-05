import {useNavigate} from "react-router-dom"
import {useState} from "react"
import CreateEvent from './CreateEvent';
import EventCard from './EventCard';

const EventContainer = () => {
    
    const [events, setEvents] = useState([]);

    
    // function seeEvents(e) {
    //     e.preventDefault();
        fetch("/eventcontainer", {
            method: "GET",
            headers: {"Content-Type": "application/json"},
        }).then((eventsarray) => {
            setEvents(eventsarray);
            console.log(eventsarray);
        })       
        
        function handleAddEvent(newEvent) {
            const updatedEventsArray = [...events, newEvent];
            setEvents(updatedEventsArray);
        }
        
        function handleDeleteEvent(id) {
            const updatedEventsArray = events.filter((event) => event.id !== id);
            setEvents(updatedEventsArray);
        }

        function handleSetEvents(setEvents) {
        const updateEventsArray = events.map((event) => {
            if (event.id === setEvents.id) {
                return setEvents;
            } else {
                return event;
            }
        });
        setEvents(updateEventsArray);
        }   
    

    return (
        <main>
            <CreateEvent onCreateEvent={handleAddEvent}/>
        </main>
    )

}  
    
export default EventContainer;
    







    // const showEvents = event.map((eventObj))
    // const showEvents = eventData.map((eventObj) => {
    //     return (
    //         <EventCard
    //             key={eventObj.id}
    // })


