let idP = [];

function init() {
    idP.push(document.getElementById("par1"));
    idP.push(document.getElementById("par2"));
    idP.push(document.getElementById("par3"));

    idP.forEach(el => el.style.display = "none");

    selectElement = document.getElementsByTagName("select")[0];
    function affiche() {
        idP.forEach(el => el.style.display = "none"); 
        if(selectElement.value === "1") idP[0].style.display = "block";
        if(selectElement.value === "2") idP[1].style.display = "block";
        if(selectElement.value === "3") idP[2].style.display = "block";
    }
    selectElement.addEventListener("change", affiche);

}



window.addEventListener("load", init);