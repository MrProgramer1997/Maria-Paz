export type AttendanceStatus = 'pending' | 'confirmed' | 'declined'

export interface InvitationData {
  display_name: string
  seats: number
  attendance_status: AttendanceStatus
  confirmed_seats: number | null
}

export interface AdminInvitation {
  id: string
  display_name: string
  seats: number
  code: string
  active: boolean
  created_at: string
  rsvps?: Array<{
    attends: boolean
    confirmed_seats: number
    confirmed_at: string
  }>
}
