// import Leon from './clases/Leon.js';
// import Lobo from './clases/Lobo.js';
// import Oso from './clases/Oso.js';
// import Serpiente from './clases/Serpiente.js';
// import Aguila from './clases/Aguila.js';

import { Leon, Lobo, Oso, Serpiente, Aguila } from './clases/index.js';

// asigna la información del animal, al modal y luego lo muestra
const openModal = (animal) => {
  // obtener el body modal
  const modalBody = document.querySelector('.modal-body');

  // inyectamos html al body del modal
  modalBody.innerHTML = `
      <img src="./assets/imgs/${animal.img}" class="img-fluid" alt="${animal.nombre}">
      <p>Nombre: ${animal.nombre}</p>
      <p>Edad: ${animal.edad}</p>
      <p>Comentarios: ${animal.comentarios}</p>
    `;

  // mostramos el modal
  $('#exampleModal').modal('show');
};

// función que reproduce el audio del animal seleccionado
const playAudio = (animal) => {
  const audioPlayer = document.getElementById('player');
  audioPlayer.src = `./assets/sounds/${animal.sonido}`;
  audioPlayer.load();
  audioPlayer.play();
};

// función que retorna una instancia de la clase 'animal' seleccionada
export const getInstanceOfAnimal = (selectedAnimal, edad, comentarios) => {
  switch (selectedAnimal.name) {
    case 'Leon':
      return new Leon(
        selectedAnimal.name,
        edad,
        selectedAnimal.imagen,
        comentarios,
        selectedAnimal.sonido
      );
    case 'Lobo':
      return new Lobo(
        selectedAnimal.name,
        edad,
        selectedAnimal.imagen,
        comentarios,
        selectedAnimal.sonido
      );
    case 'Oso':
      return new Oso(
        selectedAnimal.name,
        edad,
        selectedAnimal.imagen,
        comentarios,
        selectedAnimal.sonido
      );
    case 'Serpiente':
      return new Serpiente(
        selectedAnimal.name,
        edad,
        selectedAnimal.imagen,
        comentarios,
        selectedAnimal.sonido
      );
    case 'Aguila':
      return new Aguila(
        selectedAnimal.name,
        edad,
        selectedAnimal.imagen,
        comentarios,
        selectedAnimal.sonido
      );
  }
};

// función que renderiza los animales participantes
export const renderAnimals = (animalesParticipantes) => {
  const divAnimales = document.getElementById('Animales');
  divAnimales.innerHTML = '';

  // recorremos el array de animales participantes
  animalesParticipantes.forEach((animal, index) => {
    const div = document.createElement('div');
    div.classList.add('card', 'bg-dark', 'text-white', 'm-2', 'w-25');

    // inyectamos el html al div
    div.innerHTML = `
      <img
        src="./assets/imgs/${animal.img}"
        class="card-img-top open-modal"
        alt="${animal.nombre}"
        data-id="${index}"
      />
      <a href="#" class="w-100 bg-dark img-audio" data-id="${index}">
        <img src="./assets/imgs/audio.svg" alt="sonido animal"/>
      </a>
    `;

    // agregamos el div al contenedor
    divAnimales.appendChild(div);
  });

  /**
   * * Agregamos los eventos dentro de la función renderAnimalesParticipantes
   * * para que se ejecuten cada vez que se renderice la lista de animales participantes
   */

  // evento click para abrir el modal
  $('.open-modal').click(function (event) {
    event.preventDefault();
    const index = $(this).data('id');
    const animal = animalesParticipantes[index];
    openModal(animal);
  });

  // evento click para reproducir el audio
  $('.img-audio').click(function (event) {
    event.preventDefault();
    const index = $(this).data('id');
    const animal = animalesParticipantes[index];
    playAudio(animal);
  });
};

// función que valida el formulario
export const isformValid = () => {
  const animal = document.getElementById('animal').value;
  const edad = document.getElementById('edad').value;
  const comentarios = document.getElementById('comentarios').value;

  if (animal === '' || edad === '' || comentarios === '') {
    return false;
  }

  return true;
};

// función que limpia el formulario
export const cleanForm = () => {
  document.getElementById('animal').value = '';
  document.getElementById('edad').value = '';
  document.getElementById('comentarios').value = '';
  document.getElementById('preview').innerHTML = '';
};
