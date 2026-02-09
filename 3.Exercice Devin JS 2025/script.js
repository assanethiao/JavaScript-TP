let nombre = 31;
let boutton = document.getElementById("valider");

function jouer(){
    let valeur = document.getElementById("input").value;
    let messageElement = document.getElementById("message");

    if(isNaN(value)){
        messageElement.innerText = "On a dit un entier !!!";
        return;
    }
    if (valeur < nombre) {
        messageElement.innerText = "Trop petit !";
        messageElement.style.color = "blue";
    } else if (valeur > nombre) {
        messageElement.innerText = "Trop grand !";
        messageElement.style.color = "blue";
    } else {
        messageElement.innerText = "Bravo !";
        messageElement.style.color = "green";
    }


}
boutton.addEventListener("click", jouer);
for(let i=0; i<6; i++){

}