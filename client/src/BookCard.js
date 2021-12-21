import { useHistory } from "react-router-dom";

function BookCard ({id, book, title, author, summary, image, date}) {

    let history = useHistory();
    const handleClick = (e) => {
    e.preventDefault();
    history.push(`/books/${book.id}`);
  };

    return (
        <div onClick = {handleClick}>
            <img src={image} alt={title} /> 
            <h4>{title}</h4> 
            <p>by {author}</p>
        </div>
    );
}

export default BookCard;