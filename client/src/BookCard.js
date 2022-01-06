import { useHistory } from "react-router-dom";
import BookInfo from "./BookInfo";

function BookCard ({book, id, title, author, image}) {

    let history = useHistory();
    const handleClick = (e) => {
    e.preventDefault();
    history.push(`/books/${book.id}`);
  };

    return (
        <div id= "bookcards" onClick = {handleClick}>
            <img id="bookimage" src={image} alt={title} /> 
            <h4>{title}</h4> 
            <p>by {author}</p>
        </div>
    );
}

export default BookCard;