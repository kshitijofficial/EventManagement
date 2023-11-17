import { useParams } from "react-router-dom"
import { eventList } from "../utils/EventDatabase"
import Navigation from "../components/Navgation"

const EventDetails=()=>{
  const {id}=useParams()
  const numId=Number(id)
  const filtereEventArray = eventList.filter((eventDetail)=>{
      return eventDetail.id===numId
  })

  const filteredEvent = filtereEventArray[0]
 
  return (
    <>
      <Navigation/>
      <img src={filteredEvent.img} alt="Event" height={700} />
      <p>Event Name:{filteredEvent.heading}</p>
      <p>Event Month:{filteredEvent.date.month}</p>
      <p>Event Year:{filteredEvent.date.year}</p>
      <p>Event Location:{filteredEvent.location}</p>
      <p>Event Description:{filteredEvent.description}</p>
    </>
  )
}

export default EventDetails
