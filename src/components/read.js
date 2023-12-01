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
                        setData(response.data);//uses array name in json file
                    }//response.data = json file
                )
                .catch(//data was NOT found
                    (error) => {
                        console.log(error);
                    }
                )
        }, []//empty array stops repeating
    );

    // e = event
    const ReloadData = (e) => {
        axios.get("http://localhost:4000/api/books")
            .then(
                (response) => {
                    setData(response.data);
                }
            )
            .catch(
                (error) => {
                    console.log(error);
                }
            )
    }

    return (
        <div>
            <h3>Hello from my read component!</h3>
            {<Books myBooks={data} Reload={ReloadData}></Books>} 
            {/* imported from books.js */}
            {/* Reload = variable */}
            {/* this reload data is sent to books.js */}
        </div>
    );
}
export default Read;