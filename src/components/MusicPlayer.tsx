import { useEffect, useRef, useState } from 'react'

const AUDIO_URL = `${import.meta.env.BASE_URL}audio/maria-paz.mp3?v=118`
const OPEN_EVENT = 'invitation:open'

export function MusicPlayer({ active }: { active: boolean }) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [needsTap, setNeedsTap] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    audio.volume = 0.72

    const syncPlay = () => {
      setIsPlaying(true)
      setNeedsTap(false)
    }

    const syncPause = () => setIsPlaying(false)

    const startFromGesture = () => {
      audio.volume = 0.72
      void audio.play()
        .then(() => {
          setIsPlaying(true)
          setNeedsTap(false)
        })
        .catch(() => {
          setIsPlaying(false)
          setNeedsTap(true)
        })
    }

    audio.addEventListener('play', syncPlay)
    audio.addEventListener('pause', syncPause)
    window.addEventListener(OPEN_EVENT, startFromGesture)

    return () => {
      audio.removeEventListener('play', syncPlay)
      audio.removeEventListener('pause', syncPause)
      window.removeEventListener(OPEN_EVENT, startFromGesture)
    }
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    if (!active) {
      audio.pause()
      setIsPlaying(false)
      setNeedsTap(false)
    }
  }, [active])

  async function toggleMusic() {
    const audio = audioRef.current
    if (!audio) return

    if (audio.paused) {
      try {
        audio.volume = 0.72
        await audio.play()
        setIsPlaying(true)
        setNeedsTap(false)
      } catch {
        setNeedsTap(true)
      }
      return
    }

    audio.pause()
  }

  return (
    <>
      <audio ref={audioRef} preload="auto" loop playsInline>
        <source src={AUDIO_URL} type="audio/mpeg" />
      </audio>

      {active && (
        <button
          type="button"
          className={`music-button music-button--v118 ${isPlaying ? 'is-playing' : ''} ${needsTap ? 'needs-tap' : ''}`}
          onClick={toggleMusic}
          aria-label={isPlaying ? 'Pausar música' : 'Reproducir música'}
          title={isPlaying ? 'Pausar música' : 'Reproducir música'}
        >
          <span className="music-v118__icon" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span className="music-v118__copy">
            <small>{isPlaying ? 'Sonando' : needsTap ? 'Toca para escuchar' : 'Música'}</small>
            <strong>I Will Survive</strong>
          </span>
        </button>
      )}
    </>
  )
}
