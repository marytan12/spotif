🎵 Spotify Now Playing Visualizer

<p align="center">
<img src="https://www.google.com/search?q=https://img.shields.io/badge/Spotify-1DB954%3Fstyle%3Dfor-the-badge%26logo%3Dspotify%26logoColor%3Dwhite" alt="Spotify">
<img src="https://www.google.com/search?q=https://img.shields.io/badge/JavaScript-F7DF1E%3Fstyle%3Dfor-the-badge%26logo%3Djavascript%26logoColor%3Dblack" alt="JavaScript">
<img src="https://www.google.com/search?q=https://img.shields.io/badge/Tailwind_CSS-38B2AC%3Fstyle%3Dfor-the-badge%26logo%3Dtailwind-css%26logoColor%3Dwhite" alt="Tailwind">
</p>

[!TIP]
Una experiencia visual inmersiva para tu música. Transforma tu navegador en un reproductor dinámico con letras sincronizadas y colores que cobran vida en tiempo real.

✨ Características

🔄 Sincronización Real: Datos en vivo directamente desde la API oficial de Spotify.

🎤 Letras en Pantalla: Sistema de letras sincronizadas con múltiples modos de visualización.

🎨 Extracción de Color: Fondo dinámico que cambia según el arte del álbum usando Color Thief.

🎭 Temas Personalizables: Elige entre Spotify Original, Full Canvas, Glassmorphism y más.

📱 Responsive Design: Optimizado para cualquier tamaño de pantalla (Móvil, Tablet, PC).

🚀 Tecnologías

Tecnología

Propósito

Tailwind CSS

Estilizado moderno y responsive.

Color Thief

Generación de paletas de colores dinámicas.

SortableJS

Interacción fluida con listas y playlists.

Spotify API

Autenticación y datos de reproducción.

🛠️ Instalación y Configuración

[!IMPORTANT]

Para que el proyecto funcione, debes registrar una aplicación en el Spotify Developer Dashboard.

1. Clonar repositorio

git clone [https://github.com/tu-usuario/spotify-now-playing.git](https://github.com/tu-usuario/spotify-now-playing.git)
cd spotify-now-playing


2. Configurar Spotify Dashboard

Crea tu App y añade http://localhost:5500 (o la URL de tu servidor local) en los Redirect URIs.

Copia tu Client ID.

3. Aplicar credenciales

Abre el archivo index.html y reemplaza el ID en la configuración inicial:

const clientId = 'TU_CLIENT_ID_AQUÍ';


📸 Demo Visual

Reproductor Principal

Panel de Ajustes





(Nota: Sube tus capturas de pantalla a la carpeta de tu repositorio y reemplaza estos textos con la ruta de la imagen).

📖 Instrucciones de Uso

Pulsa el botón "Login with Spotify".

Una vez autenticado, abre Spotify en cualquier dispositivo y dale a Reproducir.

Haz clic en la carátula del álbum para cambiar el tema visual instantáneamente.

Explora las opciones de Lyrics para cambiar cómo se muestran las letras.

🤝 Contribuciones

¿Tienes una idea para mejorar el visualizador?

Haz un Fork del proyecto.

Crea una rama para tu mejora: git checkout -b feature/MejoraIncreible.

Envía un Pull Request con tus cambios detallados.

<p align="center">
Hecho con ❤️ por <b>[Tu Nombre o Usuario]</b>
</p>
