// =============================================
// script.js - Interactividad del portafolio
// Edward Barrios
// =============================================

// --- 1. Mensaje de bienvenida al cargar la página ---
window.addEventListener('load', function () {
    var bienvenida = document.getElementById('bienvenida');
    if (bienvenida) {
        // Mostrar el banner de bienvenida
        bienvenida.style.display = 'block';

        // Ocultarlo automáticamente después de 3 segundos
        setTimeout(function () {
            bienvenida.style.display = 'none';
        }, 3000);
    }
});

// --- 2. Botón que cambia el texto del párrafo "Sobre mí" ---
var btnCambiarTexto = document.getElementById('btn-cambiar-texto');
var textoDinamico = document.getElementById('texto-dinamico');
var textoAlternado = false; // controla cuál texto mostrar

if (btnCambiarTexto && textoDinamico) {
    btnCambiarTexto.addEventListener('click', function () {
        if (!textoAlternado) {
            // Cambiar al texto alternativo
            textoDinamico.textContent = '🎹 Combino el desarrollo de software con la música. Me apasiona crear proyectos donde el código y el arte se encuentran.';
            btnCambiarTexto.textContent = 'Volver al texto original';
            textoAlternado = true;
        } else {
            // Volver al texto original
            textoDinamico.textContent = 'Soy estudiante de desarrollo de software, pianista y productor musical de la ciudad de Barranquilla.';
            btnCambiarTexto.textContent = 'Saber más sobre mí';
            textoAlternado = false;
        }
    });
}

// --- 3. Botón que muestra u oculta contenido extra ---
var btnToggle = document.getElementById('btn-toggle');
var infoExtra = document.getElementById('info-extra');
var visible = false; // controla si el contenido está visible

if (btnToggle && infoExtra) {
    btnToggle.addEventListener('click', function () {
        if (!visible) {
            // Mostrar el contenido extra
            infoExtra.style.display = 'block';
            btnToggle.textContent = 'Ocultar dato extra';
            visible = true;
        } else {
            // Ocultar el contenido extra
            infoExtra.style.display = 'none';
            btnToggle.textContent = 'Mostrar dato extra';
            visible = false;
        }
    });
}
