let tabImages = ['chat.jpg', 'chien.jpg', 'tigre.jpg', 'lion.jpg'];
const images = document.querySelectorAll('img');
const buttons = document.querySelectorAll('button');

function afficherImages() {
	for (let i = 0; i < images.length; i++) {
		images[i].src = 'images/' + tabImages[i];
	}
}

function monter() {
	let first = tabImages.shift();
	tabImages.push(first);
	afficherImages();
}

function descendre() {
    let last = tabImages.pop();
    tabImages.unshift(last);
    afficherImages();
}

			
buttons[0].addEventListener('click', monter);
buttons[1].addEventListener('click', descendre);

	
document.addEventListener('keydown', function (event) {
	if (event.key === "ArrowUp") { 
		monter();
	}
	if (event.key === "ArrowDown") { 
		descendre();
	}
});