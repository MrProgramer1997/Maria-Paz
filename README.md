# Invitación digital — María Paz XV

Versión 1.3.0.

## Stack
- React 19 + Vite + TypeScript
- Supabase para invitados, RSVP y autenticación administrativa
- GitHub Pages + GitHub Actions

## Supabase
El proyecto está conectado a `Proyecto Cumple` mediante su URL pública y **publishable key**.
Estos valores son públicos por diseño en aplicaciones web; la seguridad de los datos depende de RLS y de las políticas del proyecto.
Nunca colocar una `secret key` ni `service_role` en el frontend.

La base ya contempla:
- `invitations`
- `rsvps`
- `invitation_admins`
- RLS
- RPC pública controlada para consultar una invitación por código
- RPC pública controlada para registrar una confirmación

## Panel administrativo
Ruta: `#/admin`

El panel NO tiene una contraseña fija dentro del código. Usa Supabase Auth con correo y contraseña. Primero debe existir un usuario en Supabase Auth y su UUID debe estar autorizado en `public.invitation_admins`.

## Música
La versión incluye una pista instrumental original provisional en:

`public/audio/maria-paz.mp3`

Cuando se defina la canción final, basta con reemplazar ese archivo conservando el mismo nombre.

## Publicación
```bash
git add .
git commit -m "Conecta Supabase y agrega musica provisional"
git push
```

GitHub Actions compila y publica automáticamente.
