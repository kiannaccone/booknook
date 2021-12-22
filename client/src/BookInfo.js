import BookCard from "./BookCard";
import {useParams} from "react-router-dom"

function BookInfo ({ allBooks}) {


    const {id} = useParams()
    
    console.log(allBooks)

    const foundBook = allBooks.find( b => b.id === id)

    console.log(foundBook)

    // allBooks.find passs in a callback function if book is === to id then return true 

    return (
        <div>
            <img src={foundBook?.volumeInfo.imageLinks?.thumbnail} alt={foundBook?.volumeInfo?.title} /> 
            <h4>{foundBook?.volumeInfo?.title}</h4> 
            <p>by {foundBook?.volumeInfo?.authors}</p>
            <p>Publication Date: {foundBook?.volumeInfo?.publishedDate}</p>
            <p>Summary: {foundBook?.volumeInfo?.description}</p>
            {/* <button onClick = {handleClick}>{book.length === 0 ? "Follow Book" : "Unfollow Book"}</button> */}
        </div>
    )
}

export default BookInfo;