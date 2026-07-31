# 📁 Guía de Arquitectura de Imágenes para GRUPO GENOLG

Esta guía detalla la organización de carpetas dentro de `public/images/` para que puedas reemplazar fácilmente las imágenes demostrativas con las **fotografías e insignias reales** de tu empresa.

---

## 📂 Carpetas por Sección de la Web

### 1. `public/images/corporativo/`
Guarda la identidad visual de la empresa (logotipos, isotipos y favicons).
- **`logo.png`**: Logo principal con fondo transparente (Recomendado: `500x150 px`, formato PNG transparente).
- **`logo_dark.png`**: Versión del logo para fondos claros (si aplicara).
- **`favicon.ico` / `favicon.png`**: Ícono de la pestaña del navegador (`64x64 px`).

---

### 2. `public/images/hero/`
Fotografías de gran impacto visual en alta resolución para el slider principal de la página de Inicio.
- **`hero_sag_mill.jpg`**: Foto de molino SAG / Planta concentradora (`1920x1080 px` o `16:9`, max 500KB).
- **`hero_welder.jpg`**: Foto de soldador homologado / Trabajo metalmecánico (`1920x1080 px`).
- **`hero_flotation_cells.jpg`**: Foto de celdas de flotación / Overhaul (`1920x1080 px`).
- **`hero_heavy_machinery.jpg`**: Foto de movimiento de tierras / Maquinaria pesada (`1920x1080 px`).

---

### 3. `public/images/nosotros/`
Imágenes corporativas para la página **Nosotros**.
- **`equipo_humano.jpg`**: Fotografía del personal técnico en campo con EPP completo (`1200x800 px`).
- **`instalaciones_pasco.jpg`**: Foto de la sede operativa o taller en Cerro de Pasco (`1200x800 px`).
- **`instalaciones_lima.jpg`**: Foto de la sede central en Lima (`1200x800 px`).
- **`fundador_gerencia.jpg`**: Fotografía de la dirección ejecutiva (`800x800 px`).

---

### 4. `public/images/servicios/`
Fotografías reales representativas de cada uno de los 5 servicios ofrecidos.
- **`servicio_autocad_3d.jpg`**: Planos 3D e ingeniería de detalle (`800x600 px`).
- **`servicio_metalmecanica.jpg`**: Fabricación de estructuras, soldaduras WPS/PQR (`800x600 px`).
- **`servicio_montaje.jpg`**: Montaje en estructura de gran tonelaje (`800x600 px`).
- **`servicio_overhaul.jpg`**: Mantenimiento en parada de planta PDP (`800x600 px`).
- **`servicio_obras_civiles.jpg`**: Cimentaciones y remediación ambiental (`800x600 px`).

---

### 5. `public/images/acreditaciones/`
Certificados, sellos de homologación y resoluciones ministeriales.
- **`bureau_veritas_cert.png`**: Constancia de Homologación Bureau Veritas (87.81%) (`600x800 px` o PNG).
- **`minem_resolucion.png`**: Sello / Documento R.D. 0288-2021 del MINEM (`600x800 px`).
- **`iso_9001.png`**, **`iso_14001.png`**, **`iso_45001.png`**: Logos de certificaciones ISO.

---

### 6. `public/images/proyectos/`
Fotografías de proyectos reales ejecutados en minas e industrias.
- **`proyecto_1.jpg`**, **`proyecto_2.jpg`**, **`proyecto_3.jpg`**: Fotos de trabajos realizados en campo (`1000x667 px`).

---

### 7. `public/images/clientes/`
Logotipos de empresas mineras y clientes corporativos para el carrusel de marcas.
- **`cliente_volcan.png`**, **`cliente_chinalco.png`**, **`cliente_bravus.png`**, etc. (Formatos PNG transparente, `300x120 px`).

---

## ⚡ Recomendaciones para Optimización Web
1. **Formatos preferidos**: Usa `.webp` o `.jpg` comprimido para fotos, y `.png` o `.svg` para logotipos e insignias con transparencia.
2. **Compresión**: Te recomendamos pasar tus fotos por herramientas gratuitas como [TinyPNG.com](https://tinypng.com/) antes de subirlas. Esto garantiza que la web cargue ultrarrápida.
3. **Mismo nombre de archivo**: Si reemplazas un archivo usando exactamente el mismo nombre (ejemplo `hero_sag_mill.jpg`), la web se actualizará automáticamente sin necesidad de modificar el código.
