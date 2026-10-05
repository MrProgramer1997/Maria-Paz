import { Reveal } from '../Reveal'

export function EnvelopeSection() {
  return (
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
  )
}
