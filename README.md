🎵 Spotify Now Playing Visualizer

Una aplicación web moderna y elegante diseñada para visualizar lo que estás escuchando en Spotify en tiempo real. Este proyecto transforma tu pantalla en un reproductor inmersivo con letras sincronizadas, fondos dinámicos basados en la carátula del álbum y múltiples opciones de personalización.

✨ Características Principales

🔄 Sincronización en Tiempo Real: Conéctate directamente con la API de Spotify para ver qué se está reproduciendo en tu cuenta.

🎤 Letras Sincronizadas: Visualiza las letras de tus canciones favoritas mientras suenan (soporta varios modos de visualización).

🎨 Temas Dinámicos: La interfaz cambia de color automáticamente extrayendo la paleta cromática de la carátula del álbum mediante Color Thief.

🎭 Personalización de Interfaz:

Modos de Diseño: Elige entre estilos como Spotify Original, Full Canvas, Glassmorphism y más.

Efectos Visuales: Desenfoque de fondo ajustable y transiciones fluidas.

📱 Responsive & Touch Friendly: Optimizado para escritorio y dispositivos móviles.

🛠️ Gestión de Playlists: Acceso rápido a tus listas de reproducción y control de cola.

🚀 Tecnologías Utilizadas

HTML5 & CSS3 (Animaciones personalizadas y Glassmorphism)

Tailwind CSS (Estilizado rápido y responsive)

JavaScript (Vanilla) (Lógica de autenticación y estado)

Spotify Web API (Datos de música y control de reproducción)

Color Thief (Extracción de colores de imágenes)

SortableJS (Gestión interactiva de listas)

🛠️ Configuración Local

Para ejecutar este proyecto localmente, necesitarás una cuenta de desarrollador en Spotify Developer Dashboard.

Clona el repositorio:

git clone [https://github.com/tu-usuario/spotify-now-playing.git](https://github.com/tu-usuario/spotify-now-playing.git)


Configura tu App en Spotify:

Crea una nueva aplicación.

Añade http://localhost:5500 (o tu URL local) en los Redirect URIs.

Copia tu Client ID.

Configura las credenciales:

En el archivo index.html, localiza la variable clientId y pega tu ID.

Lanza el proyecto:

Usa un servidor local como Live Server de VS Code para abrir el index.html.

📖 Cómo usarlo

Al abrir la web, haz clic en "Login with Spotify".

Acepta los permisos necesarios para leer tu reproducción actual.

¡Listo! Empieza a reproducir música en cualquier dispositivo con tu cuenta de Spotify y la web se actualizará automáticamente.

Haz clic en la carátula para cambiar de tema visual.

📸 Capturas de Pantalla

Vista Principal

Modo Letras

Personalización







🤝 Contribuciones

Las contribuciones son lo que hacen que la comunidad de código abierto sea un lugar increíble para aprender, inspirar y crear. Cualquier contribución que hagas será muy agradecida.

Haz un Fork del proyecto.

Crea tu rama de función (git checkout -b feature/AmazingFeature).

Haz un Commit de tus cambios (git commit -m 'Add some AmazingFeature').

Haz un Push a la rama (git push origin feature/AmazingFeature).

Abre un Pull Request.

📄 Licencia

Distribuido bajo la Licencia MIT. Consulta el archivo LICENSE para más información.

Desarrollado con ❤️ por [Tu Nombre/Usuario]

