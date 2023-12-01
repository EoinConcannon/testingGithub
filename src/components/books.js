import BookItems from "./bookItems";

// props = properties
function Books(props) {

    return props.myBooks.map( //.map pulls array apart and display each component in the array
        (book) => {
            return <BookItems myBook={book} key={book._id} reload={()=>{props.Reload();}}></BookItems> //getting data from BookItems.js and displays as an array via the map function  (key was isbn before)
        }//reload = variable
    );
}

export default Books;