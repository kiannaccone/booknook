import BookContainer from "./BookContainer";
import BookCard from "./BookCard";

function BookList ({search, setSearch, booksList, books, setBooks}) {

    return (
    <div>
        <BookContainer booksList = {booksList} books= {books} setBooks= {setBooks}search={search} setSearch={setSearch}/>
    </div>
    )
}

export default BookList;