import { Reveal } from '../Reveal'
import { EventCard } from './EventCard'
import { EventPhotos } from './EventPhotos'
import { celebration, ceremony } from './eventData'

export function EventsSection() {
  return (
    <section className="events-section section-pink">
      <Reveal className="section-heading">
        <span className="eyebrow">Acompáñame</span>
        <h2>Dos momentos, un mismo recuerdo.</h2>
      </Reveal>
      <EventPhotos />
      <div className="events-grid">
        <EventCard event={ceremony} />
        <EventCard event={celebration} dark />
      </div>
    </section>
  )
}
