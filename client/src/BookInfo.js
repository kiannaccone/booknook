import BookCard from "./BookCard";
import {useParams} from "react-router-dom"
import Discussion from "./Discussion";
import Comment from "./Comment";

function BookInfo ({ allBooks, setBookFollows, user, setAllPost, allPost, book}) {


    const {id} = useParams()
    
    // console.log(allBooks)

    const foundBook = allBooks.find( b => b.id === id)

    const followBook = allBooks.filter((b) => b.id === id)

    // console.log(foundBook)

    // get the instances from the backend of which books your following allBooks is not correct

    function handleFollowBook () {
        const new_follow_book = {
                title: foundBook.volumeInfo.title,
                author: foundBook.volumeInfo.authors[0],
                summary: foundBook.volumeInfo.description,
                date: foundBook.volumeInfo.publishedDate,
                image: foundBook.volumeInfo.imageLinks?.thumbnail,
                google_book_id: foundBook.id, 
            } 
        fetch ('/follow_books', {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(new_follow_book )
        })
            .then(resp => resp.json())
            .then(data => {
            setBookFollows((current) => [...current, data])
        })
        console.log(new_follow_book )
    }


    // function handleFollowBook () {
    //     const newFollowBook = {
    //         book: followBook.id
    //     }
    //     fetch ('/follow_books', {
    //         method: "POST",
    //         headers: {
    //             "Content-Type" : "application/json"
    //         },
    //         body: JSON.stringify(newFollowBook)
    //     })
    //         .then(resp => resp.json())
    //         .then(data => {
    //         setBookFollows((current) => [...current, data])
    //     })
    //     // console.log(handleFollowBook)
    // }

    

    return (
        <div>
            <img src={foundBook?.volumeInfo.imageLinks?.thumbnail} alt={foundBook?.volumeInfo?.title} /> 
            <h4>{foundBook?.volumeInfo?.title}</h4> 
            <p>by {foundBook?.volumeInfo?.authors}</p>
            <p>Publication Date: {foundBook?.volumeInfo?.publishedDate}</p>
            <p>Summary: {foundBook?.volumeInfo?.description}</p>

            <button className="follow" onClick = {handleFollowBook}>{followBook.length === 0 ? "Follow Book" : "Unfollow Book"}</button>
            <Discussion foundBook= {foundBook} user = {user} setAllPost = {setAllPost} book = {book} allPost = {allPost}/>
            <Comment foundBook= {foundBook} user = {user} setAllPost = {setAllPost}/>
        </div>
    )
}

export default BookInfo;