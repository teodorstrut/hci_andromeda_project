window.onload = function () {
    document.getElementById("StartTest").style.display = "none";
};

function TestSound() {

    console.log("test");

    var body = document.getElementById("StartTest");

    var node = document.createElement("img");
    node.src = "../Imagini/Planete/uranus.png";
    body.appendChild(node);

    var node1 = document.createElement("img");
    node1.src = "../Imagini/Planete/terra.png";

    var audio = new Audio("../Audio/In galaxia noastra se afla foarte multe stele. Cea.m4a");
    var audio1 = new Audio("../Audio/Mai incearca.m4a");

    audio.addEventListener("ended", function () {
        audio.currentTime = 0;

        setTimeout(function () {
            document.getElementById("StartTest").innerHTML = "";
            body.appendChild(node1);
            audio1.play();
        }, 1000);
    });

    audio.play();
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