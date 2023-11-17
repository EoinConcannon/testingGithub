// https://react-bootstrap.netlify.app/docs/components/cards
import { Card } from 'react-bootstrap';

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
            </Card>
        </div>
    );
}

export default BookItems;