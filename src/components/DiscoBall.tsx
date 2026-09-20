export function DiscoBall({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`disco-wrap ${compact ? 'disco-wrap--compact' : ''}`} aria-hidden="true">
      <div className="disco-string" />
      <div className="disco-ball">
        <div className="disco-shine" />
      </div>
    </div>
  )
}
