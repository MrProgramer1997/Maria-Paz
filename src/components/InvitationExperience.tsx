import { Countdown } from './Countdown'
import { DiscoBall } from './DiscoBall'
import { MusicPlayer } from './MusicPlayer'
import { Reveal } from './Reveal'
import { RsvpSection } from './RsvpSection'
import type { InvitationData } from '../types/invitation'

interface InvitationExperienceProps {
  invitation: InvitationData
  code: string
  opened: boolean
  onOpen: () => void
}

const MAPS_URL = 'https://maps.app.goo.gl/WqBaVeuKRCTwKpDR8'

export function InvitationExperience({ invitation, code, opened, onOpen }: InvitationExperienceProps) {
  const oneSeat = invitation.seats === 1

  return (
    <main className={`invitation ${opened ? 'invitation--opened' : ''}`}>
      <MusicPlayer active={opened} />

      {!opened && (
        <section className="gate" aria-label="Abrir invitación">
          <div className="gate-image" />
          <div className="gate-overlay" />
          <DiscoBall />
          <div className="gate-content">
            <p className="gate-kicker">Una noche para recordar</p>
            <h1>
              María <em>Paz</em>
            </h1>
            <span className="gate-subtitle">Mis quince años</span>
            <div className="gate-divider"><i /><span>XV</span><i /></div>
            <p className="gate-guest">Para {invitation.display_name}</p>
            <button type="button" className="open-button" onClick={onOpen}>
              <span>Descubrir mi invitación</span>
              <b>↓</b>
            </button>
          </div>
        </section>
      )}

      {opened && (
        <>
          <section className="hero section-dark">
            <div className="hero-photo" />
            <div className="hero-gradient" />
            <div className="ambient ambient-one" />
            <div className="ambient ambient-two" />
            <DiscoBall compact />
            <div className="hero-copy">
              <Reveal>
                <span className="eyebrow">07 · 11 · 2026</span>
                <h1>
                  María <span>Paz</span>
                </h1>
                <p>Quince años de amor, sueños y magia.</p>
              </Reveal>
            </div>
          </section>

          <section className="intro-section section-light">
            <div className="flower-blur flower-blur--a" />
            <Reveal className="intro-copy">
              <span className="roman">XV</span>
              <h2>Hoy comienza una nueva etapa.</h2>
              <p>
                Hoy comienza una nueva etapa de mi vida, y quiero compartir la alegría de mis quince años
                con las personas que hacen mi mundo más bonito.
              </p>
              <p className="signature">Con todo mi amor, <strong>María Paz</strong></p>
            </Reveal>
          </section>

          <section className="portrait-break">
            <div className="portrait-break__image" />
            <div className="portrait-break__veil" />
            <Reveal className="portrait-quote">
              <span>Una historia</span>
              <strong>que apenas comienza</strong>
            </Reveal>
          </section>

          <section className="countdown-section section-dark">
            <Reveal>
              <span className="eyebrow">Falta muy poco</span>
              <h2>La noche que soñamos</h2>
              <Countdown />
            </Reveal>
          </section>

          <section className="events-section section-pink">
            <Reveal className="section-heading">
              <span className="eyebrow">Acompáñame</span>
              <h2>Dos momentos, un mismo recuerdo.</h2>
            </Reveal>

            <div className="events-grid">
              <Reveal className="event-card" delay={80}>
                <div className="event-number">05</div>
                <span className="event-label">Ceremonia religiosa</span>
                <h3>Jueves · Noviembre</h3>
                <p className="event-time">7:00 p. m.</p>
                <div className="event-line" />
                <strong>Parroquia San Miguel Arcángel</strong>
                <p>Galicia · Pereira</p>
              </Reveal>

              <Reveal className="event-card event-card--dark" delay={160}>
                <div className="event-number">07</div>
                <span className="event-label">Celebración</span>
                <h3>Sábado · Noviembre</h3>
                <p className="event-time">7:00 p. m.</p>
                <div className="event-line" />
                <strong>Hotel Campestre Villa Juana</strong>
                <p>Km 8 · Entrada 7 · Cerritos · Pereira</p>
                <a className="outline-button" href={MAPS_URL} target="_blank" rel="noreferrer">
                  Abrir en Google Maps ↗
                </a>
              </Reveal>
            </div>
          </section>

          <section className="dress-section section-dark">
            <div className="dress-photo" />
            <div className="dress-overlay" />
            <Reveal className="dress-copy">
              <span className="eyebrow">Dress code</span>
              <h2>Black is the mood.</h2>
              <div className="color-chip"><span /></div>
              <p>Vestuario en <strong>negro</strong>.</p>
              <small>Evitar tonos plateados y grises.</small>
            </Reveal>
          </section>

          <section className="reserved-section section-light">
            <Reveal className="reserved-card">
              <span className="eyebrow">Esta invitación es para</span>
              <h2>{invitation.display_name}</h2>
              <p>Hemos reservado</p>
              <strong className="reserved-number">{invitation.seats}</strong>
              <p className="reserved-label">
                {oneSeat ? 'lugar en tu honor' : 'lugares en tu honor'}
              </p>
            </Reveal>
          </section>

          <section className="rsvp-section section-pink">
            <Reveal>
              <RsvpSection
                code={code}
                seats={invitation.seats}
                initialStatus={invitation.attendance_status}
                initialConfirmedSeats={invitation.confirmed_seats}
              />
            </Reveal>
          </section>

          <section className="envelope-section section-dark">
            <div className="envelope-stars" />
            <Reveal className="envelope-content">
              <span className="eyebrow">Un detalle especial</span>
              <div className="envelope-icon" aria-hidden="true">
                <div className="envelope-flap" />
                <div className="envelope-body" />
              </div>
              <h2>Lluvia de sobres</h2>
            </Reveal>
          </section>

          <section className="gallery-section section-light">
            <Reveal className="gallery-title">
              <span className="eyebrow">María Paz</span>
              <h2>Una noche. Mil recuerdos.</h2>
            </Reveal>
            <div className="editorial-gallery">
              <Reveal className="gallery-image gallery-image--one" />
              <Reveal className="gallery-image gallery-image--two" delay={100} />
              <Reveal className="gallery-image gallery-image--three" delay={180} />
            </div>
          </section>

          <section className="final-section section-dark">
            <div className="final-photo" />
            <div className="final-overlay" />
            <Reveal className="final-copy">
              <span className="eyebrow">Gracias por ser parte de nuestra historia</span>
              <p>
                Los momentos más hermosos de la vida se convierten en recuerdos para siempre cuando los
                compartimos con quienes amamos.
              </p>
              <p>
                Gracias por acompañarnos en una noche que quedará para siempre en nuestros corazones.
              </p>
              <strong>Con amor,</strong>
              <h2>María Paz <span>&amp;</span> sus papás</h2>
              <div className="final-xv">XV</div>
            </Reveal>
          </section>
        </>
      )}
    </main>
  )
}
