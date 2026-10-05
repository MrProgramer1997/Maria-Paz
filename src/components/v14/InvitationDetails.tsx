import { DressSection } from './DressSection'
import { EnvelopeSection } from './EnvelopeSection'
import { EventsSection } from './EventsSection'
import { RsvpVisualSection } from './RsvpVisualSection'

export function InvitationDetails() {
  return (
    <>
      <EventsSection />
      <DressSection />
      <RsvpVisualSection />
      <EnvelopeSection />
    </>
  )
}
