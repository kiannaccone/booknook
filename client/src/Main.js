import { Route, Switch } from "react-router";
import NavBar from "./NavBar";
import Welcome from "./Welcome";
import Home from "./Home";
import { useState, useEffect } from "react";
import BookCard from "./BookCard";
import BookList from "./BookList";
import BookContainer from "./BookContainer";


function Main({user, setUser} ) {

    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState("");
    const [bookList, setBookList] = useState([]);



  useEffect(() => {
    fetch("/books")
      .then((resp) => resp.json())
      .then((books) => console.log(books));
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
                    <BookList search = {search} setSearch = {setSearch} bookList = {filterBooks} books = {books}/>
                </Route>
            </Switch>
        </div>
    )
}

export default Main;