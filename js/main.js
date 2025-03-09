const darkModeButton = document.getElementById('nuit');
const body = document.body;

const moon = document.querySelector('.fa-moon');
// dark mode
darkModeButton.addEventListener('click', () => {
  body.classList.toggle('nuit');
  darkModeButton.classList.toggle('wheat');
  darkModeButton.classList.toggle('fa-sun');

});



//debug mode
const debug = document.getElementById('debugMode');
const allElements = document.querySelectorAll(':not(nav):not(nav *)'); // Sélectionne tous les éléments de la page
const menu = document.getElementsByTagName('nav');

debug.addEventListener('click', () => {
 
  for (var i = 0; i < allElements.length; i++) {
    allElements[i].classList.toggle('debug'); // Ajoute ou supprime la classe 'debug'
  }
  debug.classList.toggle('clicked');
  menu.classList.remove('debug');


});



//Edit text
const edit = document.getElementById('edit');
const navElements = document.querySelectorAll('nav');
let isEditable = false;

        edit.addEventListener('click', () => {
            isEditable = !isEditable;
            document.body.contentEditable = isEditable;

            navElements.forEach(navElement => {
                navElement.contentEditable = false; // La navigation reste non éditable
            });
            edit.classList.toggle('clicked');
        });

const bouton = document.getElementById('coder');
bouton.addEventListener("click", () => {
  
  //window.open("https://docs.cless.dev", "_blank");
});


