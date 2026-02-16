let nombre = 31;
let boutton = document.getElementById("valider");
let valeur = " ";
let messageElement = " ";

function jouer(){
    valeur = document.getElementById("input").value;
    messageElement = document.getElementById("message");

    if(isNaN(parseInt(valeur))){
        messageElement.innerText = "["+tentative+"]"+" On a dit un entier !!!";
        messageElement.style.color = "red";
        return;
    }
    if (parseInt(valeur) < nombre) {
        messageElement.innerText = "["+tentative+"]"+" Trop petit !";
        messageElement.style.color = "blue";
    } else if(parseInt(valeur) > nombre) {
        messageElement.innerText = "["+tentative+"]"+" Trop grand !";
        messageElement.style.color = "blue";
    }

}

let tentative = 1;
function relance(){
    if (tentative<=6){
        jouer();
        if (nombre == parseInt(valeur)){
            messageElement.innerText = "["+tentative+"]"+" c'est gagné ! Le nombre Mystère était bien "+nombre;
            messageElement.style.color = "green";
            boutton.innerText = "Rejouer?";
            tentative = 1;
            return;
        }
        
    }
    if (tentative == 6){
        messageElement.innerText = "["+tentative+"]"+" c'est perdu! Le nombre Mystère était "+nombre;
        messageElement.style.color = "red";
        boutton.innerText = "Rejouer?";
        tentative = 1;
        return;
    }

    tentative = tentative +1;
}

boutton.addEventListener("click", relance);