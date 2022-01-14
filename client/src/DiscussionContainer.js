import BookContainer from "./BookContainer";
import DiscussionCard from "./DiscussionCard";

function DiscussionContainer ({allPost, user, foundBook, followBook, allBooks, setAllPost, allComments, setAllComments}) {

    const doraFilter = allPost.filter((post) => foundBook && foundBook.id === post.book.google_book_id)

    const doraMap = doraFilter.map((post) => <DiscussionCard key={post.id} post={post} user = {user} setAllPost= {setAllPost} id={post.id} setAllComments={setAllComments} comments={post.comments} foundBook = {foundBook}/>);


    return (
        <div>
            {doraMap}
        </div>
    )
}

export default DiscussionContainer;