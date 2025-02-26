const darkModeButton = document.getElementById('nuit');
const body = document.body;

const moon = document.querySelector('.fa-moon');
const text = document.querySelector('.hidden');

// Affichage du texte
moon.addEventListener('mouseover', () => {
  text.classList.remove('hidden');
});
moon.addEventListener('mouseout', () => {
  text.classList.add('hidden');
});




// dark mode
darkModeButton.addEventListener('click', () => {
  body.classList.toggle('nuit');
  darkModeButton.classList.toggle('wheat');
  darkModeButton.classList.toggle('fa-sun');

  if (body.classList.contains('nuit')) {
    text.textContent='Light Mode';
  } else {
    text.textContent='Dark Mode';
  }

});

// Nouvelle page

function nouvellePage(){
  const element = document.querySelector('.container');
  if (element) {
    element.innerHTML = ''; // Supprime le contenu HTML du premier élément trouvé
  }
};

const bouton = document.getElementById('coder');
bouton.addEventListener("click", function() {
  
  //window.open("https://docs.cless.dev", "_blank");
});
