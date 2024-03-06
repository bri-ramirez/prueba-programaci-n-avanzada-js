// obtenemos las funciones de utilidades
import {
  getInstanceOfAnimal,
  renderAnimals,
  isformValid,
  cleanForm,
} from './utils.js';

// listado de animales del json
var animalList = [];

// animal seleccionado
var selectedAnimal;

// animales en investigación o participantes
const animalsInResearch = [];

// elementos del DOM
const selectAnimal = document.getElementById('animal');
const btnRegistrar = document.getElementById('btnRegistrar');

//  función autoejecutable que carga el listado de animales del json
(async () => {
  try {
    const response = await fetch('animales.json');
    const data = await response.json();
    animalList = data.animales;
  } catch (error) {
    alert('Error al cargar el listado de animales');
  }
})();

selectAnimal.addEventListener('change', (event) => {
  // obtenemos el valor seleccionado
  const value = event.target.value;

  // busca el animal seleccionado en el listado de animales
  selectedAnimal = animalList.find((animal) => animal.name === value);

  const preview = document.getElementById('preview');
  const img = document.createElement('img');

  // img.src = './assets/imgs/' + selectedAnimal.imagen;
  img.src = `./assets/imgs/${selectedAnimal.imagen}`;
  img.alt = selectedAnimal.name;
  preview.innerHTML = '';
  preview.appendChild(img);
});

// evento click del botón registrar
btnRegistrar.addEventListener('click', () => {
  const edad = document.getElementById('edad').value;
  const comentarios = document.getElementById('comentarios').value;

  // validamos el formulario
  if (!isformValid()) {
    alert('Todos los campos son obligatorios');
    return;
  }

  // obtenemos la instancia del animal seleccionado
  const animal = getInstanceOfAnimal(selectedAnimal, edad, comentarios);

  // agregamos el animal a la lista de animales participantes
  animalsInResearch.push(animal);
  renderAnimals(animalsInResearch);
  cleanForm();
});
