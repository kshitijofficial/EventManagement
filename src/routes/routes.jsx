// routes.js
import EventList from '../pages/EventList'
import FilterEvents from '../pages/FilterEvents'
import EventDetail from "../pages/EventDetails"

export const routes = [
  { path: "/", element: <EventList /> },
  { path: "/find-events", element: <FilterEvents /> },
  { path: "/events/:id", element: <EventDetail /> }
];
