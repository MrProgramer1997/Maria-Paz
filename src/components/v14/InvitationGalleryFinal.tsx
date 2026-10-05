import { Reveal } from '../Reveal'
import {
  photoConfetti,
  photoFamily,
  photoNewspaper,
  photoSaveDate,
} from './photoUrls'

export function InvitationGalleryFinal() {
  return (
    <>
      <section className="gallery-section section-light">
        <Reveal className="gallery-title">
          <span className="eyebrow">María Paz</span>
          <h2>Una noche. Mil recuerdos.</h2>
        </Reveal>
        <div className="editorial-gallery editorial-gallery--real">
          <Reveal
            className="gallery-image gallery-image--one"
            style={{ backgroundImage: `url(${photoConfetti})` }}
          />
          <Reveal
            className="gallery-image gallery-image--two"
            delay={100}
            style={{ backgroundImage: `url(${photoSaveDate})` }}
          />
          <Reveal
            className="gallery-image gallery-image--three"
            delay={180}
            style={{ backgroundImage: `url(${photoNewspaper})` }}
          />
        </div>
      </section>

      <section className="final-section final-section--family section-dark">
        <div
          className="final-photo final-photo--family"
          style={{ backgroundImage: `url(${photoFamily})` }}
          role="img"
          aria-label="María Paz junto a sus papás"
        />
        <div className="final-overlay final-overlay--family" />
        <Reveal className="final-copy final-copy--family">
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
          <a className="admin-entry-button" href="#/admin" aria-label="Abrir panel administrativo">
            <span aria-hidden="true">⚙</span> Panel administrativo
          </a>
        </Reveal>
      </section>
    </>
  )
}
