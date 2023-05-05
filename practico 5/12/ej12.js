document.querySelector("#btnCalcular").addEventListener("click", EncontrarVocales)

function EncontrarVocales(){
    let texto = document.querySelector("#txtIngresar").value;//ASasadAWS
	let contadorMayusculas = 0
	let contadorMinusculas = 0
	let contadorElse = 0
			for (let i = 0; i < texto.length; i++) {
				if(texto.charCodeAt(i) >= 65 && texto.charCodeAt(i) <= 90){
					contadorMayusculas++
				}
				else if(texto.charCodeAt(i) >= 97 && texto.charCodeAt(i) <= 122){
					contadorMinusculas++
				} else{
					contadorElse++
				}
			}
			document.querySelector("#pResultado").innerHTML = `Mayusculas: ${contadorMayusculas}<br>
			Minusculas: ${contadorMinusculas}<br>
			Else: ${contadorElse}<br>`
}

