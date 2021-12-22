import BookCard from "./BookCard";
import {useParams} from "react-router-dom"
import Discussion from "./Discussion";
import Comment from "./Comment";

function BookInfo ({ allBooks}) {


    const {id} = useParams()
    
    // console.log(allBooks)

    const foundBook = allBooks.find( b => b.id === id)

    const followBook = allBooks.filter((b) => b.id === id)

    // console.log(foundBook)

    // get the instances from the backend of which books your following allBooks is not correct

    function handleFollow () {
        const newFollowBook = {
            book: followBook.id
    }}

    

    return (
        <div>
            <img src={foundBook?.volumeInfo.imageLinks?.thumbnail} alt={foundBook?.volumeInfo?.title} /> 
            <h4>{foundBook?.volumeInfo?.title}</h4> 
            <p>by {foundBook?.volumeInfo?.authors}</p>
            <p>Publication Date: {foundBook?.volumeInfo?.publishedDate}</p>
            <p>Summary: {foundBook?.volumeInfo?.description}</p>

            <button className="follow" onClick = {handleFollow}>{followBook.length === 0 ? "Follow Book" : "Unfollow Book"}</button>
            <Discussion />
            <Comment />
        </div>
    )
}

export default BookInfo;