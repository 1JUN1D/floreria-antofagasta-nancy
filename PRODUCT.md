# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users
Personas en Antofagasta (Chile) que necesitan regalar flores hoy o mandar condolencias: llegan desde Google (búsqueda local y Google Ads a las landings) casi siempre en el celular, con prisa, buscando ver arreglos con su precio y pedir por WhatsApp sin trámites. Un segundo público pide arreglos fúnebres para un velorio o funeral, con urgencia y en un momento delicado.

## Product Purpose
Sitio de Florería Afrodita (Antofagasta): mostrar el catálogo real con precios en CLP y convertir la visita en un pedido por WhatsApp o una llamada. Éxito = el visitante elige un arreglo y abre WhatsApp con el producto ya escrito en el mensaje.

## Positioning
Local físico en Carlos Condell 2526, local 1, Antofagasta, atendiendo las 24 horas, con un catálogo propio de 23 arreglos fotografiados (ramos, regalos y línea fúnebre) y precio publicado en cada uno.

## Operating Context
- Pedido por WhatsApp y teléfono: +56 9 5016 3949 (el mismo número para ambos).
- Dominio: floreriaafrodita.dondeseria.com (red dondeseria.com de Líderes Locales, sitio estático en GitHub Pages).
- Tráfico: Google Ads (etiqueta AW-18163228199 con eventos de conversión en index, catálogo y landings) y SEO local.
- Despacho a domicilio en Antofagasta.

## Capabilities and Constraints
- HTML/CSS/JS estático; componentes (navbar, footer, contacto, zonas) se cargan por fetch desde /components.
- La estructura semántica de las páginas es inmutable por decisión del usuario: no se cambian etiquetas, jerarquía de títulos, secciones, URLs, schema ni etiquetas de Google Ads. El rediseño trabaja sobre estilos, datos y contenido del negocio.
- Alcance del rediseño (nov 2026): index.html, catalogo.html, las 5 páginas hub de categoría (tienda de regalos, entrega de flores, flores secas, canastas de regalos, florería mayorista) y la carpeta /landing. Las 20 páginas de servicio solo reciben los datos del negocio.
- Precios: los 23 productos con su precio base +25% (pedido del usuario). Sin campaña de descuento activa: no se muestra precio tachado ni contador.
- Horario: 24 horas (confirmado por el usuario). Corte de entrega el mismo día: no confirmado.

## Brand Commitments
- Nombre: Florería Afrodita. No hay logo ni colores de marca obligatorios (el usuario delegó la identidad).
- El video assets/wallpaper.mp4 se conserva en el inicio (el usuario quiere conservarlo o reajustarlo).
- Variante de idioma: español de Chile, CLP.

## Evidence on Hand
- 23 fotos de producto propias (assets/1–23): 1–17 ramos y regalos sobre fondo celeste, 18–23 arreglos fúnebres sobre fondo rosado.
- 12 fotos de clientes recibiendo arreglos (assets/cliente1–12.webp) heredadas del sitio anterior: no confirmado que sean de Afrodita.
- Video assets/wallpaper.mp4.
- NO existen: logo, reseñas de Google de Afrodita, cifras de clientes, años del negocio, fotos del local. El schema anterior traía un aggregateRating 4,9/127 de otra florería: no es de Afrodita y no se usa.

## Product Principles
- Precio visible y pedido en un toque: cada arreglo lleva su precio real y abre WhatsApp con el producto escrito.
- La línea fúnebre se trata con sobriedad y aparte de lo celebratorio.
- Nada inventado: ni reseñas, ni cifras, ni descuentos que el negocio no definió.
- Rápido en un celular de gama media con datos móviles.

## Accessibility & Inclusion
WCAG AA: contraste 4.5:1, foco visible, objetivos táctiles de 44 px, prefers-reduced-motion.
