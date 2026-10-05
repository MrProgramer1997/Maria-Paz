import { Countdown } from '../Countdown'
import { DiscoBall } from '../DiscoBall'
import { MusicPlayer } from '../MusicPlayer'
import { Reveal } from '../Reveal'
import { InvitationDetails } from './InvitationDetails'
import { InvitationGalleryFinal } from './InvitationGalleryFinal'
import {
  photoCakeClose,
  photoConfetti,
  photoPortrait,
} from './photoUrls'

interface InvitationExperienceProps {
  opened: boolean
  onOpen: () => void
}

export function InvitationExperience({ opened, onOpen }: InvitationExperienceProps) {
  return (
    <main className={`invitation ${opened ? 'invitation--opened' : ''}`}>
      <MusicPlayer active={opened} />

      {!opened && (
        <section className="gate gate--real" aria-label="Abrir invitación">
          <div
            className="gate-image gate-image--confetti"
            style={{ backgroundImage: `url(${photoConfetti})` }}
            role="img"
            aria-label="María Paz celebrando sus quince años con confeti"
          />
          <div className="gate-overlay" />
          <DiscoBall />
          <div className="gate-content">
            <p className="gate-kicker">Una noche para recordar</p>
            <h1>María <em>Paz</em></h1>
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
          <section className="hero hero--real section-dark">
            <div
              className="hero-photo hero-photo--portrait"
              style={{ backgroundImage: `url(${photoPortrait})` }}
              role="img"
              aria-label="Retrato de María Paz"
            />
            <div className="hero-gradient" />
            <div className="ambient ambient-one" />
            <div className="ambient ambient-two" />
            <DiscoBall compact />
            <div className="hero-copy">
              <Reveal>
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

          <section className="portrait-break portrait-break--cake">
            <div
              className="portrait-break__image portrait-break__image--cake"
              style={{ backgroundImage: `url(${photoCakeClose})` }}
              role="img"
              aria-label="María Paz sosteniendo su torta de quince años"
            />
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

          <InvitationDetails />
          <InvitationGalleryFinal />
        </>
      )}
    </main>
  )
}
