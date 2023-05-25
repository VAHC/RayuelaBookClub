const validation = (input) => {
let errors = {};

  // Validación para el campo "title"
  if (!input.title) {
    errors.title = 'El titulo es obligatorio';
  }

  // Validación para el campo "publisher"
  if (!input.publisher) {
    errors.publisher = 'La editorial es obligatoria';
  } 

  // Validación para el campo "description"
  if (!input.description) {
    errors.description = 'La descripción es obligatoria';
  }

  // Validación para el campo "price"
  if (!input.price) {
    errors.price = 'El precio es obligatorio y debe ser un número positivo';
  }

  // Validación para el campo "stock"
  if (!input.stock) {
    errors.stock = 'El stock es obligatorio y debe ser un número positivo';
  }

  // Validación para el campo "publishedDate"
  if (!input.publishedDate) {
    errors.publishedDate = 'La fecha de publicación es obligatoria';
  }

  // Validación para el campo "image"
  if (!input.image) {
    errors.image = 'La imagen de la portada es obligatoria';
  } else if (!/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/.test(input.image)) {
    errors.image = 'La imagen de la portada no tiene un formato de URL válido';
  }

  // Validación para el campo "authors"
  if (!input.authors.length) {
    errors.authors = 'Es obligatorio seleccionar un autor';
  }

  // Validación para el campo "genders"
  if (!input.genders.length) {
    errors.genders = 'es obligatorio seleccionar un género';
  }

  // Retorna los errores del formulario
  return errors;
}

export default validation;

