import { useEffect, useRef, useState } from 'react'

export function MusicPlayer({ active }: { active: boolean }) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [playing, setPlaying] = useState(false)
  const [available, setAvailable] = useState(true)

  useEffect(() => {
    if (!active || !available) return
    const audio = audioRef.current
    if (!audio) return

    audio.volume = 0.42
    audio.play().then(() => setPlaying(true)).catch(() => setPlaying(false))
  }, [active, available])

  async function toggle() {
    const audio = audioRef.current
    if (!audio || !available) return

    if (audio.paused) {
      try {
        await audio.play()
        setPlaying(true)
      } catch {
        setPlaying(false)
      }
    } else {
      audio.pause()
      setPlaying(false)
    }
  }

  return (
    <>
      <audio
        ref={audioRef}
        src="./audio/maria-paz.mp3"
        loop
        preload="none"
        onError={() => setAvailable(false)}
      />
      <button
        type="button"
        className={`music-button ${playing ? 'is-playing' : ''}`}
        onClick={toggle}
        aria-label={available ? (playing ? 'Pausar música' : 'Reproducir música') : 'Música pendiente'}
        title={available ? (playing ? 'Pausar música' : 'Reproducir música') : 'Agrega public/audio/maria-paz.mp3'}
      >
        <span className="music-icon">{available ? (playing ? 'Ⅱ' : '♪') : '♪'}</span>
      </button>
    </>
  )
}
