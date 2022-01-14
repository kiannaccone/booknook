

function OneComment({comment: {body, user}}){

    return(
        <div id="comment">
            <p>{body}</p>
            <h6>Posted by: {user.username}</h6>
        </div>
    )
}

export default OneComment;