import { Reveal } from '../Reveal'
import { photoNewspaper, photoSaveDate } from './photoUrls'

export function EventPhotos() {
  return (
    <div className="event-editorial-visuals" aria-label="Fotografías de la celebración">
      <Reveal className="event-editorial-photo event-editorial-photo--save-date">
        <img src={photoSaveDate} alt="María Paz con Save the Date 07.11.26" loading="lazy" decoding="async" />
      </Reveal>
      <Reveal className="event-editorial-photo event-editorial-photo--newspaper" delay={100}>
        <img src={photoNewspaper} alt="María Paz celebra sus quince años" loading="lazy" decoding="async" />
      </Reveal>
    </div>
  )
}
