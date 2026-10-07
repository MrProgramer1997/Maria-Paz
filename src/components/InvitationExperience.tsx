import { Countdown } from './Countdown'
import { DiscoBall } from './DiscoBall'
import { EditorialPhoto } from './EditorialPhoto'
import { ChurchIcon, ClockIcon, PartyIcon, PinIcon, SparklesIcon } from './Icons'
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
  function openInvitation() {
    window.dispatchEvent(new Event('invitation:open'))
    onOpen()
  }

  return (
    <main className={`invitation invitation--v117 ${opened ? 'invitation--opened' : ''}`}>
      <MusicPlayer active={opened} />

      {!opened && (
        <section className="gate gate--v117" aria-label="Abrir invitación">
          <div className="gate-image gate-image--real" style={{ backgroundImage: `url(${cakeDisco})` }} />
          <div className="gate-overlay gate-overlay--premium" />
          <div className="gate-glow gate-glow--one" />
          <div className="gate-glow gate-glow--two" />
          <DiscoBall />
          <div className="gate-content gate-content--premium">
            <div className="micro-badge"><SparklesIcon /> <span>Una noche para recordar</span></div>
            <h1>
              María <em>Paz</em>
            </h1>
            <span className="gate-subtitle">Mis quince años</span>
            <div className="gate-divider"><i /><span>XV</span><i /></div>
            <p className="gate-guest">Una invitación para compartir</p>
            <button type="button" className="open-button open-button--premium" onClick={openInvitation}>
              <span>Descubrir mi invitación</span>
              <b>↓</b>
            </button>
          </div>
        </section>
      )}

      {opened && (
        <>
          <section className="hero-v116 hero-v117 section-dark">
            <div className="hero-v116__backdrop" style={{ backgroundImage: `url(${saveDate})` }} />
            <div className="hero-v116__veil hero-v117__veil" />
            <div className="hero-v117__sparkles" aria-hidden="true"><i /><i /><i /><i /></div>
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
              <Reveal className="hero-v116__copy hero-v117__copy" delay={120}>
                <div className="micro-badge micro-badge--dark"><SparklesIcon /><span>07 · 11 · 2026</span></div>
                <h1>María <span>Paz</span></h1>
                <p>Quince años de amor, sueños y magia.</p>
                <div className="hero-v117__line" />
                <small>Una noche para celebrar, recordar y bailar.</small>
              </Reveal>
            </div>
          </section>

          <section className="intro-section intro-section--premium section-light">
            <div className="flower-blur flower-blur--a" />
            <div className="flower-blur flower-blur--b" />
            <Reveal className="intro-copy">
              <span className="roman">XV</span>
              <div className="micro-badge micro-badge--light"><SparklesIcon /><span>Un nuevo capítulo</span></div>
              <h2>Hoy comienza una nueva etapa.</h2>
              <p>
                Hoy comienza una nueva etapa de mi vida, y quiero compartir la alegría de mis quince años
                con las personas que hacen mi mundo más bonito.
              </p>
              <p className="signature">Con todo mi amor, <strong>María Paz</strong></p>
            </Reveal>
          </section>

          <section className="photo-section-v116 photo-section-v117 section-dark">
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

          <section className="dress-section section-dark dress-section--black dress-section--premium">
            <div className="dress-orbit dress-orbit--one" aria-hidden="true" />
            <div className="dress-orbit dress-orbit--two" aria-hidden="true" />
            <Reveal className="dress-copy dress-copy--centered">
              <div className="micro-badge micro-badge--dark"><SparklesIcon /><span>Dress code</span></div>
              <h2>Black is the mood.</h2>
              <div className="color-chip color-chip--premium"><span /></div>
              <p>Vestuario en <strong>negro</strong>.</p>
              <small>Evitar tonos plateados y grises.</small>
            </Reveal>
          </section>

          <section className="countdown-section countdown-section--premium section-dark">
            <Reveal>
              <div className="micro-badge micro-badge--dark"><ClockIcon /><span>Falta muy poco</span></div>
              <h2>La noche que soñamos</h2>
              <Countdown />
            </Reveal>
          </section>

          <section className="events-section events-section--premium section-pink">
            <Reveal className="section-heading">
              <div className="micro-badge micro-badge--light"><SparklesIcon /><span>Acompáñame</span></div>
              <h2>Dos momentos, un mismo recuerdo.</h2>
            </Reveal>

            <div className="events-grid events-grid--premium">
              <Reveal className="event-card event-card--premium" delay={80}>
                <div className="event-card__icon"><ChurchIcon /></div>
                <div className="event-number">05</div>
                <span className="event-label">Ceremonia religiosa</span>
                <h3>Jueves · Noviembre</h3>
                <div className="event-meta"><ClockIcon /><span>7:00 p. m.</span></div>
                <div className="event-line" />
                <strong>Parroquia San Miguel Arcángel</strong>
                <div className="event-meta event-meta--place"><PinIcon /><span>Galicia · Pereira</span></div>
              </Reveal>

              <Reveal className="event-card event-card--dark event-card--premium" delay={160}>
                <div className="event-card__icon"><PartyIcon /></div>
                <div className="event-number">07</div>
                <span className="event-label">Celebración</span>
                <h3>Sábado · Noviembre</h3>
                <div className="event-meta"><ClockIcon /><span>7:00 p. m.</span></div>
                <div className="event-line" />
                <strong>Hotel Campestre Villa Juana</strong>
                <div className="event-meta event-meta--place"><PinIcon /><span>Km 8 · Entrada 7 · Cerritos · Pereira</span></div>
                <a className="event-contact" href="tel:+573218012335">Tel. 321 801 2335</a>
                <a className="outline-button outline-button--premium" href={MAPS_URL} target="_blank" rel="noreferrer">
                  <PinIcon /> <span>Abrir en Google Maps</span> <b>↗</b>
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

          <section className="photo-section-v116 photo-section-v117 photo-section-v116--black">
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

          <section className="reserved-section reserved-section--premium section-light">
            <Reveal className="reserved-card reserved-card--premium">
              <div className="reserved-card__icon"><SparklesIcon /></div>
              <span className="eyebrow">Queremos compartirlo contigo</span>
              <h2>Tu presencia hace especial esta noche.</h2>
              <p>Confirma tu asistencia directamente por WhatsApp con María Paz o Vanessa. Máximo 2 asistentes por invitación.</p>
            </Reveal>
          </section>

          <section className="rsvp-section rsvp-section--premium section-pink">
            <Reveal>
              <RsvpSection />
            </Reveal>
          </section>

          <section className="envelope-section envelope-section--premium section-dark">
            <div className="envelope-stars" />
            <div className="envelope-glow" aria-hidden="true" />
            <Reveal className="envelope-content">
              <div className="micro-badge micro-badge--dark"><SparklesIcon /><span>Un detalle especial</span></div>
              <div className="envelope-stage" aria-hidden="true">
                <i className="envelope-particle envelope-particle--one" />
                <i className="envelope-particle envelope-particle--two" />
                <i className="envelope-particle envelope-particle--three" />
                <div className="envelope-icon envelope-icon--premium">
                  <div className="envelope-letter"><span>XV</span></div>
                  <div className="envelope-flap" />
                  <div className="envelope-body" />
                  <div className="envelope-seal">MP</div>
                </div>
              </div>
              <h2>Lluvia de sobres</h2>
            </Reveal>
          </section>

          <section className="photo-section-v116 photo-section-v117 section-dark photo-section-v116--portrait-brown">
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

          <section className="final-v116 final-v117 section-dark">
            <div className="final-v116__backdrop" style={{ backgroundImage: `url(${family})` }} />
            <div className="final-v116__veil final-v117__veil" />
            <div className="final-v116__layout">
              <Reveal className="final-v116__photo">
                <EditorialPhoto
                  src={family}
                  alt="María Paz con sus papás"
                  className="editorial-photo--portrait editorial-photo--family"
                />
              </Reveal>

              <Reveal className="final-v116__copy final-v117__copy" delay={100}>
                <div className="micro-badge micro-badge--dark"><SparklesIcon /><span>Gracias por ser parte de nuestra historia</span></div>
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