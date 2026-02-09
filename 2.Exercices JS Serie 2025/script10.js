function init() {
	const items = document.querySelectorAll("input");
    const checkbox = document.getElementById("tous");
    const label = document.getElementById("all");

    checkbox.addEventListener("click", ()=>{
        if(checkbox.checked){
            for(let i=0; i<items.length; i++){
                items[i].checked = true;
            }
        }else{
            for(let i=0; i<items.length; i++){
                items[i].checked = false;
            }
        }
        label.innerText = checkbox.checked ? "Désactiver tout" : "Sélectionner tout";
    })

}

window.addEventListener("load", init);
