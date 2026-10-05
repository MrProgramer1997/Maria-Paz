import { Reveal } from '../Reveal'

export function DressSection() {
  return (
    <section className="dress-section dress-section--black section-dark">
      <div className="dress-black-glow" aria-hidden="true" />
      <Reveal className="dress-copy dress-copy--centered">
        <span className="eyebrow">Dress code</span>
        <h2>Black is the mood.</h2>
        <div className="color-chip"><span /></div>
        <p>Vestuario en <strong>negro</strong>.</p>
        <small>Evitar tonos plateados y grises.</small>
      </Reveal>
    </section>
  )
}
