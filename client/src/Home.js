import BookCard from "./BookCard";
import FollowBooks from "./FollowBooks";

function Home ({user, bookFollows, setBookFollows}) {
    return(
        <div>
            <FollowBooks user={user}/>
        </div>
    )
}

export default Home;