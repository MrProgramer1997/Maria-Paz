import { useEffect, useMemo, useState, type FormEvent } from 'react'
import { isSupabaseConfigured, supabase } from '../lib/supabase'
import { adminLogin, adminLogout, createInvitation, getAdminInvitations } from '../services/invitationService'
import type { AdminInvitation } from '../types/invitation'

export function AdminPage() {
  const [loggedIn, setLoggedIn] = useState(!isSupabaseConfigured)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [items, setItems] = useState<AdminInvitation[]>([])
  const [name, setName] = useState('')
  const [seats, setSeats] = useState(1)
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
    try {
      setItems(await getAdminInvitations())
    } catch {
      setMessage('No fue posible cargar las invitaciones. Revisa permisos de administrador.')
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

  async function addInvitation(event: FormEvent) {
    event.preventDefault()
    if (!name.trim()) return
    setMessage('')

    try {
      if (!isSupabaseConfigured) {
        setMessage('Modo demo: configura Supabase para crear invitaciones reales.')
        return
      }
      await createInvitation(name.trim(), seats)
      setName('')
      setSeats(1)
      await loadItems()
    } catch {
      setMessage('No se pudo crear la invitación.')
    }
  }

  const stats = useMemo(() => {
    const totalInvitations = items.length
    const totalSeats = items.reduce((sum, item) => sum + item.seats, 0)
    const confirmed = items.reduce((sum, item) => sum + (item.rsvps?.[0]?.attends ? item.rsvps[0].confirmed_seats : 0), 0)
    const pending = items.filter((item) => !item.rsvps?.length).length
    const declined = items.filter((item) => item.rsvps?.[0] && !item.rsvps[0].attends).length
    return { totalInvitations, totalSeats, confirmed, pending, declined }
  }, [items])

  function copyLink(code: string) {
    const url = `${window.location.origin}${window.location.pathname}?i=${encodeURIComponent(code)}`
    navigator.clipboard.writeText(url)
    setMessage('Enlace copiado.')
  }

  if (!loggedIn) {
    return (
      <main className="admin-shell admin-login-shell">
        <form className="admin-login" onSubmit={login}>
          <span className="admin-brand">MARÍA PAZ · XV</span>
          <h1>Panel de invitados</h1>
          <p>Acceso privado para administrar invitaciones y confirmaciones.</p>
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
          <h1>Invitados</h1>
          <p>Control de cupos y confirmaciones.</p>
        </div>
        <div className="admin-actions">
          {!isSupabaseConfigured && <span className="demo-badge">Modo demo</span>}
          {isSupabaseConfigured && <button className="text-button" onClick={logout}>Salir</button>}
          <a className="outline-button" href="./">Ver invitación</a>
        </div>
      </header>

      <section className="stats-grid">
        <article><span>Invitaciones</span><strong>{stats.totalInvitations}</strong></article>
        <article><span>Personas invitadas</span><strong>{stats.totalSeats}</strong></article>
        <article><span>Confirmados</span><strong>{stats.confirmed}</strong></article>
        <article><span>Pendientes</span><strong>{stats.pending}</strong></article>
        <article><span>No asistirán</span><strong>{stats.declined}</strong></article>
      </section>

      <section className="admin-grid">
        <form className="admin-card create-card" onSubmit={addInvitation}>
          <span className="eyebrow">Nueva invitación</span>
          <h2>Crear invitado</h2>
          <label>
            Nombre o familia
            <input value={name} onChange={(event) => setName(event.target.value)} placeholder="Ej. Familia Gómez" required />
          </label>
          <label>
            Cupos reservados
            <select value={seats} onChange={(event) => setSeats(Number(event.target.value))}>
              {[1, 2, 3, 4, 5, 6].map((value) => <option value={value} key={value}>{value}</option>)}
            </select>
          </label>
          <button className="primary-button" type="submit">Crear invitación</button>
          {message && <p className="admin-message">{message}</p>}
        </form>

        <section className="admin-card guest-list-card">
          <div className="guest-list-heading">
            <div>
              <span className="eyebrow">Listado</span>
              <h2>Invitaciones creadas</h2>
            </div>
            <button type="button" className="text-button" onClick={loadItems}>Actualizar</button>
          </div>

          {loading ? (
            <p className="admin-empty">Cargando…</p>
          ) : items.length === 0 ? (
            <p className="admin-empty">Todavía no hay invitaciones.</p>
          ) : (
            <div className="guest-list">
              {items.map((item) => {
                const rsvp = item.rsvps?.[0]
                const status = !rsvp ? 'Pendiente' : rsvp.attends ? 'Confirmado' : 'No asiste'
                return (
                  <article className="guest-row" key={item.id}>
                    <div className="guest-main">
                      <strong>{item.display_name}</strong>
                      <small>{item.seats} {item.seats === 1 ? 'cupo' : 'cupos'}</small>
                    </div>
                    <span className={`status status--${status.toLowerCase().replace(' ', '-')}`}>{status}</span>
                    <span className="guest-confirmed">{rsvp?.attends ? `${rsvp.confirmed_seats} confirmados` : '—'}</span>
                    <button type="button" className="copy-button" onClick={() => copyLink(item.code)}>Copiar enlace</button>
                  </article>
                )
              })}
            </div>
          )}
        </section>
      </section>
    </main>
  )
}
