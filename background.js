var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector("#gradient");
var button = document.querySelector("button");

function setGradient(){
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background;
}

setGradient();

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

function randomColor(){
	var randomColor = Math.floor(Math.random()*16777215).toString(16);
	return "#" + randomColor;
}

button.addEventListener("click", function(){
	color1.value = randomColor();
	color2.value = randomColor();
	setGradient();
});