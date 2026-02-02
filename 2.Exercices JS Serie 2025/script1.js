function myWelcome() {
  alert('Document onload');
}

function myImage() {

    alert('première image');
}

function myButton() {

    alert('clique sur le bouton');
}

function mytouche(btn) {
    if (btn.textContent === "nuit") {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        btn.style.color = "red";
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
        btn.style.color = "green";
    }
 
}

function mychat() {
    document.getElementById("ecran").src= "images/chat.jpg";
    
}

function mylion() {
    document.getElementById("ecran").src= "images/lion.jpg";
    
}