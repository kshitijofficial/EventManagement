import EventCard from "../components/EventCard";
import { eventList } from "../utils/EventDatabase";
const SearchEventList =({monthYear})=>{
 const {selectedMonth,selectedYear}=monthYear;
 const filteredEvents = eventList.filter((eventDetail)=>{
   return (eventDetail.date.year===selectedYear && eventDetail.date.month===selectedMonth)
 })

 const renderEventCards =()=>{
  return (
   filteredEvents.map((eventDetail)=>{
    return (
      <EventCard
       key={eventDetail.id}
       id={eventDetail.id}
       date={eventDetail.date}
       heading={eventDetail.heading}
       location={eventDetail.location}/>
    )
  }))
 }

 return(
    <>
    {filteredEvents.length>0 ? (renderEventCards()):(<p>No Events in the date</p>)}
    </>
 )
}
export default SearchEventList;