class Animal {
  constructor(nombre, edad, img, comentarios, sonido) {
    this._nombre = nombre;
    this._edad = edad;
    this._img = img;
    this._comentarios = comentarios;
    this._sonido = sonido;
  }

  get nombre() {
    return this._nombre;
  }

  get edad() {
    return this._edad;
  }

  set edad(edad) {
    this._edad = edad;
  }

  get img() {
    return this._img;
  }

  set img(img) {
    this._img = img;
  }

  get comentarios() {
    return this._comentarios;
  }

  set comentarios(comentarios) {
    this._comentarios = comentarios;
  }

  get sonido() {
    return this._sonido;
  }

  set sonido(sonido) {
    this._sonido = sonido;
  }
}

export default Animal;
