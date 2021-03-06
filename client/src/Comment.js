import { useState } from "react";

function Comment ({ allPost, setAllPost, user, foundBook, commentableType, commentableId}) {

    // const [showComment, setShowComment] = useState(false)
    const [postComment, setPostComment] = useState({
        body: "",
    });

    function handleChange(e) {
        setPostComment((currentComment) => ({
            ...currentComment,
            [e.target.name]: e.target.value,
        }))
    }

    function handleSubmit(e){
        e.preventDefault()
        const newComment = {
            body: postComment.body,
            user_id: user.id,
            commentable_type: commentableType,
            commentable_id: commentableId
    } 
        fetch("/comments", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(newComment)
        })
        .then(resp => resp.json())
        .then((theComment) => {
            setAllPost((currentPosts) => currentPosts.map((p) => p.id === commentableId ? {...p, comments:[...p.comments, theComment]} : p))
            setPostComment({
                body: ""
            })
        })
        console.log(foundBook)
    }


    return (
     <div id='commentform'>
        <form onSubmit={handleSubmit}>
            <label>
                {/* <h4>Comment</h4> */}
                <textarea id="commentbox" required onChange={handleChange}
                    value={postComment.body} type='text' placeholder='write a comment...'
                    name="body"/>
            </label>
            <div>
                <br/>
            <button className="allbuttons">Comment</button>
            </div>
        </form>
    </div>
    )
}

export default Comment;