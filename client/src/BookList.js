import BookContainer from "./BookContainer";

function BookList ({search, setSearch, booksList}) {

    return (
    <div>
        <BookContainer books = {booksList} search={search} setSearch={setSearch}/>
    </div>
    )
}

export default BookList;