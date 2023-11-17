import EventCard from "../components/EventCard";
import { eventList } from "../utils/EventDatabase";
import Navigation from "../components/Navgation"

const EventList =()=>{
 const renderEventCards =()=>{
      return eventList.map(({id,date,heading,location})=>{
          return ( <EventCard 
            key={id}
            id={id}
            date={date.toString()}
            heading={heading}
            location={location}
            />)
   })}
 return(
    <div>
    <Navigation/>
    {eventList.length>0?
    (renderEventCards()):(<p>No events available</p>)}
    </div>
 )
}
export default EventList;