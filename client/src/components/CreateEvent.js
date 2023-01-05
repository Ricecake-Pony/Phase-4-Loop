import {useState} from "react"
import {useNavigate} from "react-router-dom"


function CreateEvent ({userEvents, setUserEvents}) {
    console.log(userEvents)
    // const {event, setting, user, setUser} = eventObj
    
    const [errors, setErrors] = useState([])

    const [eventData, setEventData] = useState({
        title: "",
        description: "",
        attire: ""

})
    // const { event, title, description, attire} = event

    let navigate = useNavigate()

    const handleChange = (e) => {
        setEventData({...eventData, [e.target.name]: e.target.value})
    }

    function handleSubmit(e) {
            e.preventDefault();
            fetch("/createvent", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(eventData),
            }).then((r) => {
                if (r.ok) {
                    r.json().then((newEvent) => {setUserEvents([...userEvents, newEvent])
                        // [] make into an array, put setterfunction here
                        // navigate('/eventcontainer')
                    })
                } else {
                    r.json().then(json => {
                        console.log(json)
                        setErrors(json.error)
                    })
                }
            })       
            
        }    

return (
    <div>
        <form onSubmit={handleSubmit}>
        <h1>Add an Event!</h1>
            <label>Event Title</label>
                <input
                    type="text"
                    name="title"
                    placeholder="New Event Title"
                    autoComplete="off"
                    value={eventData.event}
                    onChange={handleChange}
                />
            <label>Event Description</label>
                <input
                    type="text"
                    name="description"
                    placeholder="where is the event"
                    autoComplete="off"
                    value={eventData.description}
                    onChange={handleChange}
                />  
            <label>Event Attire</label>
                <input
                    type="text"
                    name="attire"
                    placeholder="What shall I wear?"
                    autoComplete="off"
                    value={eventData.attire}
                    onChange={handleChange}
                /> 
            <button type="submit">Add New Event!</button>
        </form>
        {errors? <div className = "error-message">{errors}</div>: null}
        </div>   
        );
        }


export default CreateEvent; 









//         .then(r => r.json())
    //         .then(
    //             newEvent => setEventData(...eventData, newEvent)


    //             navigate("/eventcard")
    //         )
    // }