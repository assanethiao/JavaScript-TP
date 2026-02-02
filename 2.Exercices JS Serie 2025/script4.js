let tabImages = ['chat.jpg', 'chien.jpg', 'tigre.jpg', 'lion.jpg'];

const imgElement = document.querySelector('img');
const buttons = document.querySelectorAll('button');
const prevButton = buttons[0];
const nextButton = buttons[1];

let currentIndex = 0;

function afficherImage() {
    imgElement.src = 'images/' + tabImages[currentIndex];
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + tabImages.length) % tabImages.length;
    afficherImage();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % tabImages.length;
    afficherImage();
});

