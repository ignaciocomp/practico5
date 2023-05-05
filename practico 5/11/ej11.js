document.querySelector("#btnCalcular").addEventListener("click", EncontrarVocales)

function EncontrarVocales(){
    let texto = document.querySelector("#txtIngresar").value;
			let palabras = texto.toLowerCase().split(" ");
			for (let i = 0; i < palabras.length; i++) {
				palabras[i] = palabras[i].charAt(0).toUpperCase() + palabras[i].substring(1);
			}
			let resultado = palabras.join(" ");
			document.querySelector("#pResultado").innerHTML = resultado;
}

