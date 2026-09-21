import { useEffect, useMemo, useState } from 'react'

const YOUTUBE_VIDEO_ID = '6dYWe1c3OyU'
const YOUTUBE_WATCH_URL = `https://www.youtube.com/watch?v=${YOUTUBE_VIDEO_ID}`

export function MusicPlayer({ active }: { active: boolean }) {
  const [panelOpen, setPanelOpen] = useState(false)
  const [playerKey, setPlayerKey] = useState(0)

  useEffect(() => {
    if (active) {
      // El primer clic en “Descubrir mi invitación” ya cuenta como interacción
      // del usuario. Abrimos el reproductor para intentar autoplay; si el móvil
      // lo bloquea, el botón Play nativo queda visible como respaldo.
      setPanelOpen(true)
      setPlayerKey((value) => value + 1)
    } else {
      setPanelOpen(false)
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
    setPanelOpen((open) => {
      const next = !open
      if (next) setPlayerKey((value) => value + 1)
      return next
    })
  }

  return (
    <>
      {panelOpen && (
        <aside className="music-panel" aria-label="Música de la invitación">
          <div className="music-panel__header">
            <div>
              <span>Música de la noche</span>
              <strong>I Will Survive · Gloria Gaynor</strong>
            </div>
            <button
              type="button"
              className="music-panel__close"
              onClick={() => setPanelOpen(false)}
              aria-label="Cerrar reproductor de música"
              title="Cerrar reproductor"
            >
              ×
            </button>
          </div>

          <iframe
            key={playerKey}
            className="music-panel__player"
            src={playerUrl}
            title="I Will Survive de Gloria Gaynor"
            allow="autoplay; encrypted-media; picture-in-picture; web-share"
            allowFullScreen
          />

          <div className="music-panel__fallback">
            <span>Si tu celular bloquea el inicio automático, toca ▶ en el reproductor.</span>
            <a href={YOUTUBE_WATCH_URL} target="_blank" rel="noreferrer">
              Abrir en YouTube ↗
            </a>
          </div>
        </aside>
      )}

      <button
        type="button"
        className={`music-button music-button--label ${panelOpen ? 'is-playing' : ''}`}
        onClick={togglePlayer}
        aria-label={panelOpen ? 'Cerrar música' : 'Reproducir música'}
        title={panelOpen ? 'Cerrar música' : 'Reproducir música'}
      >
        <span className="music-icon" aria-hidden="true">♪</span>
        <span className="music-button__text">Música</span>
      </button>
    </>
  )
}
