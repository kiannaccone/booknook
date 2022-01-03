import BookCard from "./BookCard";
import {useParams} from "react-router-dom"
import Discussion from "./Discussion";
import Comment from "./Comment";

function BookInfo ({ allBooks, setBookFollows, user, setAllPost, allPost, book, allComments, setAllComments}) {


    const {id} = useParams()
    
    const foundBook = allBooks.find( b => b.id === id)


    const followBook = allBooks.filter((b) => b.id === id)


    function handleFollowBook () {

        const new_follow_book = {
            
                title: foundBook.volumeInfo.title,
                author: foundBook.volumeInfo.authors[0],
                summary: foundBook.volumeInfo.description,
                date: foundBook.volumeInfo.publishedDate,
                image: foundBook.volumeInfo.imageLinks?.thumbnail,
                google_book_id: foundBook.id, 
            } 
            const new_follow = {
            user_id: user.id,
            new_follow_book
            }
        fetch ('/follow_books', {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(new_follow)
        })
            .then(resp => resp.json())
            .then(data => {
            setBookFollows((current) => [...current, data])
        })
        // console.log(new_follow_book)
    }
    
    console.log()

    return (
        <div>
            <img src={foundBook?.volumeInfo.imageLinks?.thumbnail} alt={foundBook?.volumeInfo?.title} /> 
            <h4>{foundBook?.volumeInfo?.title}</h4> 
            <p>by {foundBook?.volumeInfo?.authors}</p>
            <p>Publication Date: {foundBook?.volumeInfo?.publishedDate}</p>
            <p>Summary: {foundBook?.volumeInfo?.description}</p>

            <button className= "follow" onClick = {handleFollowBook}>{followBook.length === 1 ? "Follow Book" : "Following Book"}</button>

            <Discussion foundBook= {foundBook} user = {user} setAllPost = {setAllPost} book = {book} allPost = {allPost} followBook= {followBook} allBooks={allBooks} allComments={allComments} setAllComments={setAllComments}/>

            {/* <Comment foundBook= {foundBook} user = {user} setAllPost = {setAllPost} commentableId={id} commentableType={'Post'}/> */}
        </div>
    )
}

export default BookInfo;