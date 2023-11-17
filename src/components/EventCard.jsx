import {Link} from "react-router-dom"
import "./EventCard.css"
const EventCard=({id,heading,date,location})=>{
  const {year,month}=date;
  return (
    <Link to={`/events/${id}`}>
     <div className="card">
       <h3>{heading}</h3>
       <p>Year: {year} Month: {month}</p> 
       <p>{location}</p>
     </div>
  </Link> 
  )
}

export default EventCard
