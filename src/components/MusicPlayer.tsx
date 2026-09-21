import { useEffect, useMemo, useState } from 'react'

const YOUTUBE_VIDEO_ID = '6dYWe1c3OyU'

export function MusicPlayer({ active }: { active: boolean }) {
  const [musicEnabled, setMusicEnabled] = useState(false)
  const [playerKey, setPlayerKey] = useState(0)

  useEffect(() => {
    if (active) {
      // El clic en “Descubrir mi invitación” intenta iniciar la música.
      // El reproductor de YouTube permanece fuera de la vista para no
      // interferir visualmente con la tarjeta.
      setMusicEnabled(true)
      setPlayerKey((value) => value + 1)
    } else {
      setMusicEnabled(false)
    }
  }, [active])

  const playerUrl = useMemo(() => {
    const params = new URLSearchParams({
      autoplay: '1',
      loop: '1',
      playlist: YOUTUBE_VIDEO_ID,
      controls: '0',
      playsinline: '1',
      rel: '0',
      modestbranding: '1',
    })

    return `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?${params.toString()}`
  }, [])

  if (!active) return null

  function toggleMusic() {
    setMusicEnabled((enabled) => {
      const next = !enabled
      if (next) setPlayerKey((value) => value + 1)
      return next
    })
  }

  return (
    <>
      {musicEnabled && (
        <div className="music-audio-frame" aria-hidden="true">
          <iframe
            key={playerKey}
            src={playerUrl}
            title="Música de la invitación"
            allow="autoplay; encrypted-media"
            tabIndex={-1}
          />
        </div>
      )}

      <button
        type="button"
        className={`music-button music-button--label ${musicEnabled ? 'is-playing' : ''}`}
        onClick={toggleMusic}
        aria-label={musicEnabled ? 'Pausar música' : 'Reproducir música'}
        title={musicEnabled ? 'Pausar música' : 'Reproducir música'}
      >
        <span className="music-icon" aria-hidden="true">♪</span>
        <span className="music-button__text">Música</span>
      </button>
    </>
  )
}
