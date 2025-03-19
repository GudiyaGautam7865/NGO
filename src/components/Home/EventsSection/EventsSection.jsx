import EventsSections from "../../../assets/Events.jpg"
import EventsSections1 from "../../../assets/Hopes2.png"
import EventsSections2 from "../../../assets/Events1.jpg"
import styles from "./EventsSection.module.css";

const events = [
  {
    id: 1,
    date: "22",
    month: "Janu",
    title: "School For African Poor Children",
    time: "4:00pm-6:00pm",
    location: "New York",
    image: EventsSections,
    color: "#E5A623",
  },
  {
    id: 2,
    date: "25",
    month: "Feb",
    title: "Solve the Water Problem of World",
    time: "4:00pm-6:00pm",
    location: "United Arab",
    image: EventsSections1,
    color: "#26A69A",
  },
  {
    id: 3,
    date: "28",
    month: "March",
    title: "Your Old Clothes are Their Happiness.",
    time: "4:00pm-6:00pm",
    location: "Singapore",
    image: EventsSections2,
    color: "#D84315",
  },
];

const EventsSection = () => {
  return (
    <section className={styles.eventsSection}>
      <h5 className={styles.subHeading}>Lets Help Them Together!</h5>
      <h1 className={styles.heading}>Join Our Upcoming Events</h1>

      <div className={styles.eventsContainer}>
        {events.map((event) => (
          <div key={event.id} className={styles.eventCard} style={{ backgroundImage: `url(${event.image})` }}>
            <div className={styles.dateBadge} style={{ backgroundColor: event.color }}>
              <span className={styles.date}>{event.date}</span>
              <span className={styles.month}>{event.month}</span>
            </div>
            <div className={styles.cardContent}>
              <h3 className={styles.eventTitle}>{event.title}</h3>
              <div className={styles.eventDetails}>
                <span>🕒 {event.time}</span>
                <span>📍 {event.location}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventsSection;
