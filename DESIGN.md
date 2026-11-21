---
name: Florería Afrodita
description: Vino tinto pastel y dorado — campo de color que sigue la hora de Antofagasta, el objeto en grande y el pedido a un toque.
colors:
  wine-day: "#94485E"
  wine-dusk: "#7C3149"
  wine-night: "#4B1D2C"
  field-step-day: "#A65A70"
  cream-white: "#FCF8F6"
  blush: "#F2E1E5"
  blush-step: "#F8EDEF"
  rose: "#E6C9C7"
  ink: "#3F1724"
  muted: "#6E4552"
  gold: "#D6B56E"
  gold-hover: "#E0C487"
  on-field: "#FFFFFF"
typography:
  display:
    fontFamily: "Bricolage Grotesque, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(44px, 5.6vw, 92px)"
    fontWeight: 750
    lineHeight: 0.94
    letterSpacing: "-0.035em"
    fontVariation: "'wdth' 86"
  headline:
    fontFamily: "Bricolage Grotesque, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(30px, 3.4vw, 54px)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Bricolage Grotesque, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(21px, 1.7vw, 26px)"
    fontWeight: 700
    lineHeight: 1.12
    letterSpacing: "-0.015em"
  lead:
    fontFamily: "Bricolage Grotesque, Segoe UI, system-ui, sans-serif"
    fontSize: "clamp(18px, 1.4vw, 20px)"
    fontWeight: 400
    lineHeight: 1.55
  body:
    fontFamily: "Bricolage Grotesque, Segoe UI, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "Bricolage Grotesque, Segoe UI, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: 1.4
rounded:
  none: "0px"
spacing:
  margin: "clamp(16px, 2.4vw, 32px)"
  section: "clamp(96px, 11vw, 168px)"
  nav: "72px"
components:
  button-order:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0 24px"
    height: "52px"
  button-order-hover:
    backgroundColor: "{colors.gold-hover}"
  button-on-field:
    backgroundColor: "{colors.field-step-day}"
    textColor: "{colors.on-field}"
    rounded: "{rounded.none}"
    height: "52px"
  chip-filter:
    backgroundColor: "{colors.blush-step}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    height: "44px"
  chip-filter-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-field}"
  nav-bar:
    backgroundColor: "{colors.wine-day}"
    textColor: "{colors.on-field}"
    height: "72px"
---

# Design System: Florería Afrodita

## Overview

**North star: La Costanera al atardecer, en vino tinto pastel y dorado.** Afrodita es una florería en Carlos Condell 2526, Antofagasta, abierta las 24 horas. El sistema cuenta eso con luz: los campos de color grandes (encabezado, navegación, zonas, pie) cambian de tono de vino según la hora real de Antofagasta — vino pastel de día, vino profundo al atardecer, vino casi negro de noche — mediante `data-luz` en `<html>` (`dia` 7–18 h, `atardecer` 18–21 h, `noche` 21–7 h). Entre esos campos, el suelo es blanco cálido y rosa vino pastel.

La composición es "el objeto en grande": una sola cosa real ocupa la escena (el video del ramo frente al mar, una foto de producto) y se corta contra un borde. El texto es poco, grande y apretado. El rechazo explícito: la florería verde y rosada con esquinas suaves, sombras, serif fina y tarjetas de íconos.

La estructura semántica del HTML del sitio es inmutable (decisión del cliente): el sistema vive en CSS, contenido y datos.

## Colors

Paleta de marca pedida por el cliente (nov 2026): **vino tinto pastel y dorado**, sobre la estructura de "La Costanera al atardecer".

- **Campo de la hora** (`--field`): `wine-day` #94485E de día, `wine-dusk` #7C3149 al atardecer, `wine-night` #4B1D2C de noche. Texto blanco encima (contraste 6,3:1, 8,8:1 y 13,9:1). `--field-2` es un paso más claro para botones secundarios sobre el campo.
- **Suelo**: `cream-white` #FCF8F6 para secciones de lectura; `blush` #F2E1E5 y `blush-step` #F8EDEF (rosa vino pastel) como pasos de tono en franjas, chips, búsqueda y cierres.
- **Línea fúnebre**: `rose` #E6C9C7 detrás de sus fotos.
- **Tinta**: `ink` #3F1724 (vino casi negro) para todo texto corrido; `muted` #6E4552 solo para notas secundarias.
- **Dorado**: `gold` #D6B56E con texto `ink` (7,9:1). En la acción de pedir (WhatsApp, "Pedir por WhatsApp"), el anillo de foco, la selección . Nada más se pinta dorado.

