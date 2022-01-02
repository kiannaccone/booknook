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
        .then(data => {
            setAllPost((current) => [data,...current])
            console.log(data)
            setPostComment({
                body: ""
            })
        })
        console.log(foundBook)
    }


    return (
     <div id='comment'>
        <form onSubmit={handleSubmit}>
            <label>
                {/* <h4>Comment</h4> */}
                <textarea onChange={handleChange}
                    value={postComment.body} type='text' placeholder='leave a comment...'
                    name="body"/>
            </label>
            <div>
            <button className="allbuttons">Post Comment</button>
            </div>
        </form>
    </div>
    )
}

export default Comment;