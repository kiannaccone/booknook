import BookContainer from "./BookContainer";
import DiscussionCard from "./DiscussionCard";

function DiscussionContainer ({allPost}) {

    const dora = allPost.map((post) => <DiscussionCard key={post.id} post={post}/> );


    return (
        <div>
            {dora}
        </div>
    )
}

export default DiscussionContainer;