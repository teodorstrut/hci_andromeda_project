window.onload = function() {
	document.getElementById("StartTest").style.display = "none";
};

function TestSound() {
	console.log("test");
	var audio = new Audio("../Audio/Felicitari.m4a");

	var body = document.getElementById("StartTest");

	var startSound = new Audio(
		"../Audio/Salut! Astazi vom invata despre spatiul cosmic.m4a"
	);
	startSound.play();
	startSound.addEventListener("ended", function() {
		startSound.currentTime = 0;
		setTimeout(function() {
			galaxiaSound.play();
		}, 500);
	});

	var galaxiaSound = new Audio(
		"../Audio/Ne aflam in galaxia 'Calea Lactee'..m4a"
	);
	galaxiaSound.addEventListener("ended", function() {
		galaxiaSound.currentTime = 0;
		setTimeout(function() {
			document.getElementById("StartTest").innerHTML = "";
			body.appendChild(planete);
			planeteSound.play();
		}, 500);
	});

	var planete = document.createElement("img");
	planete.src = "../Imagini/Planete/planete.png";
	planete.className = "bigImage";
	var planeteSound = new Audio(
		"../Audio/Sistemul solar este format din Soare si 8 planete.m4a"
	);
	planeteSound.addEventListener("ended", function() {
		planeteSound.currentTime = 0;
		setTimeout(function() {
			document.getElementById("StartTest").innerHTML = "";
			body.appendChild(sun);
			sunSound.play();
		}, 500);
	});

	var sun = document.createElement("img");
	sun.src = "../Imagini/Planete/sun.png";
	var sunSound = new Audio(
		"../Audio/In galaxia noastra se afla foarte multe stele. Cea.m4a"
	);
	sunSound.addEventListener("ended", function() {
		sunSound.currentTime = 0;
		setTimeout(function() {
			document.getElementById("StartTest").innerHTML = "";
			body.appendChild(mercur);
			mercurSound.play();
		}, 500);
	});

	var mercur = document.createElement("img");
	mercur.src = "../Imagini/Planete/mercur.png";
	var mercurSound = new Audio(
		"../Audio/Mercur este cea mai apropiata planeta de Soare.m4a"
	);
	mercurSound.addEventListener("ended", function() {
		mercurSound.currentTime = 0;

		setTimeout(function() {
			document.getElementById("StartTest").innerHTML = "";
			body.appendChild(venus);
			venusSound.play();
		}, 500);
	});

	var venus = document.createElement("img");
	venus.src = "../Imagini/Planete/venus.png";
	var venusSound = new Audio(
		"../Audio/Venus este cea mai fierbinte planeta din sistemul.m4a"
	);
	venusSound.addEventListener("ended", function() {
		venusSound.currentTime = 0;

		setTimeout(function() {
			document.getElementById("StartTest").innerHTML = "";
			body.appendChild(terra);
			terraSound.play();
		}, 500);
	});

	var terra = document.createElement("img");
	terra.src = "../Imagini/Planete/terra.png";
	var terraSound = new Audio(
		"../Audio/Pamantul este planeta pe care locuim. Se mai numes.m4a"
	);
	terraSound.addEventListener("ended", function() {
		terraSound.currentTime = 0;

		setTimeout(function() {
			document.getElementById("StartTest").innerHTML = "";
			body.appendChild(luna);
			lunaSound.play();
		}, 500);
	});

	var luna = document.createElement("img");
	luna.src = "../Imagini/Planete/luna.png";
	var lunaSound = new Audio(
		"../Audio/Luna este satelitul natural al Pamantului.m4a"
	);
	lunaSound.addEventListener("ended", function() {
		lunaSound.currentTime = 0;
		setTimeout(function() {
			document.getElementById("StartTest").innerHTML = "";
			body.appendChild(catel);
			catelSound.play();
		}, 500);
	});

	var catel = document.createElement("img");
	catel.src = "../Imagini/Planete/laika2.png";
	var catelSound = new Audio("../Audio/Primul animal in spatiu a fost.m4a");
	catelSound.addEventListener("ended", function() {
		catelSound.currentTime = 0;
		setTimeout(function() {
			document.getElementById("StartTest").innerHTML = "";
			body.appendChild(marte);
			marteSound.play();
		}, 500);
	});

	var marte = document.createElement("img");
	marte.src = "../Imagini/Planete/marte.png";
	var marteSound = new Audio(
		"../Audio/Marte este denumita si Planeta Rosie.m4a"
	);
	marteSound.addEventListener("ended", function() {
		marteSound.currentTime = 0;

		setTimeout(function() {
			document.getElementById("StartTest").innerHTML = "";
			body.appendChild(jupiter);
			jupiterSound.play();
		}, 500);
	});

	var jupiter = document.createElement("img");
	jupiter.src = "../Imagini/Planete/jupiter.png";
	var jupiterSound = new Audio(
		"../Audio/Jupiter este cea mai mare planeta.m4a"
	);
	jupiterSound.addEventListener("ended", function() {
		jupiterSound.currentTime = 0;

		setTimeout(function() {
			document.getElementById("StartTest").innerHTML = "";
			body.appendChild(saturn);
			saturnSound.play();
		}, 500);
	});

	var saturn = document.createElement("img");
	saturn.src = "../Imagini/Planete/saturn.png";
	var saturnSound = new Audio("../Audio/Saturn este cunoscuta pentru.m4a");
	saturnSound.addEventListener("ended", function() {
		saturnSound.currentTime = 0;

		setTimeout(function() {
			document.getElementById("StartTest").innerHTML = "";
			body.appendChild(uranus);
			uranusSound.play();
		}, 500);
	});

	var uranus = document.createElement("img");
	uranus.src = "../Imagini/Planete/uranus.png";
	var uranusSound = new Audio(
		"../Audio/Uranus este cea mai rece planeta.m4a"
	);
	uranusSound.addEventListener("ended", function() {
		uranusSound.currentTime = 0;

		setTimeout(function() {
			document.getElementById("StartTest").innerHTML = "";
			body.appendChild(neptun);
			neptunSound.play();
		}, 500);
	});

	var neptun = document.createElement("img");
	neptun.src = "../Imagini/Planete/neptun.png";
	var neptunSound = new Audio(
		"../Audio/Neptun este cea mai departata planeta fata de Soar.m4a"
	);
	neptunSound.addEventListener("ended", function() {
		neptunSound.currentTime = 0;

		setTimeout(function() {
			document.getElementById("StartTest").innerHTML = "";
			body.appendChild(pitice1);
			body.appendChild(pitice2);
			body.appendChild(pitice3);
			piticeSound.play();
		}, 500);
	});

	var pitice1 = document.createElement("img");
	var pitice2 = document.createElement("img");
	var pitice3 = document.createElement("img");
	pitice1.src = "../Imagini/Planete/pluto.png";
	pitice2.src = "../Imagini/Planete/ceres.png";
	pitice3.src = "../Imagini/Planete/eris.png";
	var piticeSound = new Audio("../Audio/partea 2/Pe langa cele 8.m4a");
	piticeSound.addEventListener("ended", function() {
		piticeSound.currentTime = 0;

		setTimeout(function() {
			document.getElementById("StartTest").innerHTML = "";
			infoSpaceSound.play();
		}, 500);
	});

	var infoSpaceSound = new Audio(
		"../Audio/partea 2/mai contine asteroizi,.m4a"
	);
	infoSpaceSound.addEventListener("ended", function() {
		infoSpaceSound.currentTime = 0;

		setTimeout(function() {
			document.getElementById("StartTest").innerHTML = "";
			body.appendChild(meteoriti);
			meteoritiSound.play();
		}, 500);
	});

	var meteoriti = document.createElement("img");
	meteoriti.src = "../Imagini/Planete/asteroizi.png";
	meteoriti.className = "bigImage";
	var meteoritiSound = new Audio("../Audio/partea 2/meteoritii sunt.m4a");
	meteoritiSound.addEventListener("ended", function() {
		meteoritiSound.currentTime = 0;

		setTimeout(function() {
			asteroiziSound.play();
		}, 500);
	});

	var asteroiziSound = new Audio(
		"../Audio/partea 2/cel mai mare asteroid.m4a"
	);
	asteroiziSound.addEventListener("ended", function() {
		asteroiziSound.currentTime = 0;

		setTimeout(function() {
			document.getElementById("StartTest").innerHTML = "";
			body.appendChild(comete);
			cometeSound.play();
		}, 500);
	});

	var comete = document.createElement("img");
	comete.src = "../Imagini/Planete/comete.png";
	var cometeSound = new Audio("../Audio/partea 2/cometele sunt.m4a");
	cometeSound.addEventListener("ended", function() {
		cometeSound.currentTime = 0;

		setTimeout(function() {
			document.getElementById("StartTest").innerHTML = "";
			finishedLearn();
			audio.play();
		}, 500);
	});

	audio.addEventListener("ended", function() {
		audio.currentTime = 0;
		window.location.replace("../Home.html");
	});
}

function addSun() {
	var body = document.getElementById("StartTest");

	var node = document.createElement("img");
	node.src = "../Imagini/Planete/sun.png";
	body.appendChild(node);
}

function LEARN() {
	document.getElementById("StartTest").style.display = "flex";
	document.getElementById("grey").style.display = "none";

	TestSound();
}
