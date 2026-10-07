export function DiscoBall({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`disco-orb ${compact ? 'disco-orb--compact' : ''}`} aria-hidden="true">
      <div className="disco-orb__cord" />
      <div className="disco-orb__cap" />
      <div className="disco-orb__halo" />
      <div className="disco-orb__beam disco-orb__beam--one" />
      <div className="disco-orb__beam disco-orb__beam--two" />
      <div className="disco-orb__ball">
        <div className="disco-orb__grid" />
        <div className="disco-orb__silver-sheen" />
        <div className="disco-orb__glint" />
      </div>
      <i className="disco-orb__spark disco-orb__spark--one" />
      <i className="disco-orb__spark disco-orb__spark--two" />
      <i className="disco-orb__spark disco-orb__spark--three" />
    </div>
  )
}
