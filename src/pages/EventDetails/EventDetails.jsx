import { useParams } from "react-router-dom";
import { eventList } from "../../utils/EventDatabase";
import Navigation from "../../components/Navgation/Navgation";
import "./EventDetails.css";
import { MdCalendarMonth } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

const EventDetails = () => {
  const { id } = useParams();
  const numId = Number(id);
  const filtereEventArray = eventList.filter((eventDetail) => {
    return eventDetail.id === numId;
  });

  const filteredEvent = filtereEventArray[0];

  return (
    <div className="event-details-container">
      <Navigation />
      <div className="event-details-wrapper">
        <img src={filteredEvent.img} alt="Event" />
        <div className="event-details-content">
          <h3>Event Name : {filteredEvent.heading}</h3>
          <div className="small-details">
            <p className="date">
              <MdCalendarMonth className="icon" />
              <span className="font-weight-med">
                {filteredEvent.date.month}
              </span>
              <span className="font-weight-med">{filteredEvent.date.year}</span>
            </p>
            <p className="location font-weight-med">
              <IoLocationSharp className="icon" />
              {filteredEvent.location}
            </p>
          </div>
          <p className="description">
            <span className="description-heading">Event Description:</span>
            <span className="description-heading-para">
              {filteredEvent.description}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
