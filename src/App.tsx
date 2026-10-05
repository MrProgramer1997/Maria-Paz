import { useEffect, useState } from 'react'
import { InvitationExperience } from './components/InvitationExperience'
import { AdminPage } from './pages/AdminPage'

function isAdminRoute() {
  return window.location.hash === '#/admin' || window.location.hash.startsWith('#/admin?')
}

export default function App() {
  const [adminRoute, setAdminRoute] = useState(isAdminRoute())
  const [opened, setOpened] = useState(false)

  useEffect(() => {
    const onHashChange = () => setAdminRoute(isAdminRoute())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  if (adminRoute) return <AdminPage />

  return <InvitationExperience opened={opened} onOpen={() => setOpened(true)} />
}
