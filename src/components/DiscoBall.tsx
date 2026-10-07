export function DiscoBall({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`disco-wrap ${compact ? 'disco-wrap--compact' : ''}`} aria-hidden="true">
      <div className="disco-string" />
      <div className="disco-aura" />
      <div className="disco-ball">
        <div className="disco-shine" />
        <div className="disco-prism disco-prism--one" />
        <div className="disco-prism disco-prism--two" />
        <div className="disco-prism disco-prism--three" />
      </div>
      <div className="disco-reflections">
        {Array.from({ length: 12 }).map((_, index) => (
          <i key={index} className={`disco-reflection disco-reflection--${index + 1}`} />
        ))}
      </div>
    </div>
  )
}