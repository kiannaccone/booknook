import BookCard from "./BookCard";
import {useParams} from "react-router-dom"
import Discussion from "./Discussion";
import Comment from "./Comment";
import { useState, useEffect } from 'react';

function BookInfo ({ allBooks, setBookFollows, bookFollows, user, setAllPost, allPost, book, allComments, setAllComments}) {

    const [wasClicked, setWasClicked] = useState(false)

    const {id} = useParams()
    
    const foundBook = allBooks.find( b => b.id === id)


    const followBook = allBooks.filter((b) => b.id === id)


    useEffect(() => {
        const foundFollow = bookFollows.find(follow => follow.book.google_book_id === id)
        foundFollow ? setWasClicked(true) : setWasClicked(false)
    }, [bookFollows]);

    function handleFollowBook () {
        setWasClicked(current => !current)

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

    function handleUnfollowBook(){
        fetch(`/unfollow/${id}`, {
            method: 'DELETE',
        })
        .then(() => console.log('bye'))
        setBookFollows((currentBookFollows) => {
                return currentBookFollows.filter((follow) => follow.book.google_book_id === id)
            })
        
    }
    
    // console.log(foundBook.id )
    console.log(wasClicked)

    return (
        <div id="bookcard">
            <img src={foundBook?.volumeInfo.imageLinks?.thumbnail} alt={foundBook?.volumeInfo?.title} /> 
            <h4>{foundBook?.volumeInfo?.title}</h4> 
            <p>by {foundBook?.volumeInfo?.authors}</p>
            <p>Publication Date: {foundBook?.volumeInfo?.publishedDate}</p>
            <p id="summary">Summary: {foundBook?.volumeInfo?.description}</p>

            <br/>
            {/* <button className= "allbuttons" onClick = {handleFollowBook}>{wasClicked ? "Following Book" : "Follow Book"}</button> */}
            <button className= "follow" onClick = {handleFollowBook}>{followBook.length === 1 ? "Follow Book" : "Following Book"}</button>
            {/* {wasClicked ?<button className= "allbuttons" onClick={handleFollowBook}>Following Book</button> : <button onClick={handleUnfollowBook}>Follow Book</button>} */}

            {/* <button className= "allbuttons" onClick = {handleFollowBook}></button> */}


            <div id = "diss">
            <Discussion foundBook= {foundBook} user = {user} setAllPost = {setAllPost} book = {book} allPost = {allPost} followBook= {followBook} allBooks={allBooks} allComments={allComments} setAllComments={setAllComments}/>
            </div>

            {/* <Comment foundBook= {foundBook} user = {user} setAllPost = {setAllPost} commentableId={id} commentableType={'Post'}/> */}
        </div>
    )
}

export default BookInfo;