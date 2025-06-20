//Inicio del programa
console.log("Bienvenido al sistema intercativo de mensajes")

document.getElementById('verificarBtn').addEventListener('click', function () {
    
    const nombre = document.getElementById('nombre').value.trim();
    const edadInput = document.getElementById('edad').value.trim();
   
    const resultado = document.getElementById('mensajeResultado');
  
    const edad = parseInt(edadInput, 10);
    resultado.className = "mensaje"; 

    const nombreValido = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/.test(nombre);
    const edadValida = /^\d+$/.test(edadInput);
  

    if (!nombre || !nombreValido) {
      resultado.textContent =
        "Ingrese un nombre valido (sin numeros ni simbolos)";
      resultado.classList.add("error");
      return;
    }

    if (isNaN(edad)) {
      resultado.textContent = "Ingrese una edad valida en numeros";
      resultado.classList.add("error");
      console.error("Dato ingresado no valido.");
      return;
    }
  
    if (edad < 18) {
      resultado.textContent = `Hola ${nombre}. Eres menor de edad. ¡Sigue aprendiendo y disfrutando del codigo!`;
      resultado.classList.add("menor");
    } else {
      resultado.textContent = `¡Hola ${nombre}. Eres mayorde edad, con ${edad} años. ¡Preparate para grandes oportunidades en el mundo de la programacion!`;
      resultado.classList.add("mayor");
    }
  });
  