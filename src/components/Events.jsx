import { EventsComponent } from "./bits/Randoms"


const Events = () => {
  return (
    <div className="event-section">
        <h5>UPCOMING</h5>

        <h1>Events & Gatherings</h1>
        <span className="event-description">Come through. No tie needed.</span>

        <div>
          <EventsComponent
            month={"JUL"}
            day={"18"}
            event_title={"Monthly Circle Meetup"}
            location={"Lagos Island"}
            time={"10:00 AM"}
            mode_of_entry={"Free entry"}
          />
          <EventsComponent
            month={"NOV"}
            day={"07"}
            event_title={"Mentorship & Career Panel"}
            location={"Abuja"}
            time={"10:00 AM"}
            mode_of_entry={"Register"}
          />
          <EventsComponent
            month={"JAN"}
            day={"27"}
            event_title={"Annual Justusboys Retreat"}
            location={"Africa"}
            time={"10:00 AM"}
            mode_of_entry={"Free entry"}
          />
        </div>
    </div>
  )
}

export default Events