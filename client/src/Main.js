import { Route, Switch } from "react-router";
import NavBar from "./NavBar";
import Welcome from "./Welcome";
import Home from "./Home";
import { useState, useEffect } from "react";
import BookCard from "./BookCard";
import BookList from "./BookList";
import BookContainer from "./BookContainer";
import Discussion from "./Discussion";
import BookInfo from "./BookInfo";


function Main({user, setUser} ) {

    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState("");
    const [bookList, setBookList] = useState([]);
    const [allBooks, setAllBooks] = useState([])


    useEffect(() => {
        fetch("/books")
          .then((resp) => resp.json())
          .then((allBooks) => setAllBooks(allBooks.books));
      }, []);



 const filterBooks = allBooks.filter(books => {
    return(
        books.volumeInfo.title.toLowerCase().includes(search.toLowerCase())
        ||
        books.volumeInfo.authors[0].toLowerCase().includes(search.toLowerCase())
    )
})

    return (
        <div>
            <NavBar onLogout={setUser} />
            <Switch>
                <Route exact path="/">
                    <Welcome />
                </Route>
                <Route exact path= "/home">
                    <Home setUser={setUser} user={user}/>
                </Route>
                <Route exact path= "/books">
                    <BookContainer search = {search} setSearch = {setSearch}  books = {books} setBooks = {setBooks} allBooks = {filterBooks}/>
                </Route>
                <Route exact path= "/discussion">
                    <Discussion  user={user} />
                </Route>
                <Route exact path="/books/:id">
                    <BookInfo allBooks = {allBooks} />
                </Route>
            </Switch>
        </div>
    )
}

export default Main;