// https://react-bootstrap.netlify.app/docs/components/cards
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
                {/* _id = unique identifier , edit brings you to file address*/}
            </Card>
        </div>
    );
}

export default BookItems;