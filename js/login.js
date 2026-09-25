document.addEventListener('DOMContentLoaded', () => {
    const formularioLogin = document.getElementById('formularioLogin');
    const modalExito = document.getElementById('modalLoginExito');
    const btnCerrarModalLogin = document.getElementById('btnCerrarModalLogin');

    function mostrarError(idElemento, mensaje) {
        const errorEl = document.getElementById(idElemento);
        errorEl.textContent = mensaje;
        errorEl.style.display = 'block';
    }

    function limpiarErrores() {
        const errores = document.querySelectorAll('.error-message');
        errores.forEach(el => {
            el.textContent = '';
            el.style.display = 'none';
        });
    }

    formularioLogin.addEventListener('submit', (e) => {
        e.preventDefault();
        limpiarErrores();

        const correoVal = document.getElementById('loginCorreo').value;
        const passwordVal = document.getElementById('loginPassword').value;

        let esValido = true;

        if (!validarCorreo(correoVal)) {
            mostrarError('errorLoginCorreo', 'Ingresa un correo electrónico válido (ej. usuario@dominio.com).');
            esValido = false;
        }

        if (!validarPassword(passwordVal)) {
            mostrarError('errorLoginPassword', 'La contraseña debe incluir mayúscula, minúscula, número, carácter especial y mínimo 8 caracteres.');
            esValido = false;
        }

        if (!esValido) return;

        modalExito.classList.add('active');
    });

    btnCerrarModalLogin.addEventListener('click', () => {
        modalExito.classList.remove('active');
        formularioLogin.reset();
    });
});