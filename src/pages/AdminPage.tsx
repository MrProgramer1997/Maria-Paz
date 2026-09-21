import { useEffect, useMemo, useState, type FormEvent } from 'react'
import { isSupabaseConfigured, supabase } from '../lib/supabase'
import { adminLogin, adminLogout, getRegistrations } from '../services/invitationService'
import type { Registration } from '../types/invitation'

export function AdminPage() {
  const [loggedIn, setLoggedIn] = useState(!isSupabaseConfigured)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [items, setItems] = useState<Registration[]>([])
  const [loading, setLoading] = useState(true)
  const [message, setMessage] = useState('')

  useEffect(() => {
    if (!supabase) {
      setLoggedIn(true)
      loadItems()
      return
    }

    supabase.auth.getSession().then(({ data }) => {
      setLoggedIn(Boolean(data.session))
      if (data.session) loadItems()
      else setLoading(false)
    })
  }, [])

  async function loadItems() {
    setLoading(true)
    setMessage('')
    try {
      setItems(await getRegistrations())
    } catch {
      setMessage('No fue posible cargar los registros. Revisa los permisos del administrador.')
    } finally {
      setLoading(false)
    }
  }

  async function login(event: FormEvent) {
    event.preventDefault()
    setMessage('')
    const { error } = await adminLogin(email, password)
    if (error) {
      setMessage('Usuario o contraseña incorrectos, o el usuario no tiene acceso.')
      return
    }
    setLoggedIn(true)
    await loadItems()
  }

  async function logout() {
    await adminLogout()
    setLoggedIn(false)
    setItems([])
  }

  const stats = useMemo(() => ({
    registrations: items.length,
    attendees: items.reduce((sum, item) => sum + item.attendees, 0),
  }), [items])

  if (!loggedIn) {
    return (
      <main className="admin-shell admin-login-shell">
        <form className="admin-login" onSubmit={login}>
          <span className="admin-brand">MARÍA PAZ · XV</span>
          <h1>Panel de registros</h1>
          <p>Acceso privado para consultar asistentes registrados.</p>
          <label>
            Correo
            <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required />
          </label>
          <label>
            Contraseña
            <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} required />
          </label>
          {message && <p className="form-error">{message}</p>}
          <button className="primary-button" type="submit">Ingresar</button>
          <a className="admin-back" href="./">← Volver a la invitación</a>
        </form>
      </main>
    )
  }

  return (
    <main className="admin-shell">
      <header className="admin-header">
        <div>
          <span className="admin-brand">MARÍA PAZ · XV</span>
          <h1>Registros</h1>
          <p>Personas que confirmaron su asistencia desde la invitación.</p>
        </div>
        <div className="admin-actions">
          {!isSupabaseConfigured && <span className="demo-badge">Modo demo</span>}
          {isSupabaseConfigured && <button className="text-button" onClick={logout}>Salir</button>}
          <a className="outline-button" href="./">Ver invitación</a>
        </div>
      </header>

      <section className="stats-grid stats-grid--compact">
        <article><span>Registros</span><strong>{stats.registrations}</strong></article>
        <article><span>Personas confirmadas</span><strong>{stats.attendees}</strong></article>
      </section>

      <section className="admin-card guest-list-card admin-card--wide">
        <div className="guest-list-heading">
          <div>
            <span className="eyebrow">Asistencia</span>
            <h2>Personas registradas</h2>
          </div>
          <button type="button" className="text-button" onClick={loadItems}>Actualizar</button>
        </div>

        {message && <p className="admin-message">{message}</p>}

        {loading ? (
          <p className="admin-empty">Cargando…</p>
        ) : items.length === 0 ? (
          <p className="admin-empty">Todavía no hay personas registradas.</p>
        ) : (
          <div className="guest-list">
            {items.map((item) => (
              <article className="guest-row guest-row--registration" key={item.id}>
                <div className="guest-main">
                  <strong>{item.full_name}</strong>
                  <small>{item.phone}</small>
                </div>
                <span className="status status--confirmado">Confirmado</span>
                <span className="guest-confirmed">{item.attendees} {item.attendees === 1 ? 'persona' : 'personas'}</span>
                <small>{new Date(item.created_at).toLocaleString('es-CO')}</small>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  )
}
