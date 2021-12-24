

function DiscussionCard ({post : {subject, body}}) {
    return (
        <div>
            <h5>{subject}</h5>
            <p>{body}</p>
        </div>
    )
}

export default DiscussionCard;