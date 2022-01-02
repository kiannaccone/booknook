

function OneComment({comment: {body, user}}){

    return(
        <div>
            <p>{body}</p>
            <p>Posted by: {user.username}</p>
        </div>
    )
}

export default OneComment;