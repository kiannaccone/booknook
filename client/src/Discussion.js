import { useState } from "react";
import DiscussionContainer from "./DiscussionContainer";

function Discussion ({allPost, setAllPost, user, foundBook, book, followBook, allBooks, allComments, setAllComments}) {


    const [postDiscussion, setPostDiscussion] = useState({
        subject: "",
        body: "",
    });
    function handleChange(e) {
        setPostDiscussion((currentDiscussion) => ({
            ...currentDiscussion,
            [e.target.name]: e.target.value,
        }))
    }

    function handleSubmit(e){
        e.preventDefault()
        const newDiscussion = {
              
            subject: postDiscussion.subject,
            body: postDiscussion.body,
            user_id: user.id,
            book_id: foundBook.id,
            
                new_book: {
                    title: foundBook?.volumeInfo?.title,
                    author: foundBook?.volumeInfo?.authors[0],
                    summary: foundBook?.volumeInfo?.description,
                    date: foundBook?.volumeInfo?.publishedDate,
                    image: foundBook?.volumeInfo?.imageLinks?.thumbnail,
                    google_book_id: foundBook.id, 
                }
       
        } 
        fetch("/posts", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body:JSON.stringify(newDiscussion)
        })
        .then(resp => resp.json())
        .then(data => {
            setAllPost((current) => [data,...current])
            console.log(data)
            setPostDiscussion({
                subject: "",
                body: ""
            })
        })
        console.log(foundBook)
    }

    

    return (
        <div id='discussion'>
        <form onSubmit={handleSubmit}>
            <label>
                <h4>Subject</h4>
                <input onChange={handleChange} value={postDiscussion.subject} type='text' placeholder='subject' name="subject"/>
            </label>
            <label>
                <h4>Body</h4>
                <textarea onChange={handleChange} value={postDiscussion.body} type='text' placeholder='body' name="body"/>
            </label>
            <div>
                <button className="allbuttons">Start Discussion</button>
            </div>
        </form>
        <DiscussionContainer allPost = {allPost} user = {user} foundBook = {foundBook} allBooks= {allBooks} setAllPost={setAllPost} allComments ={allComments} setAllComments ={setAllComments}/>
    </div>
    )
}


export default Discussion;