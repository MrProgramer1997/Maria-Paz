interface IconProps {
  className?: string
}

export function ChurchIcon({ className = '' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden="true">
      <path d="M32 7v12M26 13h12M21 30l11-9 11 9v24H21V30Z" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 36l6-5v23H15V36Zm28-5 6 5v18h-6V31ZM28 54V42a4 4 0 0 1 8 0v12" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function PartyIcon({ className = '' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden="true">
      <path d="M19 48 28 22l14 14-23 12Z" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="m26 28 10 10M38 15l3-7M48 23l7-3M45 11l4-4M18 15l-4-5M51 35l6 2" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="34" cy="15" r="2" fill="currentColor" /><circle cx="51" cy="15" r="2" fill="currentColor" /><circle cx="16" cy="26" r="2" fill="currentColor" />
    </svg>
  )
}

export function ClockIcon({ className = '' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden="true">
      <circle cx="32" cy="32" r="23" fill="none" stroke="currentColor" strokeWidth="2.5" />
      <path d="M32 18v15l10 6" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function PinIcon({ className = '' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden="true">
      <path d="M32 57s17-17.3 17-31A17 17 0 0 0 15 26c0 13.7 17 31 17 31Z" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
      <circle cx="32" cy="26" r="6" fill="none" stroke="currentColor" strokeWidth="2.5" />
    </svg>
  )
}

export function SparklesIcon({ className = '' }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 64 64" aria-hidden="true">
      <path d="M30 7c2.5 10.5 7.8 15.8 18 18-10.2 2.2-15.5 7.5-18 18-2.4-10.5-7.7-15.8-18-18 10.3-2.2 15.6-7.5 18-18Z" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
      <path d="M48 37c1.2 5.1 3.9 7.8 9 9-5.1 1.1-7.8 3.8-9 9-1.2-5.2-3.8-7.9-9-9 5.2-1.2 7.8-3.9 9-9ZM12 38c.8 3.2 2.4 4.8 5.5 5.5-3.1.7-4.7 2.3-5.5 5.5-.7-3.2-2.3-4.8-5.5-5.5 3.2-.7 4.8-2.3 5.5-5.5Z" fill="currentColor" />
    </svg>
  )
}