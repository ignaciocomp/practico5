document.querySelector("#btnCalcular").addEventListener("click", EncontrarVocales)

function validarCedula(cedula) {
	const esAntigua = cedula.length === 7;
	const multiplicador = esAntigua ? [2, 9, 8, 7, 6, 3] : [2, 9, 8, 7, 6, 3, 4];
	
	let numeros = cedula.replace(/\D/g, "").split("");
	let suma = 0;
	
	for (let i = 0; i < multiplicador.length; i++) {
	  suma += numeros[i] * multiplicador[i];
	}
	
	let digitoVerificadorCalculado = 10 - (suma % 10);
	let digitoVerificadorIngresado = parseInt(numeros[numeros.length - 1]);
	
	return digitoVerificadorCalculado === digitoVerificadorIngresado;
}



function EncontrarVocales() {
    let texto = document.querySelector("#txtIngresar").value;
    if (validarCedula(texto)) {
        document.querySelector("#pResultado").innerHTML = "La cédula es válida";
    } else {
        document.querySelector("#pResultado").innerHTML = "La cédula es inválida";
    }
}

