import { useEffect, useRef, useState } from 'react'

const AUDIO_URL = `${import.meta.env.BASE_URL}audio/maria-paz.m4a`
const OPEN_EVENT = 'invitation:open'

export function MusicPlayer({ active }: { active: boolean }) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [musicEnabled, setMusicEnabled] = useState(false)
  const [needsTap, setNeedsTap] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    const syncPlaying = () => {
      setMusicEnabled(!audio.paused)
      setNeedsTap(false)
    }

    const syncPaused = () => setMusicEnabled(false)

    const onOpenGesture = () => {
      audio.volume = 0.72
      void audio
        .play()
        .then(() => {
          setMusicEnabled(true)
          setNeedsTap(false)
        })
        .catch(() => {
          setMusicEnabled(false)
          setNeedsTap(true)
        })
    }

    audio.addEventListener('play', syncPlaying)
    audio.addEventListener('pause', syncPaused)
    window.addEventListener(OPEN_EVENT, onOpenGesture)

    return () => {
      audio.removeEventListener('play', syncPlaying)
      audio.removeEventListener('pause', syncPaused)
      window.removeEventListener(OPEN_EVENT, onOpenGesture)
    }
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    if (!active) {
      audio.pause()
      setMusicEnabled(false)
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
        setMusicEnabled(true)
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
      <audio ref={audioRef} preload="metadata" loop playsInline>
        <source src={AUDIO_URL} type="audio/mp4" />
      </audio>

      {active && (
        <button
          type="button"
          className={`music-button music-button--premium ${musicEnabled ? 'is-playing' : ''} ${needsTap ? 'needs-tap' : ''}`}
          onClick={toggleMusic}
          aria-label={musicEnabled ? 'Pausar música' : 'Reproducir música'}
          title={musicEnabled ? 'Pausar música' : 'Reproducir música'}
        >
          <span className="music-equalizer" aria-hidden="true">
            <i />
            <i />
            <i />
          </span>
          <span className="music-button__copy">
            <small>{musicEnabled ? 'Sonando' : needsTap ? 'Toca para escuchar' : 'Música'}</small>
            <strong>I Will Survive</strong>
          </span>
        </button>
      )}
    </>
  )
}
