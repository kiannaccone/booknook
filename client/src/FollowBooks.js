import BookCard from "./BookCard";

function FollowBooks ({user}) {


    console.log()
    return (
         <div>
           {/* <BookCard /> */}
           {/* <img id="bookimage" src={image} alt={title} /> 
            <h4>{title}</h4> 
            <p>by {author}</p> */}
        </div>
    )
}

export default FollowBooks;

// make a fetch request to get all the follow_book instances, make sure they have the google_book_id
// set the state of the follow books in the common parent of the component you want to display all of the books you follow and the component you are clicking on the button to follow the book
// send the follow book instances to the component where the follow button is and see if that book is followed, if it’s not display “follow book” if it is display “following book"