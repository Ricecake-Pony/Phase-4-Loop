import {useState} from "react"
import {useNavigate} from "react-router-dom"


function CreateEvent ({event}) {
    const [errors, setErrors] = useState([])

    const [eventData, setEventData] = useState({
        title: "",
        description: "",
        attire: ""

})

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
                    r.json().then((newEvent) => {setEventData(...eventData, newEvent)
                        navigate('/eventcard')
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
        <h3>Add an Event!</h3>
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
                    placeholder="casual, black tie..."
                    autoComplete="off"
                    value={eventData.attire}
                    onChange={handleChange}
                />  
        </form>
        {errors? <div className = "error-message">{errors}</div>: null}
        </div>   
        );
        }


export default CreateEvent 









//         .then(r => r.json())
    //         .then(
    //             newEvent => setEventData(...eventData, newEvent)


    //             navigate("/eventcard")
    //         )
    // }