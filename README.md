# Invitación interactiva para Marianita

Sitio estático hecho con HTML, CSS y JavaScript. Incluye una apertura animada del sobre/carta, una carta de dos páginas, una escena ilustrada de picnic y botones de respuesta.

## Archivos

- `index.html`: estructura y contenido.
- `styles.css`: diseño adaptable y animaciones CSS.
- `script.js`: interacciones y animaciones GSAP.
- `monos2.jpg`: fotografía que debes agregar manualmente junto a `index.html`.

## Tipografía

La interfaz utiliza la familia de sistema de Apple (`-apple-system`, SF Pro / SF Pro Rounded y `ui-serif` para acentos tipo New York). En iPhone y iPad se muestra con las tipografías del sistema; en otros dispositivos se utiliza la fuente de interfaz disponible como alternativa.

## Ejecutar localmente

Abre la carpeta en VS Code y ejecuta `index.html` con Live Server. Se necesita conexión a internet para cargar GSAP desde CDN. Sin GSAP, los controles siguen funcionando con una transición simplificada.

## Publicar en GitHub Pages

1. Crea un repositorio público, por ejemplo `picnic-marianita`.
2. Sube `index.html`, `styles.css`, `script.js`, `README.md` y `monos2.jpg` a la raíz.
3. En **Settings → Pages**, selecciona **Deploy from a branch**, rama `main` y carpeta `/ (root)`.
4. Guarda y espera a que GitHub Pages publique el sitio.

El botón “Sí” muestra una confirmación dentro de la página. No envía notificaciones ni guarda respuestas en una base de datos.
