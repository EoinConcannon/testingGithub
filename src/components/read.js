import { useEffect, useState } from "react";//react hook
import Books from "./books";
import axios from "axios";

function Read() {

    const [data, setData] = useState([]);//gives access to state object

    useEffect(
        () => {
            //async web development
            //gets json data, axios doesn't stall website while getting data
            axios.get("http://localhost:4000/api/books")//promise
                .then(//data was found
                    (response) => {
                        setData(response.data.myBooks);//uses array name in json file
                    }//response.data = json file
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