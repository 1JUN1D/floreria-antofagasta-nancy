/* ============================================================
   CATÁLOGO VISIBLE + FRANJA "ABIERTO AHORA" — Florería Afrodita
   - VISIBLES define qué productos se muestran en el catálogo y en
     las landings, con su precio actual en CLP. Para ocultar uno,
     se borra su código; para cambiar un precio, se edita aquí.
   - No hay campaña de descuento activa: no se muestra precio
     tachado ni contador. Para volver a activar una oferta se pone
     una fecha futura en "fin" y un recargo en "recargoAntes".
   - Donde antes iba el banner de ofertas ([data-super-ofertas])
     ahora va la franja con la hora real de Antofagasta, el aviso
     de atención 24 horas y tres ocasiones que abren WhatsApp con
     el mensaje ya escrito.
   ============================================================ */
window.SUPER_OFERTAS = {
    fin: 0,                 // sin oferta activa
    recargoAntes: 1,
    textoFin: '',
    whatsapp: '56950163949',
    // código: precio (CLP)
    visibles: {
        '001': 31250, '002': 18750, '003': 47500, '004': 56250, '005': 43750,
        '006': 35000, '007': 30000, '008': 43750, '009': 43750, '010': 60000,
        '011': 81250, '012': 52500, '013': 75000, '014': 35000, '015': 43750,
        '016': 52500, '017': 45000, '018': 68750, '019': 78750, '020': 81250,
        '021': 85000, '022': 85000, '023': 87500,
        '024': 168750, '025': 225000, '026': 172500, '027': 93750, '028': 81250,
        '029': 81250, '030': 81250, '031': 50000,
        // Peluches
        'P01': 70000, 'P02': 70000, 'P03': 50000, 'P04': 15000, 'P05': 70000,
        'P06': 30000, 'P07': 30000, 'P08': 30000, 'P09': 30000, 'P10': 30000,
        'P11': 70000, 'P12': 30000, 'P13': 30000, 'P14': 8000, 'P15': 10000,
        'P16': 15000, 'P17': 15000, 'P18': 15000, 'P19': 15000, 'P20': 15000,
        'P21': 15000, 'P23': 30000, 'P24': 30000, 'P25': 30000, 'P26': 15000,
        'P28': 45000, 'P29': 30000, 'P30': 30000, 'P31': 15000, 'P32': 30000,
        'P33': 20000, 'P34': 8000, 'P35': 8000, 'P36': 8000, 'P37': 15000,
        'P38': 15000, 'P39': 30000, 'P40': 35000, 'P41': 35000, 'P42': 10000,
        'P43': 10000, 'P44': 10000, 'P45': 10000, 'P46': 10000, 'P47': 10000,
        'P48': 10000, 'P49': 10000, 'P50': 30000, 'P51': 30000, 'P52': 30000,
        'P53': 30000, 'P54': 20000, 'P55': 35000, 'P56': 30000, 'P57': 20000,
        'P58': 20000, 'P59': 30000
    }
};

function superOfertasActiva() {
    return Date.now() < window.SUPER_OFERTAS.fin;
}

/* Devuelve solo los productos visibles, con su precio y las etiquetas
   de rango de precio al día. */
function superOfertasAplicar(lista) {
    var cfg = window.SUPER_OFERTAS;
    var activa = superOfertasActiva();
    return lista.filter(function (p) {
        return Object.prototype.hasOwnProperty.call(cfg.visibles, p.code);
    }).map(function (p) {
        var precio = cfg.visibles[p.code];
        var cats = (p.categories || []).filter(function (c) {
            return c !== 'semana' && c.indexOf('precio-') !== 0;
        });
        cats.push(precio <= 30000 ? 'precio-bajo' : (precio <= 80000 ? 'precio-medio' : 'precio-alto'));
        var q = Object.assign({}, p, {
            price: precio,
            categories: cats,
            semana: false,
            funebrePromo: false,
            peluche: !!p.peluche,
            promo: activa,
            superOferta: activa
        });
        delete q.originalPrice;
        if (activa && cfg.recargoAntes > 1) q.originalPrice = Math.round(precio * cfg.recargoAntes / 10) * 10;
        return q;
    });
}

