import { EventsComponent } from "./bits/Randoms"


const Events = () => {
  return (
    <div className="event-section">
        <h5>UPCOMING</h5>

        <h1>Events & Gatherings</h1>
        <span>Come through. No tie needed.</span>

        <div>
          <EventsComponent
            month={"JUN"}
            day={"07"}
            event_title={"Monthly Brotherhood Meetup"}
            location={"Lagos Island"}
            time={"5:00 PM"}
            mode_of_entry={"Free entry"}
          />
          <EventsComponent
            month={"JUN"}
            day={"07"}
            event_title={"Monthly Brotherhood Meetup"}
            location={"Lagos Island"}
            time={"5:00 PM"}
            mode_of_entry={"register"}
          />
          <EventsComponent
            month={"JUN"}
            day={"07"}
            event_title={"Monthly Brotherhood Meetup"}
            location={"Lagos Island"}
            time={"5:00 PM"}
            mode_of_entry={"Free entry"}
          />
        </div>
    </div>
  )
}

export default Events