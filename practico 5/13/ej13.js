document.querySelector("#btnCalcular").addEventListener("click", EncontrarVocales)

function EncontrarVocales(){
    let texto = document.querySelector("#txtIngresar").value;
	texto = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
	if(texto.toLowerCase() === texto.toLowerCase().split('').reverse().join('')){
		document.querySelector("#pResultado").innerHTML = `Es polindromo<br>`
	}else{
		document.querySelector("#pResultado").innerHTML = `NO Es polindromo<br>`
	}
}


	// let textoLower = texto.toLowerCase()
	// let poli1 = textoLower
	// let textoInvertido = ""

	// for(let i = textoLower.length - 1; i >= 0; i--) {
    // textoInvertido += textoLower.charAt(i);
    // }
	// if(textoInvertido === poli1){
	// 	document.querySelector("#pResultado").innerHTML = `Es polindromo<br>`
	// }else{
	// 	document.querySelector("#pResultado").innerHTML = `NO Es polindromo<br>`
	// }