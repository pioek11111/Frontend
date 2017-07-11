var przycisk = document.getElementById('button');
var kontener = document.getElementById('container');

przycisk.addEventListener("click", pierwszaFunkcja);
var count = 0;
function pierwszaFunkcja() {
	if(count < 6) {
		count++;
		kontener.textContent += Math.round(Math.random()*49+1) + " ";
	}
}