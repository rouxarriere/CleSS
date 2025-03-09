const darkModeButton = document.getElementById('nuit');
const body = document.body;

const moon = document.querySelector('.fa-moon');



/* MENU */

//afficher le menu
const menu_btn = document.getElementById('deroulant');
const panel = document.getElementById('dev-menu');

menu_btn.addEventListener('click', () => {
  menu_btn.classList.toggle('up');
  panel.classList.toggle('affiche');

});

//1. dark mode
darkModeButton.addEventListener('click', () => {
  body.classList.toggle('nuit');
  darkModeButton.classList.toggle('wheat');
  darkModeButton.classList.toggle('fa-sun');

});



//2. debug mode
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



//3. Edit text
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




//accès a la doc
const bouton = document.getElementById('coder');
bouton.addEventListener("click", () => {
  
  //window.open("https://docs.cless.dev", "_blank");
});


