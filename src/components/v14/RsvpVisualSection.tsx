import { Reveal } from '../Reveal'
import { RsvpSection } from '../RsvpSection'
import { photoDiscoCake } from './photoUrls'

export function RsvpVisualSection() {
  return (
    <>
      <section className="reserved-section reserved-section--photo section-light">
        <div
          className="reserved-photo"
          style={{ backgroundImage: `url(${photoDiscoCake})` }}
          role="img"
          aria-label="María Paz con su torta de quince años y decoración disco"
        />
        <div className="reserved-photo-overlay" />
        <Reveal className="reserved-card reserved-card--over-photo">
          <span className="eyebrow">Queremos compartirlo contigo</span>
          <h2>Tu presencia hace especial esta noche.</h2>
          <p>Regístrate a continuación para confirmar tu asistencia. Cada registro permite máximo 2 asistentes.</p>
        </Reveal>
      </section>

      <section className="rsvp-section section-pink">
        <Reveal>
          <RsvpSection />
        </Reveal>
      </section>
    </>
  )
}
