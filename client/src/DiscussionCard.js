import {useState} from 'react'
import Comment from './Comment'
import OneComment from './OneComment'

function DiscussionCard ({user, post, comments, foundBook, id, postComment, setAllPost, post : {subject, body}}) {
// console.log(comments)
    const commentsMap = comments.map((comment) => <OneComment key = {comment.id} comment= {comment} user = {user}/>)
    // console.log(comments)

    return (
        <div id = "disscard">
            <h3>{subject}</h3>
            <p>{body}</p>
            <h6>Posted by: {user.username}</h6>
            <p id = "commenttext">Comments:{commentsMap}</p>
            <Comment foundBook= {foundBook} user = {user} setAllPost= {setAllPost} commentableId={id} commentableType={'Post'}/>
        </div> 
    )
}

export default DiscussionCard;