Las fotos de producto conservan su fondo celeste de estudio; sobre el rosa se leen como recortes cuadrados.

## Typography

Una sola familia, **Bricolage Grotesque**, autoalojada (`/assets/fonts/bricolage-latin.woff2`, variable 200–800, ancho 75–100%). Display y títulos de sección en `--t-xl` con ancho 84–86% y tracking −0.035em; títulos de fila y de tarjeta un paso abajo en `--t-l`; nombres de producto `--t-m`; lead 18–20px; cuerpo 17px; notas 14px. Precios y teléfonos en cifras tabulares. Todo titular cabe en dos líneas en 1440, 768 y 390. Sin mayúsculas espaciadas, sin itálicas, sin monoespaciada.

## Layout

Un par de márgenes iguales (`--m`, 16–32px) en todo el sitio; las fotos y el video llegan al borde. Rejilla de 12 columnas: filas de servicio con imagen 4:3 en columnas 1–5 y texto de la 7 a la 12; encabezados de categoría con foto a la derecha en ~48% del ancho. En el inicio el video ocupa 7/12 a la derecha y en escritorio cae ~9vw por debajo del campo sobre la franja de la hora. Separación entre secciones 96–168px. Catálogo en rejilla auto-fill de columnas ≥300px; en celular, dos columnas y la descripción se oculta. Cortes en 1100, 900 y 600px; en ≤900 la navegación pasa a menú.

## Elevation & Depth

Plano. Las superficies se separan por pasos de tono (campo, espuma, cielo), nunca por líneas ni sombras. Solo lleva sombra lo que flota de verdad: el lightbox del catálogo, el menú desplegado en celular y el botón flotante de WhatsApp al pasar el cursor.

## Shapes

Esquinas cuadradas en todo: botones, chips, imágenes, campos de búsqueda, pie. Sin bordes de 1px decorativos, sin máscaras orgánicas, sin festones.

## Components

- **Logo**: `assets/logo.png` es el original del cliente (aro y texto negros, tulipán vino #700010, fondo transparente). Sobre fondos oscuros (menú, encabezado de landings, favicon) se usa `assets/logo.webp`, el mismo logo con el interior del aro relleno en blanco cálido; sobre fondos claros (footer) se usa `assets/logo-claro.webp`, sin relleno. Nunca se pone el logo transparente directo sobre el vino.

- **Botón de pedido**: relleno dorado, texto tinta, 52px de alto (60px en cierres), icono de WhatsApp a la izquierda; hover un tono más claro; press escala 0.98.
- **Botón sobre campo**: relleno `--field-2`, texto blanco; hover invierte a blanco con tinta.
- **Enlace de acción**: texto subrayado 2px con offset 6px; hover cambia el subrayado a dorado.
- **Franja de la hora**: ocupa el espacio `[data-super-ofertas]`; "Son las HH:MM en Antofagasta y estamos abiertos" + tres ocasiones (Amor, Cumpleaños, Condolencias) que abren WhatsApp con el mensaje escrito.
- **Tarjeta de producto**: foto cuadrada sobre su cielo (o rosa en fúnebres), código, nombre, descripción, precio grande tabular y botón de pedido; sin borde ni sombra.
- **Chips de filtro**: relleno `blush-step`; activo en tinta con texto blanco; en celular hacen scroll horizontal.
- **Botón flotante de WhatsApp**: cuadrado dorado de 60px, se oculta mientras está a la vista el encabezado o la franja de la hora.
- **Movimiento**: entradas por sección (título, texto, imagen; 70ms entre ellos, subiendo 24px, una vez), deriva lenta del video y de las fotos de encabezado, transición de 1.6s del campo al cambiar la luz; todo se apaga con `prefers-reduced-motion`.

## Do's and Don'ts

- Do: usar el vino del campo de la hora y el rosa pastel como suelo; usar las fotos propias de Afrodita grandes y cortadas por un borde.
- Do: escribir solo lo que Afrodita vende o confirma; lo que se hace a pedido se dice "a pedido" o "consulta por WhatsApp".
- Don't: usar dorado fuera de la acción de pedir.
- Don't: gradientes, vidrio, sombras en reposo, esquinas redondeadas, etiquetas pequeñas sobre títulos, numeración 01/02/03, emoji como íconos.
- Don't: inventar reseñas, calificaciones, descuentos ni cifras.
