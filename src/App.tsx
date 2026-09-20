import { useEffect, useState } from 'react'
import { InvitationExperience } from './components/InvitationExperience'
import { AdminPage } from './pages/AdminPage'
import { getInvitation, getInvitationCode } from './services/invitationService'
import type { InvitationData } from './types/invitation'

function isAdminRoute() {
  return window.location.hash === '#/admin' || window.location.hash.startsWith('#/admin?')
}

export default function App() {
  const [adminRoute, setAdminRoute] = useState(isAdminRoute())
  const [opened, setOpened] = useState(false)
  const [invitation, setInvitation] = useState<InvitationData | null>(null)
  const [error, setError] = useState('')
  const code = getInvitationCode()

  useEffect(() => {
    const onHashChange = () => setAdminRoute(isAdminRoute())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useEffect(() => {
    if (adminRoute) return
    getInvitation(code)
      .then(setInvitation)
      .catch((err) => setError(err instanceof Error && err.message === 'INVITATION_NOT_FOUND' ? 'Esta invitación no existe o ya no está disponible.' : 'No fue posible cargar la invitación.'))
  }, [adminRoute, code])

  if (adminRoute) return <AdminPage />

  if (error) {
    return (
      <main className="state-screen">
        <div>
          <span>XV</span>
          <h1>María Paz</h1>
          <p>{error}</p>
        </div>
      </main>
    )
  }

  if (!invitation) {
    return (
      <main className="state-screen">
        <div className="loading-xv">XV</div>
      </main>
    )
  }

  return <InvitationExperience invitation={invitation} code={code} opened={opened} onOpen={() => setOpened(true)} />
}
