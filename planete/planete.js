var audio;
var BadSound = new Audio("../Audio/Mai incearca.m4a");
var GoodSound = new Audio("../Audio/Bravo.m4a");
var planets = [
	"jupiter",
	"marte",
	"mercur",
	"neptun",
	"saturn",
	"terra",
	"uranus",
	"venus"
];
var score = 0;
var Sound;
function ChangeToGame() {
	document.getElementById("grey").style.display = "none";

	run();
}

function run() {
	randomPlanets = GetRandomPlanets();
	var img1 = document.createElement("img");
	var img2 = document.createElement("img");
	var img3 = document.createElement("img");
	var img4 = document.createElement("img");
	img1.src = "../Imagini/Planete/" + randomPlanets[0] + ".png";
	img1.id = randomPlanets[0];
	img2.src = "../Imagini/Planete/" + randomPlanets[1] + ".png";
	img2.id = randomPlanets[1];
	img3.src = "../Imagini/Planete/" + randomPlanets[2] + ".png";
	img3.id = randomPlanets[2];
	img4.src = "../Imagini/Planete/" + randomPlanets[3] + ".png";
	img4.id = randomPlanets[3];
	document.getElementById("planet1").appendChild(img1);
	document.getElementById("planet2").appendChild(img2);
	document.getElementById("planet3").appendChild(img3);
	document.getElementById("planet4").appendChild(img4);
	var correctAnwer = Math.floor(Math.random() * 4);

	PlayAudio(randomPlanets[correctAnwer]);
	for (var i = 0; i < 4; i++) {
		if (i === correctAnwer) {
			document.getElementById(randomPlanets[i]).onclick = function() {
				PlayCorrect();
			};
		} else {
			document.getElementById(randomPlanets[i]).onclick = function() {
				PlayWrong();
			};
		}
	}
}

function PlayAudio(planetName) {
	switch (planetName) {
		case "marte":
			audio = new Audio("../Audio/Care este planeta Marte.m4a");
			audio.play();
			break;
		case "mercur":
			audio = new Audio("../Audio/Care este planeta Mercur.m4a");
			audio.play();
			break;
		case "uranus":
			audio = new Audio("../Audio/Care este planeta Uranus.m4a");
			audio.play();
			break;
		case "neptun":
			audio = new Audio("../Audio/Care este planeta Neptun.m4a");
			audio.play();
			break;
		case "saturn":
			audio = new Audio("../Audio/Care este planeta Saturn.m4a");
			audio.play();
			break;
		case "jupiter":
			audio = new Audio("../Audio/Care este planeta Jupiter.m4a");
			audio.play();
			break;
		case "venus":
			audio = new Audio("../Audio/Care este planeta Venus.m4a");
			audio.play();
			break;
		case "terra":
			audio = new Audio("../Audio/Care este planeta Terra.m4a");
			audio.play();
			break;
	}
}

function PlayCorrect() {
	if (score < 5) {
		score += 1;
		GoodSound.play();
		setTimeout(function() {
			document.getElementById("planet1").innerHTML = null;
			document.getElementById("planet2").innerHTML = null;
			document.getElementById("planet3").innerHTML = null;
			document.getElementById("planet4").innerHTML = null;
			run();
		}, 2000);
	} else {
		GoodSound.play();
		setTimeout(function() {
			window.location.replace("../intrebari/index.html");
		}, 2000);
	}
}

function PlayWrong() {
	BadSound.play();
}

function GetRandomPlanets(exceptedPlanet) {
	var positions = [0, 1, 2, 3, 4, 5, 6, 7];
	positions = shuffle(positions);
	var planetsLocal = [];
	for (var i = 0; i < 4; i++) {
		if (planets[positions[i]] !== exceptedPlanet) {
			planetsLocal.push(planets[positions[i]]);
		}
	}
	return planetsLocal;
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
