import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { modifyBook } from "../../redux/action";

const EditBookForm = ({ book }) => {
    const [formComplete, setFormComplete] = useState(false); //estodo local para manejar el boton del submit y el envio de datos
    const [success, setSuccess] = useState(false); // estado local para manejar la alerta de ok

    const [input, setInput] = useState({
        id: book.id,
        title: book.title,
        publisher: book.publisher,
        description: book.description,
        price: book.price,
        stock: book.stock,
        publishedDate: book.publishedDate,
        image: book.image,
        genders: book.genders,
        authors: book.authors,
    });

    useEffect(() => {
        console.log(input);
        let values = Object.values(input);
        let notComplete = values.filter(
            (value) => value === "" || value.length === 0
        );
        if (!notComplete.length) setFormComplete(true);
    }, [input]);

    const dispatch = useDispatch();

    const handleInputChange = (e) => {
        if (e.target.name === "authors") {
            setInput({
                ...input,
                authors: [e.target.value], //traigo todo lo que esta en el array y le concateno el nuevo valor
            });
        } else if (e.target.name === "genders") {
            setInput({
                ...input,
                genders: [e.target.value], //traigo todo lo que esta en el array y le concateno el nuevo valor
            });
        } else if (e.target.name === "price") {
            setInput({
                ...input,
                price: parseInt(e.target.value),
            });
        } else if (e.target.name === "stock") {
            setInput({
                ...input,
                stock: parseInt(e.target.value),
            });
        } else {
            setInput({
                ...input,
                [e.target.name]: e.target.value,
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formComplete) {
            dispatch(modifyBook(input));
            setSuccess(true); // al setearse en true apareceria un alert "succes"
            setInput({
                id: "",
                title: "",
                publisher: "",
                description: "",
                price: "",
                stock: "",
                publishedDate: "",
                image: "",
                authors: [],
                genders: [],
            });
        } else {
            alert("missing or incorrect data");
        }
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
            <label>Genero:</label>
            <input
                type="text"
                name="genders"
                value={input.genders}
                onChange={handleInputChange}
            />
            <br />
            <label>Autor:</label>
            <input
                type="text"
                name="authors"
                value={input.authors}
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

            <button disabled={!formComplete} type="submit">
                Submit
            </button>
        </form>
    );
};

export default EditBookForm;
