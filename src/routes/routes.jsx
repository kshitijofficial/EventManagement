import EventList from "../pages/EventList/EventList.jsx";
import FilterEvents from "../pages/FilterEvents/FilterEvents.jsx";
import EventDetail from "../pages/EventDetails/EventDetails.jsx";

export const routes = [
  { path: "/", element: <EventList /> },
  { path: "/find-events", element: <FilterEvents /> },
  { path: "/events/:id", element: <EventDetail /> },
];
