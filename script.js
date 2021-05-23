var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
css.textContent = "linear-gradient(to right, " + color1.value + color2.value + ")";

var button = document.createElement('button');
button.id = 'changeColor';
button.innerText = 'Random color';
body.append(button);
button.addEventListener("click", function(){
	color1.value = '#' + getRandom(10 , 99) + getRandom(10 , 99) + getRandom(10 , 99);
	color2.value = '#' + getRandom(10 , 99) + getRandom(10 , 99) + getRandom(10 , 99);
	setGradient();
})

function getRandom(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

console.log(color1.value);