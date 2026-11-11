# Automotriz San Bernardo — Sitio web

Landing page comercial para **Automotriz San Bernardo**, taller de mecánica integral en Barros Arana 1944, San Bernardo, Chile.

Construida con **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, **Lucide React** y `next/image`.

El objetivo de la página es generar contactos: WhatsApp, llamadas y visitas al taller.

---

## 1. Requisitos (Windows)

1. **Node.js 20.9 o superior** (recomendado: la versión LTS). Descárgalo desde https://nodejs.org
   Para comprobarlo, abre una terminal y ejecuta `node -v`.
2. **Visual Studio Code** — https://code.visualstudio.com

## 2. Instalar y ejecutar

1. Descomprime el ZIP.
2. Abre Visual Studio Code → **Archivo → Abrir carpeta…** → elige la carpeta `automotriz-san-bernardo`.
3. Abre la terminal integrada: **Terminal → Nueva terminal** (atajo `Ctrl + ñ`).
4. Ejecuta:

```bash
npm install
npm run dev
```

5. Abre http://localhost:3000 en el navegador.

> Si PowerShell muestra un error de "ejecución de scripts deshabilitada", usa la terminal **Command Prompt** (cmd)
> desde el menú desplegable de la terminal de VS Code, o ejecuta una vez
> `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned`.

Otros comandos:

| Comando         | Qué hace                                             |
| --------------- | ---------------------------------------------------- |
| `npm run dev`   | Servidor de desarrollo con recarga automática        |
| `npm run build` | Compila la versión de producción (verifica errores)  |
| `npm run start` | Sirve la versión compilada (primero ejecuta `build`) |
| `npm run lint`  | Revisa los tipos de TypeScript                       |

---

## 3. Qué falta recibir del cliente (y dónde se completa)

El sitio está completo y funcional, pero **no inventa nada**: lo que aún no existe queda oculto o como espacio reservado.

| Pendiente                          | Estado actual                                     | Dónde se completa                       |
| ---------------------------------- | ------------------------------------------------- | --------------------------------------- |
| Fotografía panorámica del taller   | El hero muestra un tacómetro de marca (SVG)       | `src/config/images.ts` → `heroPhoto`    |
| Fotos de las instalaciones         | Espacios reservados en "Nosotros"                 | `src/config/images.ts` → `aboutPhotos`  |
| Fotos de vehículos y trabajos      | Mensaje de galería en preparación                 | `src/config/images.ts` → `galleryPhotos`|
| Reseñas reales de Google           | Estado provisional con enlace a la ficha en Maps  | `src/data/reviews.ts`                   |
| Instagram y Facebook               | **Ocultos** (no aparece ningún enlace)            | `src/config/site.ts` → `social`         |
| URL oficial de la ficha de Google  | Se usa una búsqueda en Google Maps                | `src/config/site.ts` → `googleBusinessUrl` |

### Agregar fotografías

1. Copia las imágenes a `public/images/hero`, `public/images/about` o `public/images/gallery`.
2. Regístralas en `src/config/images.ts`:

```ts
export const galleryPhotos: Photo[] = [
  {
    src: "/images/gallery/vehiculo-01.jpg",
    alt: "Vehículo en el taller",   // describe lo que se VE, sin inventar el trabajo realizado
    width: 1600,                    // dimensiones reales del archivo
    height: 1200,
  },
];
```

3. Guarda. El hero, "Nosotros" y la galería (con visor ampliado, flechas y tecla Esc) se actualizan solos.

**Optimización:** `next/image` convierte automáticamente a AVIF/WebP, genera tamaños responsive y carga las imágenes de
forma diferida. Aun así, conviene subir fotos de **máx. ~2400 px de ancho** (el hero) y **~1600 px** (galería), en JPG.

### Agregar reseñas de Google

Copia reseñas **auténticas** en `src/data/reviews.ts` (nombre, puntuación y texto reales). Nunca inventes reseñas.

### Activar Instagram y Facebook

En `src/config/site.ts`:

