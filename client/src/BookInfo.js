import BookCard from "./BookCard";

function BookInfo ({book, setBookList, id, title, author, summary, image, date}) {
    return (
        <div>
            <img src={image} alt={title} /> 
            <h4>{title}</h4> 
            <p>by {author}</p>
            <p>Publication Date: {date}</p>
            <p>Summary: {summary}</p>
            {/* <button onClick = {handleClick}>{book.length === 0 ? "Follow Book" : "Unfollow Book"}</button> */}
        </div>
    )
}

export default BookInfo;