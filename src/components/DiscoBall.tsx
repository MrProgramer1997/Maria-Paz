export function DiscoBall({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`disco-orb ${compact ? 'disco-orb--compact' : ''}`} aria-hidden="true">
      <div className="disco-orb__cord" />
      <div className="disco-orb__halo" />
      <div className="disco-orb__ball">
        <div className="disco-orb__grid" />
        <div className="disco-orb__glint" />
      </div>
      <div className="disco-orb__wash disco-orb__wash--pink" />
      <div className="disco-orb__wash disco-orb__wash--blue" />
    </div>
  )
}
