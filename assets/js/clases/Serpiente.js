import Animal from './Animal.js';

class Serpiente extends Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    super(nombre, edad, img, comentarios, sonido);
  }

  Sisear() {
    return this.sonido;
  }
}

export default Serpiente;