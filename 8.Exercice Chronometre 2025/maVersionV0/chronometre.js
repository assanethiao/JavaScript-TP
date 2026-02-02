const idChrono = 'chrono0'; // L'id à attribuer au chronomètre
let refTicks; // Le timer
let dixieme; // Le compteur de dixièmes de seconde (variable indépendante du timer !!!)

const boutonAjouter = document.querySelector('#ajouter'); // Le bouton '+'
boutonAjouter.addEventListener('click', () => {
    creerChronometre();
});

