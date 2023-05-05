document.querySelector("#btnCalcular").addEventListener("click", EncontrarVocales)

function indiceDeA(texto){
	texto = texto.toLowerCase()
	let contador = 0
	let contadoraso = 0
	for (let i = texto.length; i > 0; i--){
		if(texto[i] === "a"){
			contadoraso++
			}
			
		}
		
	if(contadoraso <= 1){
		return -1
	}

	for (let i = texto.length+1; i > 0; i--) {
		if(texto[i] === "a"){
			contador++
			if(contador === 2){return i

				break
			}
		}
	}
	
}

function EncontrarVocales(){
    let texto = document.querySelector("#txtIngresar").value;
	document.querySelector("#pResultado").innerHTML = indiceDeA(texto)
}
