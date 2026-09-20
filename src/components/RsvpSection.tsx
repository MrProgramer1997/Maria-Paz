import { useMemo, useState } from 'react'
import { submitRsvp } from '../services/invitationService'

interface RsvpSectionProps {
  code: string
  seats: number
  initialStatus: 'pending' | 'confirmed' | 'declined'
  initialConfirmedSeats: number | null
}

const WHATSAPP_MARIA = '573118783759'
const WHATSAPP_MAMA = '573104784713'

export function RsvpSection({ code, seats, initialStatus, initialConfirmedSeats }: RsvpSectionProps) {
  const [attends, setAttends] = useState<boolean | null>(
    initialStatus === 'pending' ? null : initialStatus === 'confirmed',
  )
  const [confirmedSeats, setConfirmedSeats] = useState(initialConfirmedSeats || seats)
  const [saving, setSaving] = useState(false)
  const [saved, setSaved] = useState(initialStatus !== 'pending')
  const [error, setError] = useState('')

  const whatsAppMessage = useMemo(
    () => encodeURIComponent('Hola, confirmo mi asistencia a los quince años de María Paz. ✨'),
    [],
  )

  async function saveResponse() {
    if (attends === null) {
      setError('Selecciona si podrás acompañarnos.')
      return
    }

    setSaving(true)
    setError('')
    try {
      await submitRsvp(code, attends, attends ? confirmedSeats : 0)
      setSaved(true)
    } catch {
      setError('No pudimos guardar tu respuesta. Intenta nuevamente.')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="rsvp-card">
      <span className="eyebrow">Confirma tu asistencia</span>
      <h2>Tu presencia hará parte de este recuerdo.</h2>
      <p>
        Hay momentos que se vuelven inolvidables cuando los compartimos con quienes amamos.
        Agradecemos confirmar tu asistencia antes del <strong>17 de octubre</strong>.
      </p>

      {saved ? (
        <div className="confirmation-result">
          <span className="confirmation-mark">✓</span>
          <div>
            <strong>{attends ? '¡Gracias por confirmar!' : 'Gracias por avisarnos.'}</strong>
            <p>
              {attends
                ? `Registramos ${confirmedSeats} ${confirmedSeats === 1 ? 'asistente' : 'asistentes'}.`
                : 'Esperamos compartir contigo una próxima ocasión.'}
            </p>
          </div>
          <button type="button" className="text-button" onClick={() => setSaved(false)}>
            Cambiar respuesta
          </button>
        </div>
      ) : (
        <>
          <div className="attendance-toggle" role="group" aria-label="Confirmación de asistencia">
            <button
              type="button"
              className={attends === true ? 'active' : ''}
              onClick={() => setAttends(true)}
            >
              Sí, asistiré
            </button>
            <button
              type="button"
              className={attends === false ? 'active' : ''}
              onClick={() => setAttends(false)}
            >
              No podré asistir
            </button>
          </div>

          {attends && (
            <div className="seat-selector">
              <span>¿Cuántas personas asistirán?</span>
              <div className="seat-options">
                {Array.from({ length: seats }, (_, index) => index + 1).map((seat) => (
                  <button
                    type="button"
                    className={confirmedSeats === seat ? 'active' : ''}
                    onClick={() => setConfirmedSeats(seat)}
                    key={seat}
                  >
                    {seat}
                  </button>
                ))}
              </div>
            </div>
          )}

          {error && <p className="form-error">{error}</p>}

          <button type="button" className="primary-button" onClick={saveResponse} disabled={saving}>
            {saving ? 'Guardando…' : 'Confirmar respuesta'}
          </button>
        </>
      )}

      <div className="whatsapp-grid">
        <a href={`https://wa.me/${WHATSAPP_MARIA}?text=${whatsAppMessage}`} target="_blank" rel="noreferrer">
          WhatsApp María Paz
        </a>
        <a href={`https://wa.me/${WHATSAPP_MAMA}?text=${whatsAppMessage}`} target="_blank" rel="noreferrer">
          WhatsApp mamá
        </a>
      </div>
    </div>
  )
}
