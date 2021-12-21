import BookCard from "./BookCard";
import Search from "./Search";
import { useState, useEffect } from "react";

function BookContainer ({setSearch, search, books}) {

    const [allBooks, setAllBooks] = useState([])

    useEffect(() => {
        fetch("/books")
          .then((resp) => resp.json())
          .then((allBooks) => setAllBooks(allBooks.books));
      }, []);

//         useEffect(() => {
//         fetch("/books")
//       .then((resp) => resp.json())
//       .then((allBooks) => console.log(allBooks.books));
//   }, []);

// console.log(setAllBooks({id: items.id }))

// console.log(allBooks)

    const userBooks = allBooks.map((book) => {
        
        // console.log(book.volumeInfo, i)

    return <BookCard key={book.id} title={book.volumeInfo.title} author={book.volumeInfo.authors} summary={book.volumeInfo.description} date={book.volumeInfo.publishedDate} image={book.volumeInfo.imageLinks?.thumbnail} book={book}/>




 })
    return (
        <div>
            {/* <Search search={search} setSearch={setSearch} /> */}
            {userBooks}
        </div>
    )
}

export default BookContainer;