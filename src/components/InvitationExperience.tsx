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
  function openInvitation() {
    window.dispatchEvent(new Event('invitation:open'))
    onOpen()
  }

  return (
    <main className={`invitation invitation--v118 invitation--v119 ${opened ? 'invitation--opened' : ''}`}>
      <MusicPlayer active={opened} />

      {!opened && (
        <section className="gate gate--v118" aria-label="Abrir invitación">
          <div className="gate-image gate-image--real" style={{ backgroundImage: `url(${cakeDisco})` }} />
          <div className="gate-overlay gate-overlay--v118" />
          <DiscoBall />
          <div className="gate-content gate-content--v118">
            <p className="editorial-kicker">Una noche para recordar</p>
            <h1>María <em>Paz</em></h1>
            <span className="gate-subtitle">Mis quince años</span>
            <div className="gate-divider"><i /><span>XV</span><i /></div>
            <p className="gate-guest">Una invitación para compartir</p>
            <button type="button" className="open-button open-button--v118" onClick={openInvitation}>
              <span>Descubrir mi invitación</span>
              <b>↓</b>
            </button>
          </div>
        </section>
      )}

      {opened && (
        <>
          <section className="hero-v116 hero-v118 section-dark">
            <div className="hero-v116__backdrop" style={{ backgroundImage: `url(${saveDate})` }} />
            <div className="hero-v116__veil hero-v118__veil" />
            <DiscoBall compact />
            <div className="hero-v116__layout hero-v118__layout">
              <Reveal className="hero-v116__visual">
                <EditorialPhoto
                  src={saveDate}
                  alt="María Paz con el periódico Save the Date 07.11.26"
                  className="editorial-photo--portrait editorial-photo--hero"
                  eager
                />
              </Reveal>

              <Reveal className="hero-v116__copy hero-v118__copy" delay={100}>
                <span className="editorial-kicker editorial-kicker--light">07 · 11 · 2026</span>
                <h1>María <span>Paz</span></h1>
                <p>Quince años de amor, sueños y magia.</p>
                <div className="editorial-rule" />
                <small>Una noche para celebrar, recordar y bailar.</small>
              </Reveal>
            </div>
          </section>

          <section className="intro-section intro-section--v118 section-light">
            <div className="flower-blur flower-blur--a" />
            <Reveal className="intro-copy intro-copy--v118">
              <span className="roman">XV</span>
              <span className="editorial-kicker">Un nuevo capítulo</span>
              <h2>Hoy comienza una nueva etapa.</h2>
              <p>
                Hoy comienza una nueva etapa de mi vida, y quiero compartir la alegría de mis quince años
                con las personas que hacen mi mundo más bonito.
              </p>
              <p className="signature">Con todo mi amor, <strong>María Paz</strong></p>
            </Reveal>
          </section>

          <section className="photo-section-v116 photo-section-v118 section-dark">
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

          <section className="dress-section section-dark dress-section--black dress-section--v118">
            <Reveal className="dress-copy dress-copy--centered dress-copy--v118">
              <span className="editorial-kicker editorial-kicker--light">Dress code</span>
              <h2>Black is the mood.</h2>
              <div className="dress-swatch" aria-hidden="true"><span /></div>
              <p>Vestuario en <strong>negro</strong>.</p>
              <small>Evitar tonos plateados y grises.</small>
            </Reveal>
          </section>

          <section className="countdown-section countdown-section--v118 section-dark">
            <Reveal>
              <span className="editorial-kicker editorial-kicker--light">Falta muy poco</span>
              <h2>La noche que soñamos</h2>
              <Countdown />
            </Reveal>
          </section>

          <section className="events-section events-section--v118 section-pink">
            <Reveal className="section-heading section-heading--v118">
              <span className="editorial-kicker">Acompáñame</span>
              <h2>Dos momentos, un mismo recuerdo.</h2>
            </Reveal>

            <div className="events-grid events-grid--v118">
              <Reveal className="event-card event-card--v118" delay={70}>
                <div className="event-number">05</div>
                <span className="event-label">Ceremonia religiosa</span>
                <h3>Jueves · Noviembre</h3>
                <div className="event-detail"><span>Hora</span><strong>7:00 p. m.</strong></div>
                <div className="event-line" />
                <strong>Parroquia San Miguel Arcángel</strong>
                <p>Galicia · Pereira</p>
              </Reveal>

              <Reveal className="event-card event-card--dark event-card--v118" delay={140}>
                <div className="event-number">07</div>
                <span className="event-label">Celebración</span>
                <h3>Sábado · Noviembre</h3>
                <div className="event-detail"><span>Hora</span><strong>7:00 p. m.</strong></div>
                <div className="event-line" />
                <strong>Hotel Campestre Villa Juana</strong>
                <p>Km 8 · Entrada 7 · Cerritos · Pereira</p>
                <a className="event-contact" href="tel:+573218012335">Tel. 321 801 2335</a>
                <a className="outline-button outline-button--v118" href={MAPS_URL} target="_blank" rel="noreferrer">
                  <span>Abrir en Google Maps</span><b>↗</b>
                </a>
              </Reveal>
            </div>

            <Reveal className="photo-section-v116__wrap photo-section-v116__wrap--landscape" delay={100}>
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

          <section className="photo-section-v116 photo-section-v118 photo-section-v116--black">
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

          <section className="reserved-section reserved-section--v118 section-light">
            <Reveal className="reserved-card reserved-card--v118">
              <span className="editorial-kicker">Queremos compartirlo contigo</span>
              <h2>Tu presencia hace especial esta noche.</h2>
              <p>Confirma tu asistencia directamente por WhatsApp con María Paz o Vanessa. Máximo 2 asistentes por invitación.</p>
            </Reveal>
          </section>

          <section className="rsvp-section rsvp-section--v118 section-pink">
            <Reveal>
              <RsvpSection />
            </Reveal>
          </section>

          <section className="envelope-section envelope-section--v118 section-dark">
            <Reveal className="envelope-content envelope-content--v118">
              <span className="editorial-kicker editorial-kicker--light">Un detalle especial</span>
              <div className="envelope-stage envelope-stage--v118" aria-hidden="true">
                <div className="envelope-icon envelope-icon--v118">
                  <div className="envelope-letter envelope-letter--v118"><span>XV</span></div>
                  <div className="envelope-body envelope-body--v118" />
                  <div className="envelope-flap envelope-flap--v118" />
                  <div className="envelope-seal envelope-seal--v118">MP</div>
                </div>
              </div>
              <h2>Lluvia de sobres</h2>
            </Reveal>
          </section>

          <section className="photo-section-v116 photo-section-v118 section-dark photo-section-v116--portrait-brown">
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

          <section className="final-v116 final-v118 section-dark">
            <div className="final-v116__backdrop" style={{ backgroundImage: `url(${family})` }} />
            <div className="final-v116__veil final-v118__veil" />
            <div className="final-v116__layout final-v118__layout">
              <Reveal className="final-v116__photo">
                <EditorialPhoto
                  src={family}
                  alt="María Paz con sus papás"
                  className="editorial-photo--portrait editorial-photo--family"
                />
              </Reveal>

              <Reveal className="final-v116__copy final-v118__copy" delay={90}>
                <span className="editorial-kicker editorial-kicker--light">Gracias por ser parte de nuestra historia</span>
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
