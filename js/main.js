const darkModeButton = document.getElementById('nuit');
const body = document.body;

const moon = document.querySelector('.fa-moon');



/* MENU */


//1. dark mode
darkModeButton.addEventListener('click', () => {
  body.classList.toggle('nuit');
  darkModeButton.classList.toggle('wheat');
  darkModeButton.classList.toggle('fa-sun');

});



//2. debug mode
const debug = document.getElementById('debugMode');
const allElements = document.querySelectorAll('*:not(#dev-menu):not(#dev-menu *'); // Sélectionne tous les éléments de la page
const menu = document.getElementsByTagName('nav');

debug.addEventListener('click', () => {
 
  for (var i = 0; i < allElements.length; i++) {
    allElements[i].classList.toggle('debug'); // Ajoute ou supprime la classe 'debug'
  }
  debug.classList.toggle('clicked');
  menu.classList.remove('debug');


});



//3. Edit text
const edit = document.getElementById('edit');
const devMenu = document.getElementById('dev-menu'); // Correction du nom de la variable
let isEditable = false;

edit.addEventListener('click', () => {
  isEditable = !isEditable;
  document.body.contentEditable = isEditable;

  // La navigation reste non éditable
  devMenu.contentEditable = false;

  edit.classList.toggle('clicked');
});




//accès a la doc
const bouton = document.getElementById('coder');
bouton.addEventListener("click", () => {
  
  //window.open("https://docs.cless.dev", "_blank");
});


