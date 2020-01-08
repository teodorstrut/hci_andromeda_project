let soundCorrect = new Audio("../Audio/Corect vesel.m4a");
let soundWrong = new Audio("../Audio/Gresit.m4a");
let silence = new Audio("../Audio/silence.mp3");
var nextPage = "../last/last.html";
var counter = 0;

var questions =	{
	1 : "Care este cea mai apropiata planeta fata de Soare?" ,
	2 : "Care este cea mai fierbinte planeta din Sistemul Solar?",
	3 : "Care este planeta acoperita in mare parte de apa?",
	4 : "Care este \"Planeta Rosie\"?",
	5 : "Care este cea mai mare planeta?",
	6 : "Care este planeta cunoscuta pentru inelele sale?",
	7 : "Care este cea mai rece planeta?",
	8 : "Care este cea mai departata planeta fata de Soare?"
};
var audioQuestion = { 
	1 : "../Audio/Care este cea mai apropiata.m4a",
	2 : "../Audio/Care este cea mai fierbinte.m4a",
	3 : "../Audio/Care este planeta in mare parte acoperita de apa.m4a",
	4 : "../Audio/Care este planeta rosie.m4a",
	5 : "../Audio/Care este cea mai mare planeta.m4a",
	6 : "../Audio/Care este planeta cunoscuta pentru inelele.m4a",
	7 : "../Audio/Care este cea mai rece planeta.m4a",
	8 : "../Audio/Care este cea mai departata.m4a"
};

var audioAnswers = {
	1 : "../Audio/Mercur este cea mai apropiata planeta de Soare.m4a",
	2 : "../Audio/Venus este cea mai fierbinte planeta din sistemul.m4a",
	3 : "../Audio/Terra.m4a",
	4 : "../Audio/Marte este denumita si Planeta Rosie.m4a",
	5 : "../Audio/Jupiter este cea mai mare planeta.m4a",
	6 : "../Audio/Saturn este cunoscuta pentru.m4a",
	7 : "../Audio/Uranus este cea mai rece planeta.m4a",
	8 : "../Audio/Neptun este cea mai departata planeta fata de Soar.m4a",
}

var imageAnswers ={
	1 : "../Imagini/Planete/mercur.png",
	2 : "../Imagini/Planete/venus.png",
	3 : "../Imagini/Planete/terra.png",
	4 : "../Imagini/Planete/marte.png",
	5 : "../Imagini/Planete/jupiter.png",
	6 : "../Imagini/Planete/saturn.png",
	7 : "../Imagini/Planete/uranus.png",
	8 : "../Imagini/Planete/neptun.png",
}

function createQuestion(){

	var rand = Math.floor((Math.random() * 8) + 1);
	document.getElementById("question").innerHTML = questions[rand];
	var audio = new Audio(audioQuestion[rand]);
	audio.play();
	audio.onended = function () {
		var random1to3 = Math.floor((Math.random()*3) + 1);
		var rand2 = Math.floor((Math.random()*8) + 1);
		var rand3 = Math.floor((Math.random()*8) + 1);
		
		while((Number(rand) === Number(rand2)) || (Number(rand2 === Number(rand3))) || (Number(rand) === (Number(rand3)))){
			rand2 = Math.floor((Math.random()*8) + 1);
			rand3 = Math.floor((Math.random()*8) + 1);
		}
		if (Number(rand) === Number(1)){
			document.getElementById("planet1").innerHTML = "<img src='" + imageAnswers[rand] + "' height=\"70%\" width=\"70%\" onclick = \"play('correct'," + rand + ")\">";
			document.getElementById("planet2").innerHTML = "<img src='" + imageAnswers[rand2] + "' height=\"70%\" width=\"70%\" onclick = \"play('wrong'," + 0 + ")\">";
			document.getElementById("planet3").innerHTML = "<img src='" + imageAnswers[rand3] + "' height=\"70%\" width=\"70%\" onclick = \"play('wrong'," + 0 + ")\">";
		}
		else if (Number(rand === Number(2))){
			document.getElementById("planet2").innerHTML = "<img src='" + imageAnswers[rand2] + "' height=\"70%\" width=\"70%\" onclick = \"play('wrong'," + 0 + ")\">";
			document.getElementById("planet1").innerHTML = "<img src='" + imageAnswers[rand] + "' height=\"70%\" width=\"70%\" onclick = \"play('correct'," + rand + "))\">";
			document.getElementById("planet3").innerHTML = "<img src='" + imageAnswers[rand3] + "' height=\"70%\" width=\"70%\" onclick = \"play('wrong'," + 0 + ")\">";
		}
		else {
			document.getElementById("planet3").innerHTML = "<img src='" + imageAnswers[rand3] + "' height=\"70%\" width=\"70%\" onclick = \"play('wrong'," + 0 + ")\">";
			document.getElementById("planet2").innerHTML = "<img src='" + imageAnswers[rand2] + "' height=\"70%\" width=\"70%\" onclick = \"play('wrong'," + 0 + ")\">";
			document.getElementById("planet1").innerHTML = "<img src='" + imageAnswers[rand] + "' height=\"70%\" width=\"70%\" onclick = \"play('correct'," + rand + ")\">";
		}
	}
	
	
}

function play(item, no){
	var cont = 0;
	if (Number(counter) == 5){
		var audio = new Audio("../Audio/Felicitari.m4a");
		audio.play();
		window.location.replace(nextPage);
	}
	if (String(item) == "correct"){
		soundCorrect.play();
		document.getElementById("planet1").innerHTML = " ";
		document.getElementById("planet2").innerHTML = " ";
		document.getElementById("planet3").innerHTML = " ";
		document.getElementById("question").innerHTML = " ";
		counter += 1;
		soundCorrect.onended =  function (){ 
			var audio = new Audio(audioAnswers[Number(no)]);
			audio.play();
			audio.onended = function () {createQuestion();}
		}
	}
	else if (String(item) == "wrong"){
		soundWrong.play();
	}
}

