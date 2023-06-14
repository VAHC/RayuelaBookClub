const validation = (input) => {
    let errors = {};
    
      // Validación para el campo "title"
      if (!input.title) {
        errors.title = 'Debés darle un título a tu reseña';
      }
    
      // Validación para el campo "comment"
      if (!input.comment) {
        errors.comment = 'Debés dejar una reseña';
      } 
    
      // Validación para el campo "qualification"
      if (!input.qualification) {
        errors.qualification = 'Debés calificar el libro, elegí una opción';
      }

      // Retorna los errores del formulario
      return errors;
}

export default validation;