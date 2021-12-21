import { useState } from "react";

function Discussion ({allPost, setAllPost, user}) {

    const [postDiscussion, setPostDiscussion] = useState({
        subject: "",
        body: "",
        user_id: user.id, 
        // book_id: 
    });
    function handleChange(e) {
        setPostDiscussion((currentDiscussion) => ({
            ...currentDiscussion,
            [e.target.name]: e.target.value,
        }))
    }

    function handleSubmit(e){
        e.preventDefault()
        fetch("/posts", {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body:JSON.stringify({...postDiscussion, book: {}})
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
    }

    

    return (
        <div id='discussion'>
        <form onSubmit={handleSubmit}>
            <label>
                <h4>Subject</h4>
                <input onChange={handleChange}
                    value={postDiscussion.subject} type='text' placeholder='subject'
                    name="subject"/>
            </label>
            <label>
                <h4>Body</h4>
                <textarea onChange={handleChange} value={postDiscussion.body} type='text' placeholder='body'
                name="body"/>
            </label>
            <div>
            <button className="allbuttons">Start Discussion</button>
            </div>
        </form>
    </div>
    )
}
export default Discussion;