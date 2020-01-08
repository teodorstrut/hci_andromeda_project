var audio;
window.onload = function() {
	this.run();
};
var planets = [
	"juipter",
	"marte",
	"mercur",
	"neptun",
	"saturn",
	"terra",
	"uranus",
	"venus"
];
function ChangeToGame() {
	document.getElementById("game").style.display = "block";
	document.getElementById("grey").style.display = "none";

	run();
}

function run() {
	GetRandomPlanets("marte");
}

function Marte() {
	audio = new Audio("../Audio/Care este planeta Marte.m4a");
	audio.play();
}

function Mercur() {
	audio = new Audio("../Audio/Care este planeta Mercur.m4a");
	audio.play();
}

function Uranus() {
	audio = new Audio("../Audio/Care este planeta Uranus.m4a");
	audio.play();
}

function Neptun() {
	audio = new Audio("../Audio/Care este planeta Neptun.m4a");
	audio.play();
}

function Saturn() {
	audio = new Audio("../Audio/Care este planeta Saturn.m4a");
	audio.play();
}

function Jupiter() {
	audio = new Audio("../Audio/Care este planeta Jupiter.m4a");
	audio.play();
}

function Venus() {
	audio = new Audio("../Audio/Care este planeta Venus.m4a");
	audio.play();
}

function Terra() {
	audio = new Audio("../Audio/Care este planeta Terra.m4a");
	audio.play();
}

function GetRandomPlanets(exceptedPlanet) {
	var positions = [0, 1, 2, 3, 4, 5, 6, 7];
	positions = shuffle(positions);
	var planetsLocal = [exceptedPlanet];
	for (var i = 0; i < 4; i++) {
		if (planets[positions[i]] !== exceptedPlanet) {
			planetsLocal.push(planets[positions[i]]);
		}
	}
}

function shuffle(array) {
	var currentIndex = array.length,
		temporaryValue,
		randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}
