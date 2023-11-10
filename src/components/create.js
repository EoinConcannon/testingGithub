import { useState } from "react";
import axios from "axios";

function Create() {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [cover, setCover] = useState('');

    const handleSubmit = (e) => {//when the submit button is clicked
        e.preventDefault();//stops being called multiple times

        console.log("Title: " + title + "\nAuthor: " + author + "\nCover: " + cover)//displays user inputs to console

        const book = ({
            title: title,
            cover: cover,
            author: author
        });

        axios.post("http://localhost:4000/api/books", book)
            .then()
            .catch();
    }
    return (
        <div>
            <h3>Hello from my create component!</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Add Book Title: </label>
                    <input type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}//invokes title and assigns the text to title
                    />
                </div>
                <div className="form-group">
                    <label>Add Book Author: </label>
                    <input type="text"
                        className="form-control"
                        value={author}
                        onChange={(e) => { setAuthor(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Add Book Cover: </label>
                    <input type="text"
                        className="form-control"
                        value={cover}
                        onChange={(e) => { setCover(e.target.value) }}
                    />
                </div>
                <div>
                    <input type="submit" value="Add Book"></input>
                </div>

            </form>
        </div>
    );
}
export default Create;