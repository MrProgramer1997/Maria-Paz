import { Countdown } from './Countdown'
import { DiscoBall } from './DiscoBall'
import { EditorialPhoto } from './EditorialPhoto'
import { MusicPlayer } from './MusicPlayer'
import { Reveal } from './Reveal'
import { RsvpSection } from './RsvpSection'
import heroConfetti from '../assets/images/hero-confetti.webp'
import portraitBrown from '../assets/images/portrait-brown.webp'
import saveDate from '../assets/images/save-date.webp'
import newspaper from '../assets/images/newspaper.webp'
import cakeBlur from '../assets/images/cake-blur.webp'
import cakeDisco from '../assets/images/cake-disco.webp'
import family from '../assets/images/family.webp'

interface InvitationExperienceProps {
  opened: boolean
  onOpen: () => void
}

const MAPS_URL = 'https://maps.app.goo.gl/WqBaVeuKRCTwKpDR8'

export function InvitationExperience({ opened, onOpen }: InvitationExperienceProps) {
  return (
    <main className={`invitation invitation--v116 ${opened ? 'invitation--opened' : ''}`}>
      <MusicPlayer active={opened} />

      {!opened && (
        <section className="gate gate--v116" aria-label="Abrir invitación">
          <div className="gate-image gate-image--real" style={{ backgroundImage: `url(${cakeDisco})` }} />
          <div className="gate-overlay" />
          <DiscoBall />
          <div className="gate-content">
            <p className="gate-kicker">Una noche para recordar</p>
            <h1>
              María <em>Paz</em>
            </h1>
            <span className="gate-subtitle">Mis quince años</span>
            <div className="gate-divider"><i /><span>XV</span><i /></div>
            <p className="gate-guest">Una invitación para compartir</p>
            <button type="button" className="open-button" onClick={onOpen}>
              <span>Descubrir mi invitación</span>
              <b>↓</b>
            </button>
          </div>
        </section>
      )}

      {opened && (
        <>
          <section className="hero-v116 section-dark">
            <div className="hero-v116__backdrop" style={{ backgroundImage: `url(${saveDate})` }} />
            <div className="hero-v116__veil" />
            <DiscoBall compact />
            <div className="hero-v116__layout">
              <Reveal className="hero-v116__visual">
                <EditorialPhoto
                  src={saveDate}
                  alt="María Paz con el periódico Save the Date 07.11.26"
                  className="editorial-photo--portrait editorial-photo--hero"
                  eager
                />
              </Reveal>
              <Reveal className="hero-v116__copy" delay={120}>
                <span className="eyebrow">07 · 11 · 2026</span>
                <h1>María <span>Paz</span></h1>
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

          <section className="photo-section-v116 section-dark">
            <Reveal className="photo-section-v116__wrap">
              <EditorialPhoto
                src={cakeBlur}
                alt="María Paz sosteniendo su pastel de quince años"
                className="editorial-photo--portrait editorial-photo--cake"
              >
                <div className="editorial-caption editorial-caption--light">
                  <span>Una historia</span>
                  <strong>que apenas comienza</strong>
                </div>
              </EditorialPhoto>
            </Reveal>
          </section>

          <section className="dress-section section-dark dress-section--black">
            <Reveal className="dress-copy dress-copy--centered">
              <span className="eyebrow">Dress code</span>
              <h2>Black is the mood.</h2>
              <div className="color-chip"><span /></div>
              <p>Vestuario en <strong>negro</strong>.</p>
              <small>Evitar tonos plateados y grises.</small>
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
                <p>Km 8 · Entrada 7 · Cerritos · Pereira, Risaralda</p>
                <a className="event-contact" href="tel:+573218012335">Tel. 321 801 2335</a>
                <a className="outline-button" href={MAPS_URL} target="_blank" rel="noreferrer">
                  Abrir en Google Maps ↗
                </a>
              </Reveal>
            </div>

            <Reveal className="photo-section-v116__wrap photo-section-v116__wrap--landscape" delay={120}>
              <EditorialPhoto
                src={newspaper}
                alt="María Paz con The Quinceañera Times"
                className="editorial-photo--landscape"
              >
                <div className="editorial-caption editorial-caption--light">
                  <span>Special edition · Vol. 15</span>
                  <strong>La estrella de la noche está lista para brillar.</strong>
                </div>
              </EditorialPhoto>
            </Reveal>
          </section>

          <section className="photo-section-v116 photo-section-v116--black">
            <Reveal className="photo-section-v116__wrap">
              <EditorialPhoto
                src={heroConfetti}
                alt="María Paz celebrando sus quince años con confeti"
                className="editorial-photo--portrait"
              >
                <div className="editorial-caption editorial-caption--light">
                  <span>XV</span>
                  <strong>Un deseo, una noche, un recuerdo para siempre.</strong>
                </div>
              </EditorialPhoto>
            </Reveal>
          </section>

          <section className="reserved-section section-light">
            <Reveal className="reserved-card">
              <span className="eyebrow">Queremos compartirlo contigo</span>
              <h2>Tu presencia hace especial esta noche.</h2>
              <p>Confirma tu asistencia directamente por WhatsApp con María Paz o Vanessa. Máximo 2 asistentes por invitación.</p>
            </Reveal>
          </section>

          <section className="rsvp-section section-pink">
            <Reveal>
              <RsvpSection />
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

          <section className="photo-section-v116 section-dark photo-section-v116--portrait-brown">
            <Reveal className="photo-section-v116__wrap">
              <EditorialPhoto
                src={portraitBrown}
                alt="Retrato de María Paz"
                className="editorial-photo--portrait"
              >
                <div className="editorial-caption editorial-caption--light">
                  <span>María Paz</span>
                  <strong>Una noche. Mil recuerdos.</strong>
                </div>
              </EditorialPhoto>
            </Reveal>
          </section>

          <section className="final-v116 section-dark">
            <div className="final-v116__backdrop" style={{ backgroundImage: `url(${family})` }} />
            <div className="final-v116__veil" />
            <div className="final-v116__layout">
              <Reveal className="final-v116__photo">
                <EditorialPhoto
                  src={family}
                  alt="María Paz con sus papás"
                  className="editorial-photo--portrait editorial-photo--family"
                />
              </Reveal>

              <Reveal className="final-v116__copy" delay={100}>
                <span className="eyebrow">Gracias por ser parte de nuestra historia</span>
                <p>
                  Los momentos más hermosos de la vida se convierten en recuerdos para siempre cuando los
                  compartimos con quienes amamos.
                </p>
                <p>
                  Gracias por ser parte de nuestra historia y por acompañarnos en una noche que quedará para siempre
                  en nuestros corazones.
                </p>
                <strong>Con amor,</strong>
                <h2>María Paz <span>&amp;</span> sus papás</h2>
                <div className="final-xv">XV</div>
              </Reveal>
            </div>
          </section>
        </>
      )}
    </main>
  )
}
