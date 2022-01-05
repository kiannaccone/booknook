import BookCard from "./BookCard";
import FollowBooks from "./FollowBooks";

function Home ({user, bookFollows, setBookFollows}) {

    if ((user.follow_books.length > 0 )) {

    const bookIds = user.follow_books.map((novel) => novel.id)
    
    // const followsFilter = bookFollows.filter((follow) => follow.book.google_book_id === bookIds)

    const followsFilter = bookFollows.filter((follow) => bookIds.includes(follow.user.follow_books))

    const followsMap = followsFilter.map((follow) => <FollowBooks key={follow.id} follow={follow}/>)

    return(
        <div>
            {followsMap}
        </div>
    )

} else {
    return (
        <h1 id="hometext">You are currently not following any books. Please go to Search Books to follow your favorite books.</h1>
    )}
}

export default Home;