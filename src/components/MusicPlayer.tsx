import { useEffect, useMemo, useState } from 'react'

const YOUTUBE_VIDEO_ID = '6dYWe1c3OyU'

export function MusicPlayer({ active }: { active: boolean }) {
  const [playerOpen, setPlayerOpen] = useState(false)
  const [playerKey, setPlayerKey] = useState(0)

  useEffect(() => {
    if (active) {
      // El clic en “Descubrir mi invitación” cuenta como interacción del usuario.
      // El reproductor se abre en formato mini para intentar iniciar la canción
      // sin cubrir el contenido principal de la tarjeta.
      setPlayerOpen(true)
      setPlayerKey((value) => value + 1)
    } else {
      setPlayerOpen(false)
    }
  }, [active])

  const playerUrl = useMemo(() => {
    const params = new URLSearchParams({
      autoplay: '1',
      loop: '1',
      playlist: YOUTUBE_VIDEO_ID,
      controls: '1',
      playsinline: '1',
      rel: '0',
    })

    return `https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?${params.toString()}`
  }, [])

  if (!active) return null

  function togglePlayer() {
    setPlayerOpen((open) => {
      const next = !open
      if (next) setPlayerKey((value) => value + 1)
      return next
    })
  }

  return (
    <>
      {playerOpen && (
        <aside className="music-mini" aria-label="Reproductor de música">
          <iframe
            key={playerKey}
            className="music-mini__player"
            src={playerUrl}
            title="I Will Survive de Gloria Gaynor"
            allow="autoplay; encrypted-media; picture-in-picture; web-share"
            allowFullScreen
          />
          <div className="music-mini__caption" aria-hidden="true">
            <span>♪</span> I Will Survive
          </div>
          <button
            type="button"
            className="music-mini__close"
            onClick={() => setPlayerOpen(false)}
            aria-label="Cerrar reproductor"
            title="Cerrar reproductor"
          >
            ×
          </button>
        </aside>
      )}

      <button
        type="button"
        className={`music-button music-button--label ${playerOpen ? 'is-playing' : ''}`}
        onClick={togglePlayer}
        aria-label={playerOpen ? 'Ocultar música' : 'Mostrar música'}
        title={playerOpen ? 'Ocultar música' : 'Mostrar música'}
      >
        <span className="music-icon" aria-hidden="true">♪</span>
        <span className="music-button__text">Música</span>
      </button>
    </>
  )
}
