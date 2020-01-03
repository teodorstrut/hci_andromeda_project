let randomNumber;
let score=0;
let MaxScore=5;
let GoodSound=new Audio("Audio/Bravo.m4a");
let BadSound=new Audio("Audio/Mai incearca.m4a");
let finishPage="Felicitari.html";

window.onload = function() {
    let audio=new Audio("Audio/Numara stelele de pe ecran.m4a");
    audio.play();
}

function run()
{
    if(score==MaxScore)
    {
        let audio = new Audio("Audio/Felicitari.m4a");
        audio.play();
        window.location.replace(finishPage);
    }

    randomNumber=Math.floor(Math.random() * 9);
    randomNumber+=1;

    document.getElementById("score").innerHTML=score;

    displayNone();
    displayStelute(randomNumber);
    fillBox(randomNumber);
}

function displayNone()
{
    let container=document.getElementById('StarHolder');
    container.innerHTML="";

    for(let i=1;i<=4;i++)
    {
        container=document.getElementById('box'+i).innerHTML="";
    }
}

function displayStelute(randomNumber){
    let container=document.getElementById('StarHolder');

    for(let i=0;i<randomNumber;i++)
    {
        var node = document.createElement("img");               
        node.src="Imagini/star2.png";
        container.appendChild(node);
    }
}

function fillBox(randomNumber){
    let boxNumber=[1,2,3,4];
    let takenNumbers=[randomNumber];
    let correctBox=Math.floor(Math.random() * 4);
    correctBox+=1;

    console.log("Box"+correctBox);

    let container=document.getElementById('box'+correctBox);
    container.innerText=randomNumber;

    for(i in boxNumber)
    {
        if(boxNumber[i] != correctBox)
            {
                let newNumber=Math.floor(Math.random() * 9);
                newNumber+=1;
                while(takenNumbers.includes(newNumber))
                    {
                        newNumber=Math.floor(Math.random() * 9);
                        newNumber+=1;
                    }
                takenNumbers.push(newNumber);

                document.getElementById('box'+boxNumber[i]).innerText=newNumber;
            }
    }
}

function BoxClick(boxnr)
{
    let container=document.getElementById(boxnr);

    if(container.innerHTML==randomNumber)
    {
        GoodSound.play();
        score+=1;
        run();
    }
    else
    {
        BadSound.play();
        run();
    }
}