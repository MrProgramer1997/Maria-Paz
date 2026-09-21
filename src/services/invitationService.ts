import { isSupabaseConfigured, supabase } from '../lib/supabase'
import type { Registration } from '../types/invitation'

export async function registerGuest(fullName: string, phone: string, attendees: number, songRecommendation?: string) {
  const normalizedName = fullName.trim()
  const normalizedPhone = phone.replace(/\D/g, '').slice(0, 15)
  const normalizedSong = songRecommendation?.trim() || null

  if (normalizedName.length < 2) throw new Error('INVALID_NAME')
  if (normalizedPhone.length < 7) throw new Error('INVALID_PHONE')
  if (attendees < 1 || attendees > 2) throw new Error('INVALID_ATTENDEES')
  if (normalizedSong && (normalizedSong.length < 2 || normalizedSong.length > 160)) throw new Error('INVALID_SONG')

  if (!isSupabaseConfigured || !supabase) {
    await new Promise((resolve) => setTimeout(resolve, 500))
    return { ok: true, demo: true }
  }

  const { error } = await supabase
    .from('registrations')
    .insert({
      full_name: normalizedName,
      phone: normalizedPhone,
      attendees,
      song_recommendation: normalizedSong,
    })

  if (error) {
    if (error.code === '23505') throw new Error('PHONE_ALREADY_REGISTERED')
    throw error
  }

  return { ok: true }
}

export async function adminLogin(email: string, password: string) {
  if (!supabase) throw new Error('SUPABASE_NOT_CONFIGURED')
  return supabase.auth.signInWithPassword({ email, password })
}

export async function adminLogout() {
  if (!supabase) return
  await supabase.auth.signOut()
}

export async function getRegistrations(): Promise<Registration[]> {
  if (!supabase) {
    return [
      {
        id: 'demo-1',
        full_name: 'Invitado de prueba',
        phone: '3001234567',
        attendees: 2,
        song_recommendation: 'I Will Survive - Gloria Gaynor',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      },
    ]
  }

  const { data, error } = await supabase
    .from('registrations')
    .select('id, full_name, phone, attendees, song_recommendation, created_at, updated_at')
    .order('created_at', { ascending: false })

  if (error) throw error
  return (data || []) as Registration[]
}
