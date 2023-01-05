import React from "react";
import EventCard from './EventCard';
import CreateEvent from './CreateEvent';
import { useState } from "react"; 
import { useEffect } from "react";

export default function Home ({user, setUser}){

    const [userEvents, setUserEvents] = useState ([])
    console.log(userEvents)
    useEffect (() => {
        if (user && user.events) {
        setUserEvents(user.events)
        }
        // if (user && user.events)
    },[user]);
    
    
    
    const eventList = userEvents.map((eventObj,i) => (
        <EventCard event={eventObj} user={user} setUser={setUser} key={i} />))


    
    return(
        <div className = "eventlist">
        <h1>Welcome Home Loopers!</h1>
        <h2>Here are the events you are attending!</h2>
        {eventList}
        <CreateEvent userEvents = {userEvents} setUserEvents = {setUserEvents}/>
        </div>
    )
}

       // UseEffect happens last (child components to Parent components) so this map occurred grabbing a user before the session cookie of the logged in user can be obtained. We used "user &&"to check user is valid, and then map the array.
        
    // const eventSetting = user.event_settings.map((setting,i) => (
    //     <EventCard eventSetting={setting} user={user} setUser={setUser} key={i} />
    
    // ))

    // const eventInfo = user.events + user.event_settings
    // console.log(eventInfo)
    // const eventDeets = eventInfo.map((info, i) => (
        // <EventCard eventData= {info} key={i} />))
    // Lets try concating event_settings with events to have all objects within one array to be mapped.