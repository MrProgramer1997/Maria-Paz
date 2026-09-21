import { useMemo, useState } from 'react'
import { registerGuest } from '../services/invitationService'

const WHATSAPP_MARIA = '573118783759'
const WHATSAPP_VANESSA = '573104784713'

function normalizePhone(value: string) {
  return value.replace(/\D/g, '').slice(0, 15)
}

function WhatsAppIcon() {
  return (
    <svg className="whatsapp-svg" viewBox="0 0 64 64" aria-hidden="true">
      <path d="M32 7C18.2 7 7 17.7 7 30.9c0 5 1.6 9.7 4.4 13.6L8.5 57l13.1-3.4A25.8 25.8 0 0 0 32 55c13.8 0 25-10.7 25-24.1S45.8 7 32 7Z" fill="currentColor" />
      <path d="M24.4 19.2c-.6-1.3-1.2-1.3-1.8-1.3h-1.5c-.5 0-1.4.2-2.1 1-.7.8-2.8 2.6-2.8 6.4 0 3.8 2.9 7.5 3.3 8 .4.5 5.6 8.6 13.9 11.7 6.9 2.6 8.3 2.1 9.8 2 1.5-.1 4.8-1.9 5.5-3.8.7-1.8.7-3.4.5-3.8-.2-.3-.8-.5-1.6-.9l-5.7-2.6c-.8-.3-1.4-.5-2 .4-.6.9-2.3 2.7-2.8 3.2-.5.6-1 .7-1.9.3-.8-.4-3.5-1.2-6.7-3.9-2.5-2.1-4.1-4.8-4.6-5.6-.5-.9-.1-1.3.4-1.7.4-.4.8-1 1.2-1.5.4-.5.5-.9.8-1.5.3-.6.1-1.1-.1-1.5l-2.3-5.4Z" fill="#fff" />
    </svg>
  )
}

export function RsvpSection() {
  const [guestName, setGuestName] = useState('')
  const [guestPhone, setGuestPhone] = useState('')
  const [attendees, setAttendees] = useState(1)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(false)
  const [error, setError] = useState('')

  const whatsAppMessage = useMemo(() => encodeURIComponent([
    'Hola, ya realicé mi registro para los quince años de María Paz ✨',
    `Nombre: ${guestName}`,
    `Celular: ${guestPhone}`,
    `Asistentes registrados: ${attendees}`,
  ].join('\n')), [attendees, guestName, guestPhone])

  async function saveRegistration() {
    if (guestName.trim().length < 2) {
      setError('Escribe tu nombre para completar el registro.')
      return
    }

    const phone = normalizePhone(guestPhone)
    if (phone.length < 7) {
      setError('Escribe un número de celular válido.')
      return
    }

    setSaving(true)
    setError('')

    try {
      await registerGuest(guestName, phone, attendees)
      setGuestName(guestName.trim())
      setGuestPhone(phone)
      setSaved(true)
    } catch (err) {
      if (err instanceof Error && err.message === 'PHONE_ALREADY_REGISTERED') {
        setError('Este celular ya fue registrado. Si necesitas cambiar los asistentes, comunícate con María Paz o Vanessa.')
      } else {
        setError('No pudimos guardar el registro. Intenta nuevamente.')
      }
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="rsvp-card">
      <span className="eyebrow">Confirma tu asistencia</span>
      <h2>Regístrate para acompañarnos.</h2>
      <p>
        Completa tus datos y registra cuántas personas asistirán contigo. Al finalizar podrás avisar por WhatsApp a María Paz o Vanessa.
      </p>

      {saved ? (
        <div className="confirmation-result confirmation-result--stacked">
          <span className="confirmation-mark">✓</span>
          <div>
            <strong>¡Tu registro quedó guardado!</strong>
            <p>{guestName}, registramos {attendees} {attendees === 1 ? 'asistente' : 'asistentes'}.</p>
          </div>

          <div className="whatsapp-confirm-box">
            <span className="whatsapp-logo"><WhatsAppIcon /></span>
            <div>
              <strong>Ahora avísanos por WhatsApp</strong>
              <p>Solo toca uno de los botones. El mensaje ya está listo con tus datos.</p>
            </div>
          </div>

          <div className="whatsapp-grid whatsapp-grid--hero">
            <a href={`https://wa.me/${WHATSAPP_MARIA}?text=${whatsAppMessage}`} target="_blank" rel="noreferrer">
              <WhatsAppIcon />
              <span><strong>María Paz</strong><small>Avisar registro</small></span>
            </a>
            <a href={`https://wa.me/${WHATSAPP_VANESSA}?text=${whatsAppMessage}`} target="_blank" rel="noreferrer">
              <WhatsAppIcon />
              <span><strong>Vanessa</strong><small>Avisar registro</small></span>
            </a>
          </div>
        </div>
      ) : (
        <>
          <div className="rsvp-fields">
            <label>
              Nombre y apellido
              <input
                type="text"
                value={guestName}
                onChange={(event) => setGuestName(event.target.value)}
                placeholder="Ej. Juan Pérez"
                autoComplete="name"
              />
            </label>
            <label>
              Celular
              <input
                type="tel"
                inputMode="numeric"
                value={guestPhone}
                onChange={(event) => setGuestPhone(normalizePhone(event.target.value))}
                placeholder="Ej. 3001234567"
                autoComplete="tel"
              />
            </label>
          </div>

          <div className="seat-selector">
            <span>¿Cuántas personas asistirán?</span>
            <div className="seat-options">
              {[1, 2, 3, 4].map((value) => (
                <button
                  type="button"
                  className={attendees === value ? 'active' : ''}
                  onClick={() => setAttendees(value)}
                  key={value}
                >
                  {value}
                </button>
              ))}
            </div>
          </div>

          {error && <p className="form-error">{error}</p>}

          <button type="button" className="primary-button" onClick={saveRegistration} disabled={saving}>
            {saving ? 'Registrando…' : 'Registrar mi asistencia'}
          </button>
        </>
      )}
    </div>
  )
}
