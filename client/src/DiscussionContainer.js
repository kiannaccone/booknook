import BookContainer from "./BookContainer";
import DiscussionCard from "./DiscussionCard";

function DiscussionContainer ({allPost, user, foundBook, followBook, allBooks, setAllPost, allComments, setAllComments}) {

    const doraFilter = allPost.filter((post) => post.user.id === user.id)
    const doraMap = doraFilter.map((post) => <DiscussionCard key={post.id} post={post} user = {user} setAllPost= {setAllPost} id={post.id} setAllComments={setAllComments} comments={post.comments} />);

// const doraFilter = allPost.filter((book) => book.user.id === user.id)

    return (
        <div>
            {doraMap}
        </div>
    )
}

export default DiscussionContainer;