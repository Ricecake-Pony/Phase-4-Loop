import React from "react";
import EventCard from './EventCard';

export default function Home ({user, setUser}){
    const eventList = user.map((userObj,i) => (
        <EventCard event={userObj} user={user} setUser={setUser} key={i}/>
    ))
    
    return(
        <div className = "eventlist">
        <h1>Welcome Home Loopers!</h1>
        {eventList}
        </div>

    )
}