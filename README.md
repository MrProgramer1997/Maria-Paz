# Invitación XV · María Paz

Invitación digital interactiva desarrollada con React + Vite + TypeScript + Supabase.

## Incluye

- Apertura tipo invitación premium.
- Diseño responsive prioritario para móvil.
- Animaciones suaves y elementos tipo bola disco.
- Cuenta regresiva.
- Misa y celebración.
- Google Maps.
- Dress code.
- Cupos personalizados por invitado.
- Confirmación de asistencia en Supabase.
- Enlaces directos de WhatsApp.
- Lluvia de sobres.
- Galería temporal con las referencias enviadas.
- Panel administrativo.
- GitHub Actions para desplegar automáticamente a GitHub Pages.
- RLS + RPC en Supabase para no exponer la lista de invitados públicamente.

## 1. Ejecutar en VS Code

```bash
npm install
npm run dev
```

En modo local, si todavía no configuras Supabase, se abre con un invitado DEMO.

Panel administrativo:

```text
http://localhost:5173/#/admin
```

## 2. Supabase

1. Crea o selecciona el proyecto de Supabase.
2. Abre SQL Editor.
3. Ejecuta `supabase/migrations/001_invitation_maria_paz.sql`.
4. En Authentication crea el usuario administrador.
5. Copia el UUID del usuario y ejecuta:

```sql
insert into public.invitation_admins (user_id)
values ('UUID-DEL-USUARIO-ADMIN');
```

6. Copia `.env.example` como `.env` y completa:

```env
VITE_SUPABASE_URL=...
VITE_SUPABASE_ANON_KEY=...
```

Usa solamente la clave pública `anon`. Nunca pongas `service_role` en el frontend.

## 3. Invitaciones personalizadas

Desde `#/admin` creas cada persona o familia y su número de cupos.
El panel genera/copia URLs con este formato:

```text
https://TU-USUARIO.github.io/TU-REPO/?i=CODIGO_ALEATORIO
```

## 4. Música

Cuando definan la canción, coloca el archivo en:

```text
public/audio/maria-paz.mp3
```

No hace falta modificar código.

## 5. Fotografías definitivas

Las referencias temporales están en `public/images`.
Cuando lleguen las fotos reales puedes reemplazar las imágenes manteniendo estos nombres:

- `ref-01.webp`
- `ref-02.webp`
- `ref-03.webp`
- `ref-04.webp`
- `ref-05.webp`

## 6. GitHub Pages

El workflow `.github/workflows/deploy.yml` publica automáticamente después de cada `git push` a `main`.

En el repositorio configura:

- `Settings > Pages > Source: GitHub Actions`
- `Settings > Secrets and variables > Actions`
  - `VITE_SUPABASE_URL`
  - `VITE_SUPABASE_ANON_KEY`

Después el flujo cotidiano queda en:

```bash
git add .
git commit -m "Actualiza invitación"
git push
```

