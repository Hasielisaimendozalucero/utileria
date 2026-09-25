

function validarCorreo(correo) {
    const orden = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return orden.test(correo);
}

function soloLetras(texto) {
    const letras = /^[A-Za-zñÑáéíóúÁÉÍÓÚ\s]+$/;
    return letras.test(texto);
}

function validarLongitud(numero, maxLongitud) {
    const textoEnNumeros = String(numero);
    return textoEnNumeros.length <= maxLongitud;
}

function calcularEdad(fechaNacimiento) {
    const hoy = new Date();
    const fechaNac = new Date(fechaNacimiento);   
    let edad = hoy.getFullYear() - fechaNac.getFullYear();   
    const diferenciaMeses = hoy.getMonth() - fechaNac.getMonth();
    
    if (diferenciaMeses < 0 || (diferenciaMeses === 0 && hoy.getDate() < fechaNac.getDate())) {
        edad--;
    }
    return edad;
}

function esMayorDeEdad(fechaNacimiento) {
    const edad = calcularEdad(fechaNacimiento); 
    return edad >= 18;
}

function validarPassword(password) {
    const patron = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&._\-#])[A-Za-z\d@$!\%*?&._\-#]{8,}$/;
    return patron.test(password);
}


function capitalizarTexto(texto) {
    if (typeof texto !== 'string') return '';
    const limpio = texto.trim().replace(/\s+/g, ' ');
    if (limpio.length === 0) return '';
    return limpio.charAt(0).toUpperCase() + limpio.slice(1).toLowerCase();
}

function generarIdentificador(nombre, correo, password, fechaNacimiento) {
    if (!nombre || !correo || !password || !fechaNacimiento) return 'ID-INVALIDO';

    const charNombre = nombre.trim().charAt(0).toUpperCase();
    const charCorreo = correo.trim().charAt(0).toUpperCase();
    const charPassword = password.trim().charAt(0).toUpperCase();
    
    const anio = new Date(fechaNacimiento).getFullYear();

    return `ID-${charNombre}${charCorreo}${charPassword}-${anio}`;
}