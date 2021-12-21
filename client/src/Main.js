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
    const [allPost, setAllPost] = useState([])



//   useEffect(() => {
//     fetch("/books")
//       .then((resp) => resp.json())
//       .then((books) => console.log(books));
//   }, []);

useEffect(() => {
    fetch("/books")
      .then((resp) => resp.json())
      .then((books) => setBooks(books));
  }, []);


  const filterBooks = bookList.filter(books => {
    return(
        books.title.toLowerCase().includes(search.toLowerCase())
        ||
        books.author.toLowerCase().includes(search.toLowerCase())
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
                    <BookList search = {search} setSearch = {setSearch} bookList = {filterBooks} books = {books} setBooks = {setBooks}/>
                </Route>
                <Route exact path= "/discussion">
                    <Discussion allPost={allPost} setAllPost = {setAllPost} user={user} />
                </Route>
                <Route exact path="/books/:id">
                    <BookInfo books={books} bookList={bookList} setBookList={setBookList} setBooks={setBooks}/>
                </Route>
            </Switch>
        </div>
    )
}

export default Main;