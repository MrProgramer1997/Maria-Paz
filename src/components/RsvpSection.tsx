const WHATSAPP_MARIA = '573118783759'
const WHATSAPP_VANESSA = '573104784713'

function WhatsAppIcon() {
  return (
    <svg className="whatsapp-svg" viewBox="0 0 64 64" aria-hidden="true">
      <path d="M32 7C18.2 7 7 17.7 7 30.9c0 5 1.6 9.7 4.4 13.6L8.5 57l13.1-3.4A25.8 25.8 0 0 0 32 55c13.8 0 25-10.7 25-24.1S45.8 7 32 7Z" fill="currentColor" />
      <path d="M24.4 19.2c-.6-1.3-1.2-1.3-1.8-1.3h-1.5c-.5 0-1.4.2-2.1 1-.7.8-2.8 2.6-2.8 6.4 0 3.8 2.9 7.5 3.3 8 .4.5 5.6 8.6 13.9 11.7 6.9 2.6 8.3 2.1 9.8 2 1.5-.1 4.8-1.9 5.5-3.8.7-1.8.7-3.4.5-3.8-.2-.3-.8-.5-1.6-.9l-5.7-2.6c-.8-.3-1.4-.5-2 .4-.6.9-2.3 2.7-2.8 3.2-.5.6-1 .7-1.9.3-.8-.4-3.5-1.2-6.7-3.9-2.5-2.1-4.1-4.8-4.6-5.6-.5-.9-.1-1.3.4-1.7.4-.4.8-1 1.2-1.5.4-.5.5-.9.8-1.5.3-.6.1-1.1-.1-1.5l-2.3-5.4Z" fill="#fff" />
    </svg>
  )
}

const confirmMessage = encodeURIComponent(
  'Hola, quiero confirmar mi asistencia a los quince años de María Paz ✨\n\n¡Gracias!'
)

const songMessage = encodeURIComponent(
  'Hola, quiero recomendar una canción para los quince años de María Paz 🎶\n\nCanción: \nArtista: '
)

export function RsvpSection() {
  return (
    <div className="rsvp-card rsvp-card--direct">
      <span className="eyebrow">Confirma tu asistencia</span>
      <h2>Escríbenos directamente por WhatsApp.</h2>

      <div className="rsvp-intro">
        <p>Hay momentos que se vuelven inolvidables cuando los compartimos con quienes amamos.</p>
        <p>Tu presencia será parte de este recuerdo tan especial.</p>
      </div>

      <div className="rsvp-deadline" role="note" aria-label="Fecha límite de confirmación">
        <span>Confirmaciones hasta</span>
        <strong>17 de octubre de 2026</strong>
      </div>

      <div className="whatsapp-confirm-box whatsapp-confirm-box--direct">
        <span className="whatsapp-logo"><WhatsAppIcon /></span>
        <div>
          <strong>Confirmar asistencia</strong>
          <p>El mensaje ya está preparado. Solo envíalo por WhatsApp para confirmar tu asistencia.</p>
        </div>
      </div>

      <div className="whatsapp-grid whatsapp-grid--hero">
        <a href={`https://wa.me/${WHATSAPP_MARIA}?text=${confirmMessage}`} target="_blank" rel="noreferrer">
          <WhatsAppIcon />
          <span><strong>María Paz</strong><small>Confirmar asistencia</small></span>
        </a>
        <a href={`https://wa.me/${WHATSAPP_VANESSA}?text=${confirmMessage}`} target="_blank" rel="noreferrer">
          <WhatsAppIcon />
          <span><strong>Vanessa</strong><small>Confirmar asistencia</small></span>
        </a>
      </div>

      <div className="song-whatsapp-block">
        <span className="eyebrow">La música también la hacemos entre todos</span>
        <h3>Recomiéndanos una canción.</h3>
        <p>
          Si tienes una canción que no puede faltar esa noche, envíala también por WhatsApp.
          No necesitas registrarla en ningún formulario.
        </p>

        <div className="whatsapp-grid whatsapp-grid--song">
          <a href={`https://wa.me/${WHATSAPP_MARIA}?text=${songMessage}`} target="_blank" rel="noreferrer">
            <WhatsAppIcon />
            <span><strong>María Paz</strong><small>Recomendar canción</small></span>
          </a>
          <a href={`https://wa.me/${WHATSAPP_VANESSA}?text=${songMessage}`} target="_blank" rel="noreferrer">
            <WhatsAppIcon />
            <span><strong>Vanessa</strong><small>Recomendar canción</small></span>
          </a>
        </div>
      </div>
    </div>
  )
}
