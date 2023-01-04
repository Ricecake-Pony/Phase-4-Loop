import React from "react";
import EventCard from './EventCard';

export default function Home ({user, setUser}){
    // console.log(user)
    const eventList = user && user.events.map((userObj,i) => (
        <EventCard event={userObj} user={user} setUser={setUser} key={i} />))

        // UseEffect happens last (child components to Parent components) so this map occurred grabbing a user before the session cookie of the logged in user can be obtained. We used "user &&"to check user is valid, and then map the array.
        
    // const eventSetting = user.event_settings.map((setting,i) => (
    //     <EventCard eventSetting={setting} user={user} setUser={setUser} key={i} />
    
    // ))

    // const eventInfo = user.events + user.event_settings
    // console.log(eventInfo)
    // const eventDeets = eventInfo.map((info, i) => (
        // <EventCard eventData= {info} key={i} />))
    // Lets try concating event_settings with events to have all objects within one array to be mapped.

    
    
    return(
        <div className = "eventlist">
        <h1>Welcome Home Loopers!</h1>
        {eventList}
        </div>
    )
}