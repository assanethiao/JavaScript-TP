
let nombre = 31;
let bouton = document.getElementById("valider");
let valeur = " ";
let messageElement = " ";
let tentative = 1;

function jouer() {
    valeur = document.getElementById("input").value;
    messageElement = document.getElementById("message");

    if (isNaN(parseInt(valeur))) {
        messageElement.innerText = "[" + tentative + "] On a dit un entier !!!";
        messageElement.style.color = "red";
        return;
    }

    if (parseInt(valeur) < nombre) {
        messageElement.innerText = "[" + tentative + "] Trop petit !";
        messageElement.style.color = "blue";
    } else if (parseInt(valeur) > nombre) {
        messageElement.innerText = "[" + tentative + "] Trop grand !";
        messageElement.style.color = "blue";
    }

    if (parseInt(valeur) === nombre) {
        messageElement.innerText = "[" + tentative + "] c'est gagné ! Le nombre Mystère était bien " + nombre;
        messageElement.style.color = "green";
        bouton.innerText = "Rejouer?";
        bouton.removeEventListener("click", jouer);
        bouton.addEventListener("click", rejouer);
        return;
    }

    if (tentative === 6) {
        messageElement.innerText = "[" + tentative + "] c'est perdu! Le nombre Mystère était " + nombre;
        messageElement.style.color = "red";
        bouton.innerText = "Rejouer?";
        bouton.removeEventListener("click", jouer);
        bouton.addEventListener("click", rejouer);
        return;
    }

    tentative++;
}

function rejouer() {
    tentative = 1;
    document.getElementById("input").value = "";
    messageElement.innerText = "";
    bouton.innerText = "Essayer";

    bouton.removeEventListener("click", rejouer);
    bouton.addEventListener("click", jouer);
}


bouton.addEventListener("click", jouer);