```ts
social: {
  instagram: "https://www.instagram.com/usuario",
  facebook: "https://www.facebook.com/pagina",
},
```

Los íconos aparecen automáticamente en Contacto y Footer, y se agregan a los datos estructurados de SEO.

---

## 4. Estructura del proyecto

```
src/
├─ app/
│  ├─ layout.tsx        Metadatos SEO, fuente, JSON-LD
│  ├─ page.tsx          Orden de las secciones
│  ├─ globals.css       Paleta de marca y estilos base
│  ├─ sitemap.ts · robots.ts · not-found.tsx
│  └─ icon.png · apple-icon.png   Favicon (emblema del logo)
├─ components/
│  ├─ Navbar · Hero · Services · Transmissions · About
│  ├─ Gallery · Lightbox · Reviews · Contact · Footer
│  ├─ Tachometer · OpenStatus · HoursTable · MobileActionBar
│  └─ ui/               Button, SectionHeading, RacingLine, Icons, Motion
├─ config/
│  ├─ site.ts           ★ Datos reales del negocio (única fuente de verdad)
│  ├─ images.ts         ★ Fotografías
│  └─ navigation.ts     Enlaces del menú
├─ data/
│  ├─ services.ts       Los 10 servicios
│  └─ reviews.ts        ★ Reseñas de Google
├─ fonts/               Archivo (variable, licencia OFL)
└─ lib/                 Utilidades (horario en vivo, cn)
public/
├─ images/brand/        Logo (versión con fondo transparente + original)
└─ og.png                Imagen para compartir en redes
```

## 5. Personalización rápida

- **Teléfono, dirección, horario, mensaje de WhatsApp:** `src/config/site.ts`. Cambian en toda la página.
- **Servicios y sus mensajes de WhatsApp:** `src/data/services.ts`.
- **Colores:** `src/app/globals.css` (bloque `@theme`). Paleta oficial: grafito `#15181E`, azul marino `#10264B`,
  rojo `#C91E2D`, plateado `#C8CDD4`, blanco `#F5F5F5`. Se añadió un tono rojo más claro (`#F0525F`) solo para texto
  pequeño sobre fondo oscuro, porque el rojo base no alcanza el contraste mínimo recomendado en ese caso.
- **Textos de cada sección:** dentro de su componente en `src/components/`.

## 6. Publicar el sitio

Antes de publicar, crea un archivo `.env.local` (copia de `.env.example`) con la URL definitiva:

```
NEXT_PUBLIC_SITE_URL=https://www.tu-dominio.cl
```

Se usa en el SEO, el sitemap y la imagen para compartir. Opciones de hosting: Vercel (la más simple para Next.js),
Netlify o cualquier servidor con Node.js (`npm run build` + `npm run start`).

## 7. Funciones incluidas

- Botones de WhatsApp con mensaje predefinido (`https://wa.me/56988084151`), uno por servicio, y teléfono clicable.
- Estado **"Abierto ahora / Cerrado"** calculado en vivo con el horario real y la zona `America/Santiago`.
- Barra fija de contacto en celulares (Llamar / WhatsApp).
- Mapa de Google Maps embebido y enlace "Cómo llegar" (el mapa necesita conexión a internet).
- SEO local: metadatos, Open Graph, `sitemap.xml`, `robots.txt` y datos estructurados `AutoRepair` (JSON-LD).
- Accesibilidad: enlace "Saltar al contenido", foco visible, navegación por teclado, `prefers-reduced-motion` respetado.

## 8. Notas sobre el contenido

- Todas las cifras y datos provienen del cliente: 12 años de trayectoria, atendido por su dueño (Andrés Guajardo),
  dirección, teléfono, horario y servicios. No hay certificaciones, premios ni cantidades de clientes inventados.
- El texto sobre la **diálisis de transmisión** es descriptivo y evita prometer resultados. Conviene que
  Andrés lo revise para asegurar que refleja cómo trabaja el taller.
- La fuente Archivo se incluye localmente (`src/fonts`), por lo que el proyecto compila sin acceso a Google Fonts.
