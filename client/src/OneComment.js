

function OneComment({comment: {body, user:{username}}}){

    return(
        <div>
            <p>{body}</p>
            <div>
             by: {username}
            </div>
        </div>
    )
}

export default OneComment;