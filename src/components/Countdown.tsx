import { useEffect, useMemo, useState } from 'react'

const TARGET = new Date('2026-11-07T19:00:00-05:00').getTime()

function calculate() {
  const diff = Math.max(0, TARGET - Date.now())
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff / 3_600_000) % 24),
    minutes: Math.floor((diff / 60_000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

export function Countdown() {
  const [time, setTime] = useState(calculate)
  const items = useMemo(
    () => [
      ['Días', time.days],
      ['Horas', time.hours],
      ['Min', time.minutes],
      ['Seg', time.seconds],
    ],
    [time],
  )

  useEffect(() => {
    const interval = window.setInterval(() => setTime(calculate()), 1000)
    return () => window.clearInterval(interval)
  }, [])

  return (
    <div className="countdown" aria-label="Cuenta regresiva para la celebración">
      {items.map(([label, value]) => (
        <div className="countdown-item" key={label}>
          <strong>{String(value).padStart(2, '0')}</strong>
          <span>{label}</span>
        </div>
      ))}
    </div>
  )
}
