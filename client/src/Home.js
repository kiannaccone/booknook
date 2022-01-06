import BookCard from "./BookCard";
import FollowBooks from "./FollowBooks";
import { useHistory } from "react-router-dom";

function Home ({user, bookFollows, setBookFollows, books, book, id, title, author, image}) {

    
    let history = useHistory();
    const handleClick = (e) => {
    e.preventDefault();
    history.push(`/books/${book.id}`);
  };

    if ((user.follow_books.length > 0 )) {

    const followsFilter = bookFollows.filter((follow) => follow.user.id === user.id)

    const followsMap = followsFilter.map((follow) => <BookCard key={follow.id} follow={follow} books={books} author={follow.book.author} image={follow.book.image} title={follow.book.title}/>)


    return(
        <div>
            <h3 id="homefollow">Books You Follow</h3>
            {followsMap}
        </div>
    )

} else {
    return (
        <h1 id="hometext">You are currently not following any books. Please go to Search Books to follow your favorite books.</h1>
    )}
}

export default Home;