function init() {
	const items = document.querySelectorAll("li");
    let tabImages = ['chat.jpg', 'chien.jpg', 'lion.jpg', 'tigre.jpg'];
	
    for(let i=0; i<items.length; i++){
        items[i].addEventListener("mouseover", () => {
            document.querySelector('img').src = 'images/' + tabImages[i];
        })
    }
}

window.addEventListener("load", init);
