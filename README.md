# Invitación María Paz XV — V1.12

Tarjeta web interactiva desarrollada con React + Vite + TypeScript + Supabase y publicada en GitHub Pages.

## Estado V1.12

- Mantiene fotografías importadas desde `src/assets/images`.
- Mantiene `base: /Maria-Paz/` para GitHub Pages.
- Mantiene registro público en Supabase con nombre, celular y 1 a 4 asistentes.
- Mantiene panel administrativo protegido con Supabase Auth.
- Mantiene aviso posterior por WhatsApp a María Paz o Vanessa.
- Mantiene la música de YouTube sin video visible; solo aparece el botón Música.
- Restaura la fecha límite de confirmación: 17 de octubre de 2026.
- Restaura los textos originales de confirmación y el mensaje final completo.
- Añade el teléfono informado del lugar de la celebración.

## Publicación

```bash
git add .
git commit -m "Restaura contenido aprobado V1.12"
git push
```

## Cambios V1.13
- Máximo 2 asistentes por registro, validado también en Supabase.
- Campo opcional para recomendar una canción.
- La canción recomendada se guarda en `registrations.song_recommendation`.
- El panel administrativo muestra la canción al lado del registro y conserva quién la recomendó.
- Se mantienen la fecha límite del 17 de octubre, música oculta, WhatsApp, panel admin y fotografías.
