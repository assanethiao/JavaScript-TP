const allDiv = document.querySelectorAll('div');

for(i=1; i<6; i=i+2){
    allDiv[i].style.display="none";
}

allDiv[0].addEventListener("click", () => afficheMasque(allDiv[0]));
allDiv[2].addEventListener("click", () => afficheMasque(allDiv[2]));
allDiv[4].addEventListener("click", () => afficheMasque(allDiv[4]));;

function afficheMasque(div){
    if(div == allDiv[0]){
        allDiv[0].style.display = "none";
        allDiv[1].style.display = "block";
        allDiv[1].style.backgroundColor = "green";
    }else if(div == allDiv[2]){
        allDiv[2].style.display = "none";
        allDiv[3].style.display = "block";
        allDiv[3].style.backgroundColor = "green";
    }else if(div == allDiv[4]){
        allDiv[4].style.display = "none";
        allDiv[5].style.display = "block";
        allDiv[5].style.backgroundColor ="green";
    }
}