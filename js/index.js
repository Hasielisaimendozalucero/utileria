document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('formularioRegistro');
    const modal = document.getElementById('modalEdad');
    const btnCerrarModal = document.getElementById('btnCerrarModal');

    const mensajeModal = document.getElementById('mensajeModal');
    const identificadorModal = document.getElementById('identificadorModal');

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

    formulario.addEventListener('submit', (e) => {
        e.preventDefault();
        limpiarErrores();

        const nombreInput = document.getElementById('nombre').value;
        const correoInput = document.getElementById('correo').value;
        const passwordInput = document.getElementById('password').value;
        const fechaNacimientoInput = document.getElementById('fechaNacimiento').value;
        const telefonoInput = document.getElementById('numeroTelefono').value;

        let esValido = true;

        if (!nombreInput.trim() || !soloLetras(nombreInput)) {
            mostrarError('errorNombre', 'El nombre solo debe contener letras y espacios.');
            esValido = false;
        }

        if (!validarCorreo(correoInput)) {
            mostrarError('errorCorreo', 'Ingresa un correo electrónico válido (ej. usuario@dominio.com).');
            esValido = false;
        }

        if (!validarPassword(passwordInput)) {
            mostrarError('errorPassword', 'Mínimo 8 caracteres, 1 mayúscula, 1 minúscula, 1 número y 1 carácter especial.');
            esValido = false;
        }

        if (!fechaNacimientoInput) {
            mostrarError('errorFecha', 'Por favor selecciona tu fecha de nacimiento.');
            esValido = false;
        }

        if (!telefonoInput.trim() || !validarLongitud(telefonoInput, 10)) {
            mostrarError('errorTelefono', 'El número telefónico no puede estar vacío ni superar los 10 dígitos.');
            esValido = false;
        }

        if (!esValido) return;

        const nombreCapitalizado = capitalizarTexto(nombreInput);
        const edad = calcularEdad(fechaNacimientoInput);
        const esMayor = esMayorDeEdad(fechaNacimientoInput);
        const identificador = generarIdentificador(nombreCapitalizado, correoInput, passwordInput, fechaNacimientoInput);

        mensajeModal.textContent = `¡Hola, ${nombreCapitalizado}! Tienes ${edad} años y ${esMayor ? 'eres mayor de edad' : 'eres menor de edad'}.`;
        identificadorModal.textContent = `Tu identificador generado es: ${identificador}`;

        modal.classList.add('active');
    });

    btnCerrarModal.addEventListener('click', () => {
        modal.classList.remove('active');
    });
});