let idSpan = [];
let idP = [];

function init() {
    idSpan.push(document.getElementById("mContenu1"));
    idSpan.push(document.getElementById("mContenu2"));

    idP.push(document.getElementById("contenu1"));
    idP.push(document.getElementById("contenu2"));

    idP[0].style.display = "none";
    idP[1].style.display = "none";

    idSpan[0].addEventListener("mouseover", survolSpan1);
    idSpan[1].addEventListener("mouseover", survolSpan2);

    function survolSpan1(){
        idP[0].style.display = "block";
        idP[1].style.display = "none";
    }

    function survolSpan2(){
        idP[1].style.display = "block";
        idP[0].style.display = "none";
    }
}


window.addEventListener("load", init);
