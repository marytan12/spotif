# Spotify Now Playing

Visualizador avanzado de **Spotify Now Playing** con letras sincronizadas palabra por palabra, fondos dinámicos, soporte para **Spotify Canvas**, múltiples modos de visualización y una experiencia totalmente inmersiva.

> Proyecto no oficial. No afiliado con Spotify AB.

---

## ✨ Características

- 🎵 **Now Playing en tiempo real** usando la API Web de Spotify
- 🎤 **Letras sincronizadas palabra por palabra** (estilo karaoke)
- 🎬 **Soporte para Spotify Canvas** como fondo o carátula animada
- 🎨 Temas dinámicos basados en la carátula del álbum
- 🖥️📺📱 Diseñado para escritorio, TV, kioscos y móvil
- 🔀 Cola reproducible y ordenable (drag & drop)
- 🔍 Búsqueda de canciones y artistas
- 📜 Historial de reproducción
- 📀 Vista de álbumes y playlists
- 🧩 Múltiples modos de letra:
  - Sobre la carátula
  - Modo dividido (Side Lyrics)
  - Pantalla completa
- ⚙️ Configuración visual en tiempo real (blur, posición, modo retrato, etc.)

---

## 🖼️ Modos de Visualización

- **Modo estándar**: reproductor clásico con carátula y controles
- **Modo inmersivo**: carátula grande o Canvas a pantalla casi completa
- **Modo dividido (Side Lyrics)**: carátula + letras grandes sincronizadas
- **Modo cover lyrics**: letras superpuestas sobre la carátula
- **Modo pantalla completa**: letras protagonistas para displays o TV

---

## 🚀 Tecnologías Usadas

- **HTML5 + CSS3**
- **Tailwind CSS**
- **JavaScript (Vanilla)**
- **Spotify Web API**
- **Color Thief** (colores dinámicos desde la carátula)
- **SortableJS** (ordenar cola de reproducción)
- **Spotify Canvas (no oficial)**

---

## 🔐 Autenticación

La aplicación utiliza **OAuth de Spotify** para acceder a:

- Canción actual
- Letras
- Cola
- Dispositivos
- Playlists
- Álbumes
- Artistas

El login se realiza directamente desde Spotify mediante el botón **“Conectar con Spotify”**.

---

## 📦 Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/spotify-now-playing.git
cd spotify-now-playing
