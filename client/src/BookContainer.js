import BookCard from "./BookCard";
import Search from "./Search";

function BookContainer ({books, setSearch, search}) {


const bookCards = books.map((book) => <BookCard key={book.id} book = {book}/>);

    return (
        <div>
            <Search search={search} setSearch={setSearch} />
            <> {bookCards} </>
        </div>
    )
}

export default BookContainer;