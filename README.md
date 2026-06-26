# Rizoma IA docente - sitio para GitHub Pages

Sitio estático de una sola página. No usa dependencias externas, CDN ni frameworks. Todos los recursos están incrustados o vinculados localmente desde la carpeta `assets/`.

## Estructura

- `index.html`: página principal.
- `styles.css`: diseño visual del rizoma y los paneles.
- `script.js`: apertura de recursos en ventana interna sin salir del sitio.
- `assets/`: audios, videos, imágenes, PDF, DOCX y PPTX.

## Publicarlo en GitHub Pages

1. Descomprimir el ZIP.
2. Crear un repositorio en GitHub.
3. Subir todo el contenido de esta carpeta a la raíz del repositorio: `index.html`, `styles.css`, `script.js`, `README.md` y `assets/`.
4. En GitHub ir a **Settings → Pages**.
5. Elegir **Deploy from a branch**.
6. Seleccionar la rama `main` y la carpeta `/root`.
7. Guardar. GitHub va a generar la URL pública del sitio.

## Importante

No borrar ni renombrar la carpeta `assets/`, porque los reproductores y documentos dependen de esas rutas. El video más grande pesa menos de 100 MB, por lo que puede subirse a GitHub sin Git LFS.
