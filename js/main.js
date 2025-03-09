const darkModeButton = document.getElementById('nuit');
const body = document.body;

const moon = document.querySelector('.fa-moon');
// dark mode
darkModeButton.addEventListener('click', () => {
  body.classList.toggle('nuit');
  darkModeButton.classList.toggle('wheat');
  darkModeButton.classList.toggle('fa-sun');

});

const debug = document.getElementById('debugMode');
var allElements = document.querySelectorAll(':not(nav):not(nav *)'); // Sélectionne tous les éléments de la page
var menu = document.getElementsByTagName('nav');
//debug mode
debug.addEventListener('click', function() {
 
  for (var i = 0; i < allElements.length; i++) {
    allElements[i].classList.toggle('debug'); // Ajoute ou supprime la classe 'debug'
  }
  debug.classList.toggle('clicked');
  menu.classList.remove('debug');


});

const bouton = document.getElementById('coder');
bouton.addEventListener("click", function() {
  
  //window.open("https://docs.cless.dev", "_blank");
});


