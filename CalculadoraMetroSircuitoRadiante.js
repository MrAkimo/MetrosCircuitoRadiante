const btn = document.getElementById("cBtn");
const htmlVal1 = document.querySelector("#value1");
const htmlVal2 = document.querySelector("#value2");
const htmlVal3 = document.querySelector("#value3");
const htmlVal4 = document.querySelector("#doble");
const htmllabel = document.querySelector("#resultado");

btn.addEventListener("click", llamarAlJs);

function llamarAlJs(){
	//console.log(htmlVal1.value);
	//console.log(htmlVal2.value);
	//console.log(htmlVal3.value);
	//console.log(htmlVal4.value);
	htmllabel.textContent = `${calcularMTuboRadiante(htmlVal1.value, htmlVal2.value, htmlVal3.value, htmlVal4.value)} Metros`;
}

function calcularMTuboRadiante(canalesX, canalesY, sepCanales, cualCanalDoble) {
	let posM=0;
	let posm=0;
	let valor1=0;
	let valor2=0;

	if (canalesX > canalesY){
		posM = canalesX;
		posm = canalesY;
		if(cualCanalDoble==0)
			valor1 = canalesX*sepCanales;
		else
			valor2 = canalesY*sepCanales
	}else{
		posM = canalesY;
		posm = canalesX;
		if(cualCanalDoble==0)
			valor1 = canalesY*sepCanales;
		else
			valor2 = canalesX*sepCanales
	}
	for (var i=posm-2; i>=0; i--){
		//console.log(valor1)
		valor1 += (posM-i)*sepCanales
		//console.log(valor1)
	}
	for (var i = posm-2; i>=0; i--){
		//console.log(valor2)
		valor2 += (posm-i)*sepCanales
		//console.log(valor2)
	}
	
	console.log((valor1 + valor2).toFixed(2));
	return (valor1 + valor2).toFixed(2);

}

//console.log(calcularMTuboRadiante(28, 6, 0.15, 0));