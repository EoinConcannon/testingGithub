// https://react-bootstrap.netlify.app/docs/components/cards
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

// this is the edit page GUI
function BookItems(props) {
    return (
        <div>
            {/* {console.log(props.myBook.title)} */}
            {/* gets json data from books.js, displays it with {props.myBook.} */}
            <Card>
                <Card.Header>{props.myBook.title}</Card.Header>
                <Card.Body>
                    <img src={props.myBook.cover}></img>
                    <footer>
                        <p>{props.myBook.author}</p>
                    </footer>
                </Card.Body>
                <Link to={"/edit/" + props.myBook._id} className='btn btn-primary'>Edit</Link>
                <Button variant='danger' onClick={
                    (e) => {
                        axios.delete("http://localhost:4000/api/book/" + props.myBook._id)
                            .then((res) => {
                                let reload = props.reload();
                            })
                            .catch(); // then/catch = promise
                    }
                }>Delete</Button>
                {/* _id = unique identifier , edit brings you to file address*/}
            </Card>
        </div>
    );
}

export default BookItems;