# Invitación María Paz XV — V1.9

Tarjeta web interactiva desarrollada con React + Vite + TypeScript + Supabase y publicada en GitHub Pages.

## Correcciones V1.9

- Fotografías provisionales importadas desde `src/assets/images` para que Vite las incluya y versione correctamente en el build de GitHub Pages.
- `base` de Vite fijado a `/Maria-Paz/` para la publicación en el repositorio actual.
- Reproductor de la canción elegida usando el embed oficial de YouTube.
- El reproductor se abre al entrar a la invitación e intenta autoplay después de la interacción del usuario.
- Si el navegador móvil bloquea autoplay, queda visible el botón Play nativo y un enlace de respaldo a YouTube.
- Ningún fallo de música o imágenes bloquea el contenido principal.

## Publicación

```bash
git add .
git commit -m "Corrige fotos y reproductor de musica V1.9"
git push
```

GitHub Actions compila y publica automáticamente.


## V1.9 - reproductor compacto
El reproductor de YouTube se redujo a un mini reproductor flotante 16:9 para no tapar la tarjeta. Se conserva la animación del botón Música y el acceso directo a los controles del reproductor.


## V1.10
- Corrige el registro publico para usuarios anonimos y sesiones autenticadas.
- Mantiene el aviso posterior por WhatsApp a Maria Paz o Vanessa.
