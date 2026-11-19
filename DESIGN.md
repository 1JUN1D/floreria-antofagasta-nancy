---
name: Florería Afrodita
description: La Costanera al atardecer — campo de color que sigue la hora de Antofagasta, el objeto en grande y el pedido a un toque.
colors:
  sea-day: "#12476E"
  sunset: "#9E2A5E"
  night: "#0C2238"
  field-step-day: "#1B5784"
  foam: "#F5F8FB"
  sky: "#CFDFEE"
  sky-step: "#E3EDF6"
  rose: "#E6C9C7"
  ink: "#0F2E4C"
  muted: "#3B5670"
  sun: "#F6A65B"
  sun-hover: "#F8B675"
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
    backgroundColor: "{colors.sun}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "0 24px"
    height: "52px"
  button-order-hover:
    backgroundColor: "{colors.sun-hover}"
  button-on-field:
    backgroundColor: "{colors.field-step-day}"
    textColor: "{colors.on-field}"
    rounded: "{rounded.none}"
    height: "52px"
  chip-filter:
    backgroundColor: "{colors.sky-step}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    height: "44px"
  chip-filter-active:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.on-field}"
  nav-bar:
    backgroundColor: "{colors.sea-day}"
    textColor: "{colors.on-field}"
    height: "72px"
---

# Design System: Florería Afrodita

## Overview

**North star: La Costanera al atardecer.** Afrodita es una florería en Carlos Condell 2526, Antofagasta, abierta las 24 horas. El sistema cuenta eso con luz: los campos de color grandes (encabezado, navegación, zonas, pie) toman el color del cielo sobre el Pacífico a la hora real de Antofagasta — azul de mediodía, fucsia de atardecer (el del ramo del video), azul de noche — mediante `data-luz` en `<html>` (`dia` 7–18 h, `atardecer` 18–21 h, `noche` 21–7 h). Entre esos campos, el suelo es blanco espuma y el celeste exacto del fondo de estudio de las fotos de producto, para que cada arreglo se funda con la página.

La composición es "el objeto en grande": una sola cosa real ocupa la escena (el video del ramo frente al mar, una foto de producto) y se corta contra un borde. El texto es poco, grande y apretado. El rechazo explícito: la florería verde y rosada con esquinas suaves, sombras, serif fina y tarjetas de íconos.

La estructura semántica del HTML del sitio es inmutable (decisión del cliente): el sistema vive en CSS, contenido y datos.

## Colors

- **Campo de la hora** (`--field`): `sea-day` #12476E de día, `sunset` #9E2A5E al atardecer, `night` #0C2238 de noche. Texto blanco encima (contraste ≥7:1 en los tres). `--field-2` es un paso más claro para botones secundarios sobre el campo.
- **Suelo**: `foam` #F5F8FB para secciones de lectura; `sky` #CFDFEE y `sky-step` #E3EDF6 como pasos de tono (franjas, chips, búsqueda). Las secciones de cierre usan el celeste exacto de la foto que llevan (#CDE1EC para la foto 13, #CCE0F0 para la 17).
- **Línea fúnebre**: `rose` #E6C9C7 detrás de sus fotos.
- **Tinta**: `ink` #0F2E4C para todo texto corrido; `muted` #3B5670 solo para notas secundarias (código de producto, conteo).
- **Acento**: `sun` (damasco) #F6A65B, con texto `ink`. Solo en la acción de pedir (WhatsApp, "Pedir por WhatsApp", llamar desde el pie), en el anillo de foco y en la selección de texto. Nada más se pinta damasco.

## Typography

Una sola familia, **Bricolage Grotesque**, autoalojada (`/assets/fonts/bricolage-latin.woff2`, variable 200–800, ancho 75–100%). Display y títulos de sección en `--t-xl` con ancho 84–86% y tracking −0.035em; títulos de fila y de tarjeta un paso abajo en `--t-l`; nombres de producto `--t-m`; lead 18–20px; cuerpo 17px; notas 14px. Precios y teléfonos en cifras tabulares. Todo titular cabe en dos líneas en 1440, 768 y 390. Sin mayúsculas espaciadas, sin itálicas, sin monoespaciada.

## Layout

Un par de márgenes iguales (`--m`, 16–32px) en todo el sitio; las fotos y el video llegan al borde. Rejilla de 12 columnas: filas de servicio con imagen 4:3 en columnas 1–5 y texto de la 7 a la 12; encabezados de categoría con foto a la derecha en ~48% del ancho. En el inicio el video ocupa 7/12 a la derecha y en escritorio cae ~9vw por debajo del campo sobre la franja de la hora. Separación entre secciones 96–168px. Catálogo en rejilla auto-fill de columnas ≥300px; en celular, dos columnas y la descripción se oculta. Cortes en 1100, 900 y 600px; en ≤900 la navegación pasa a menú.

## Elevation & Depth

Plano. Las superficies se separan por pasos de tono (campo, espuma, cielo), nunca por líneas ni sombras. Solo lleva sombra lo que flota de verdad: el lightbox del catálogo, el menú desplegado en celular y el botón flotante de WhatsApp al pasar el cursor.

## Shapes

Esquinas cuadradas en todo: botones, chips, imágenes, campos de búsqueda, pie. Sin bordes de 1px decorativos, sin máscaras orgánicas, sin festones.

## Components

- **Botón de pedido**: relleno damasco, texto tinta, 52px de alto (60px en cierres), icono de WhatsApp a la izquierda; hover un tono más claro; press escala 0.98.
- **Botón sobre campo**: relleno `--field-2`, texto blanco; hover invierte a blanco con tinta.
- **Enlace de acción**: texto subrayado 2px con offset 6px; hover cambia el subrayado a damasco.
- **Franja de la hora**: ocupa el espacio `[data-super-ofertas]`; "Son las HH:MM en Antofagasta y estamos abiertos" + tres ocasiones (Amor, Cumpleaños, Condolencias) que abren WhatsApp con el mensaje escrito.
- **Tarjeta de producto**: foto cuadrada sobre su cielo (o rosa en fúnebres), código, nombre, descripción, precio grande tabular y botón de pedido; sin borde ni sombra.
- **Chips de filtro**: relleno `sky-step`; activo en tinta con texto blanco; en celular hacen scroll horizontal.
- **Botón flotante de WhatsApp**: cuadrado damasco de 60px, se oculta mientras está a la vista el encabezado o la franja de la hora.
- **Movimiento**: entradas por sección (título, texto, imagen; 70ms entre ellos, subiendo 24px, una vez), deriva lenta del video y de las fotos de encabezado, transición de 1.6s del campo al cambiar la luz; todo se apaga con `prefers-reduced-motion`.

## Do's and Don'ts

- Do: tomar los colores del campo de la hora y del cielo de las fotos; usar las fotos propias de Afrodita grandes y cortadas por un borde.
- Do: escribir solo lo que Afrodita vende o confirma; lo que se hace a pedido se dice "a pedido" o "consulta por WhatsApp".
- Don't: usar damasco fuera de la acción de pedir.
- Don't: gradientes, vidrio, sombras en reposo, esquinas redondeadas, etiquetas pequeñas sobre títulos, numeración 01/02/03, emoji como íconos.
- Don't: inventar reseñas, calificaciones, descuentos ni cifras.