/* Oculta los botones de filtro que no tienen ningún producto visible */
function superOfertasAjustarFiltros(lista) {
    document.querySelectorAll('.filter-btn').forEach(function (btn) {
        var f = btn.getAttribute('data-filter');
        if (!f || f === 'todos') return;
        var hay = lista.some(function (p) { return p.categories && p.categories.indexOf(f) !== -1; });
        btn.style.display = hay ? '' : 'none';
    });
}

/* ---------- La hora en Antofagasta ---------- */
function afroditaHora() {
    var d = new Date();
    try {
        var parts = new Intl.DateTimeFormat('es-CL', {
            timeZone: 'America/Santiago', hour: '2-digit', minute: '2-digit', hour12: false
        }).formatToParts(d);
        var h = '', m = '';
        parts.forEach(function (x) { if (x.type === 'hour') h = x.value; if (x.type === 'minute') m = x.value; });
        if (h === '24') h = '00';
        return { h: parseInt(h, 10), texto: h + ':' + m };
    } catch (e) {
        var hh = d.getHours(), mm = d.getMinutes();
        return { h: hh, texto: (hh < 10 ? '0' : '') + hh + ':' + (mm < 10 ? '0' : '') + mm };
    }
}

/* Tramo de luz: día, atardecer o noche. Lo usan los campos de color. */
function afroditaTramo(h) {
    if (h >= 7 && h < 18) return 'dia';
    if (h >= 18 && h < 21) return 'atardecer';
    return 'noche';
}

function afroditaAplicarLuz() {
    var t = afroditaHora();
    document.documentElement.setAttribute('data-luz', afroditaTramo(t.h));
    return t;
}

var AFRODITA_OCASIONES = [
    { id: 'amor', label: 'Amor', msg: 'Hola Afrodita, quiero un ramo para mi pareja. ¿Qué tienen disponible hoy?' },
    { id: 'cumple', label: 'Cumpleaños', msg: 'Hola Afrodita, quiero mandar flores de cumpleaños. ¿Qué tienen disponible hoy?' },
    { id: 'condolencias', label: 'Condolencias', msg: 'Hola Afrodita, necesito un arreglo de condolencias. ¿Me pueden ayudar?' }
];

function afroditaFranjaHTML(ctaHref, ctaTexto) {
    var wa = window.SUPER_OFERTAS.whatsapp;
    var botones = AFRODITA_OCASIONES.map(function (o) {
        return '<a class="so-ocasion" data-ocasion="' + o.id + '" href="https://wa.me/' + wa + '?text=' +
               encodeURIComponent(o.msg) + '" target="_blank" rel="noopener">' + o.label + '</a>';
    }).join('');
    return '<div class="so-banner so-abierto" role="region" aria-label="Atención las 24 horas">' +
             '<div class="so-text">' +
               '<h2 class="so-title">Son las <time class="so-hora" data-so-hora>--:--</time> en Antofagasta y estamos abiertos</h2>' +
               '<p class="so-sub">Pedidos las 24 horas en Carlos Condell 2526, local 1. Elige la ocasión y te respondemos por WhatsApp.</p>' +
             '</div>' +
             '<div class="so-acciones">' + botones +
               (ctaHref ? '<a class="so-cta" href="' + ctaHref + '">' + (ctaTexto || 'Ver arreglos') + '</a>' : '') +
             '</div>' +
           '</div>';
}

var superOfertasTimer = null;
function superOfertasIniciar() {
    afroditaAplicarLuz();
    var slots = document.querySelectorAll('[data-super-ofertas]');
    if (!slots.length) return;
    slots.forEach(function (s) {
        var texto = s.getAttribute('data-cta-text');
        if (!texto || /oferta/i.test(texto)) texto = 'Ver arreglos y precios';
        s.innerHTML = afroditaFranjaHTML(s.getAttribute('data-cta-href'), texto);
    });
    // Conversión de Google Ads al abrir WhatsApp desde la franja
    document.querySelectorAll('.so-ocasion').forEach(function (a) {
        a.addEventListener('click', function () {
            if (typeof gtag_report_conversion === 'function') {
                try { gtag_report_conversion(); } catch (e) {}
            }
        });
    });
    function tick() {
        var t = afroditaAplicarLuz();
        document.querySelectorAll('[data-so-hora]').forEach(function (el) {
            if (el.textContent !== t.texto) el.textContent = t.texto;
        });
    }
    tick();
    superOfertasTimer = setInterval(tick, 15000);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', superOfertasIniciar);
} else {
    superOfertasIniciar();
}
