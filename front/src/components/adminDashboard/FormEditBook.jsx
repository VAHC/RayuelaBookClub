import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// import { editBook } from "../../redux/actions";

const EditBookForm = ({book}) => {
  const [input, setInput] = useState({
    title: book.title,
    publisher: book.publisher,
    description: book.description,
    price: book.price,
    stock: book.stock,
    publishedDate: book.publishedDate,
    image: book.image,
  });

  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch(editBook(book.id, input));
    // Aquí puedes realizar la petición PUT al backend con los datos del libro actualizados en 'input'
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Title:</label>
      <input
        type="text"
        name="title"
        value={input.title}
        onChange={handleInputChange}
      />
      <br />

      <label>Publisher:</label>
      <input
        type="text"
        name="publisher"
        value={input.publisher}
        onChange={handleInputChange}
      />
      <br />

      <label>Description:</label>
      <input
        type="text"
        name="description"
        value={input.description}
        onChange={handleInputChange}
      />
      <br />

      <label>Price:</label>
      <input
        type="text"
        name="price"
        value={input.price}
        onChange={handleInputChange}
      />
      <br />

      <label>Stock:</label>
      <input
        type="text"
        name="stock"
        value={input.stock}
        onChange={handleInputChange}
      />
      <br />

      <label>Published Date:</label>
      <input
        type="text"
        name="publishedDate"
        value={input.publishedDate}
        onChange={handleInputChange}
      />
      <br />

      <label>Image:</label>
      <input
        type="text"
        name="image"
        value={input.image}
        onChange={handleInputChange}
      />
      <br />

      <button type="submit">Submit</button>
    </form>
  );
};

export default EditBookForm;
