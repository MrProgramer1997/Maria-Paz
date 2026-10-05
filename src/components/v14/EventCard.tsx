import { Reveal } from '../Reveal'
import { mapsUrl } from './eventData'

interface EventInfo {
  day: string
  label: string
  weekday: string
  time: string
  place: string
  location: string
}

export function EventCard({ event, dark = false }: { event: EventInfo; dark?: boolean }) {
  return (
    <Reveal className={dark ? 'event-card event-card--dark' : 'event-card'}>
      <div className="event-number">{event.day}</div>
      <span className="event-label">{event.label}</span>
      <h3>{event.weekday}</h3>
      <p className="event-time">{event.time}</p>
      <div className="event-line" />
      <strong>{event.place}</strong>
      <p>{event.location}</p>
      {dark && <a className="outline-button" href={mapsUrl}>Abrir en Google Maps ↗</a>}
    </Reveal>
  )
}
