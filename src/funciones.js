    export default function validarAcceso() {
        const USUARIO = "admin";
        const CONTRASENA = "12345";
        const MAX_INTENTOS = 3;
        for (let i = 1; i <= MAX_INTENTOS; i++) {
            let usuarioIngresado = prompt("Ingrese su usuario:");
            let contrasenaIngresada = prompt("Ingrese su contraseña:");
            
            if (usuarioIngresado === USUARIO && contrasenaIngresada === CONTRASENA) {
                alert (`¡Bienvenido!`);
                i=MAX_INTENTOS;
            } else {
                alert(`Usuario o Cantraseña Incorreta ❌ Intento ${i} de ${MAX_INTENTOS}`);
                if (i===MAX_INTENTOS) {
                    alert (`Usuario bloqueado. Ha superado el número de intentos`);
                }
                
            }
        }
    
    }

