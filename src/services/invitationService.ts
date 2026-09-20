import { isSupabaseConfigured, supabase } from '../lib/supabase'
import type { AdminInvitation, InvitationData } from '../types/invitation'

const demoInvitation: InvitationData = {
  display_name: 'Invitado especial',
  seats: 2,
  attendance_status: 'pending',
  confirmed_seats: null,
}

export const getInvitationCode = () => {
  const params = new URLSearchParams(window.location.search)
  return params.get('i')?.trim() || 'DEMO15'
}

export async function getInvitation(code: string): Promise<InvitationData> {
  if (!isSupabaseConfigured || !supabase) return demoInvitation

  const { data, error } = await supabase.rpc('get_invitation_by_code', { p_code: code })
  if (error) throw error

  const row = Array.isArray(data) ? data[0] : data
  if (!row) throw new Error('INVITATION_NOT_FOUND')

  return row as InvitationData
}

export async function submitRsvp(code: string, attends: boolean, confirmedSeats: number) {
  if (!isSupabaseConfigured || !supabase) {
    await new Promise((resolve) => setTimeout(resolve, 650))
    return { ok: true, demo: true }
  }

  const { data, error } = await supabase.rpc('submit_invitation_rsvp', {
    p_code: code,
    p_attends: attends,
    p_confirmed_seats: confirmedSeats,
  })

  if (error) throw error
  return data
}

export async function adminLogin(email: string, password: string) {
  if (!supabase) throw new Error('SUPABASE_NOT_CONFIGURED')
  return supabase.auth.signInWithPassword({ email, password })
}

export async function adminLogout() {
  if (!supabase) return
  await supabase.auth.signOut()
}

export async function getAdminInvitations(): Promise<AdminInvitation[]> {
  if (!supabase) {
    return [
      {
        id: 'demo-1',
        display_name: 'Familia Gómez',
        seats: 4,
        code: 'DEMO-FAMILIA-GOMEZ',
        active: true,
        created_at: new Date().toISOString(),
        rsvps: [{ attends: true, confirmed_seats: 4, confirmed_at: new Date().toISOString() }],
      },
      {
        id: 'demo-2',
        display_name: 'Laura Ramírez',
        seats: 1,
        code: 'DEMO-LAURA',
        active: true,
        created_at: new Date().toISOString(),
        rsvps: [],
      },
    ]
  }

  const { data, error } = await supabase
    .from('invitations')
    .select('id, display_name, seats, code, active, created_at, rsvps(attends, confirmed_seats, confirmed_at)')
    .order('created_at', { ascending: false })

  if (error) throw error
  return (data || []) as AdminInvitation[]
}

export async function createInvitation(displayName: string, seats: number) {
  if (!supabase) throw new Error('SUPABASE_NOT_CONFIGURED')

  const { data, error } = await supabase
    .from('invitations')
    .insert({ display_name: displayName, seats })
    .select('id, display_name, seats, code, active, created_at')
    .single()

  if (error) throw error
  return data
}
