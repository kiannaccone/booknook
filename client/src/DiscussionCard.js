import {useState} from 'react'
import Comment from './Comment'
import OneComment from './OneComment'

function DiscussionCard ({user, post, foundBook, id, postComment, setAllPost, post : {subject, body}}) {

    // const commentsMap = comments.map((comment) => <OneComment comment={comment}/>)

    return (
        <div>
            <h5>{subject}</h5>
            <p>{body}</p>
            <h6>Posted by: {user.username}</h6>
            {/* <p>{commentsMap}</p> */}
            <Comment foundBook= {foundBook} user = {user} setAllPost= {setAllPost} commentableId={id} commentableType={'Post'}/>
        </div> 
    )
}

export default DiscussionCard;