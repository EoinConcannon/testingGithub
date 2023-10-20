import { useEffect, useState } from "react";//react hook
import Books from "./books";
import axios from "axios";

function Read() {

    const [data, setData] = useState([]);//gives access to state object

    useEffect(
        () => {
            //async web development
            //gets json data, axios doesn't stall website while getting data
            axios.get('https://jsonblob.com/api/jsonblob/1161593332966481920')//promise
                .then(//data was found
                    (response) => {
                        setData(response.data.books);//uses array name in json file
                    }
                )
                .catch(//data was NOT found
                    (error) => {
                        console.log(error);
                    }
                )
        }, []//empty array stops repeating
    );

    return (
        <div>
            <h3>Hello from my read component!</h3>
            {<Books myBooks={data}></Books>}
            {/* imported from books.js */}
        </div>
    );
}
export default Read;