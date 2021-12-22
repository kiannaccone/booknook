import { useState } from "react";

function Comment ({setAllPost}) {

    const [postComment, setPostComment] = useState({
        body: "",
        // user_id: user.id, 
        // book_id: 
    });

    function handleChange(e) {
        setPostComment((currentComment) => ({
            ...currentComment,
            [e.target.name]: e.target.value,
        }))
    }

    function handleSubmit(e){
        e.preventDefault()
        fetch("/comments", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body:JSON.stringify({...postComment, book: {}})
        })
        .then(resp => resp.json())
        .then(data => {
            setAllPost((current) => [data,...current])
            console.log(data)
            setPostComment({
                body: ""
            })
        })
    }


    return (
     <div id='comment'>
        <form onSubmit={handleSubmit}>
            <label>
                <h4>Comment</h4>
                <textarea onChange={handleChange}
                    value={postComment.body} type='text' placeholder='comment'
                    name="comment"/>
            </label>
            <div>
            <button className="allbuttons">Post Comment</button>
            </div>
        </form>
    </div>
    )
}

export default Comment;