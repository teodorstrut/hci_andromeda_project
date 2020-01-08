var randomNumber;
var score = 0;
var MaxScore = 5;
var GoodSound = new Audio("../Audio/Bravo.m4a");
var BadSound = new Audio("../Audio/Mai incearca.m4a");
var finishPage = "../Felicitari.html";

window.onload = function() {
	var audio = new Audio("../Audio/Numara stelele de pe ecran.m4a");
	audio.play();
};

function run() {
	if (score == MaxScore) {
		var audio = new Audio("../Audio/Felicitari.m4a");
		audio.play();
		window.location.replace(finishPage);
	}

	randomNumber = Math.floor(Math.random() * 9);
	randomNumber += 1;

	document.getElementById("score").innerHTML = score;

	displayNone();
	displayStelute(randomNumber);
	fillBox(randomNumber);
}

function displayNone() {
	var container = document.getElementById("StarHolder");
	container.innerHTML = "";

	for (var i = 1; i <= 4; i++) {
		container = document.getElementById("box" + i).innerHTML = "";
	}
}

function displayStelute(randomNumber) {
	var container = document.getElementById("StarHolder");

	for (var i = 1; i <= 3; i++) {
		var starRow = document.createElement("div");
		starRow.classList.add("row");
		starRow.classList.add("w-100");
		starRow.classList.add("justify-content-center");
		starRow.id = "starRow" + i.toString();

		container.appendChild(starRow);
	}

	for (var i = 0; i < 9; i++) {
		var starCol = document.createElement("div");
		starCol.classList.add("col-3");
		starCol.classList.add("text-center");

		if (i < randomNumber) {
			var node = document.createElement("img");
			node.src = "../Imagini/star2.png";
			starCol.appendChild(node);
		}

		if (i < 3) {
			starRow = document.getElementById("starRow1");
			starRow.appendChild(starCol);
		} else if (i < 6) {
			starRow = document.getElementById("starRow2");
			starRow.appendChild(starCol);
		} else {
			starRow = document.getElementById("starRow3");
			starRow.appendChild(starCol);
		}
	}
}

function fillBox(randomNumber) {
	var boxNumber = [1, 2, 3, 4];
	var takenNumbers = [randomNumber];
	var correctBox = Math.floor(Math.random() * 4);
	correctBox += 1;

	console.log("Box" + correctBox);

	var container = document.getElementById("box" + correctBox);
	container.innerText = randomNumber;

	for (i in boxNumber) {
		if (boxNumber[i] != correctBox) {
			var newNumber = Math.floor(Math.random() * 9);
			newNumber += 1;
			while (takenNumbers.includes(newNumber)) {
				newNumber = Math.floor(Math.random() * 9);
				newNumber += 1;
			}
			takenNumbers.push(newNumber);

			document.getElementById("box" + boxNumber[i]).innerText = newNumber;
		}
	}
}

function BoxClick(boxnr) {
	var container = document.getElementById(boxnr);

	if (container.innerHTML == randomNumber) {
		GoodSound.play();
		score += 1;
		run();
	} else {
		BadSound.play();
		run();
	}
}
