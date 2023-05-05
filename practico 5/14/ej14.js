document.querySelector("#btnCalcular").addEventListener("click", EncontrarVocales)

function palabras(texto){
	let contador = 0
	for (let i = 0; i < texto.length; i++) {
		if(texto[0] === texto[i]){
			contador++
		}
	}
	return contador
}

function EncontrarVocales(){
    let texto = document.querySelector("#txtIngresar").value;
	document.querySelector("#pResultado").innerHTML = palabras(texto)
}
