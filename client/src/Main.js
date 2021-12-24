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
import Comment from "./Comment";


function Main({user, setUser} ) {

    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState("");
    const [bookList, setBookList] = useState([]);
    const [allBooks, setAllBooks] = useState([])
    const [allPost, setAllPost] = useState([])
    const [allComments, setAllComments] = useState([])
    const [bookFollows, setBookFollows] = useState([])



    useEffect(() => {
        fetch("/books")
          .then((resp) => resp.json())
          .then((allBooks) => setAllBooks(allBooks.books));
    }, []);

    useEffect(() => {
        fetch("/posts")
          .then((resp) => resp.json())
          .then((allPost) => setAllPost(allPost));
    }, []);

    useEffect(() => {
        fetch("/comments")
          .then((resp) => resp.json())
          .then((allComments) => setAllComments(allComments));
    }, []);

    useEffect(() => {
        fetch("/follow_books")
          .then((resp) => resp.json())
          .then((bookFollows) => setBookFollows(bookFollows));
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
                <Route exact path="/books/:id">
                    <BookInfo allBooks = {allBooks} setBookFollows= {setBookFollows} user= {user} setAllPost = {setAllPost} allPost={allPost}/>
                </Route>
            </Switch>
        </div>
    )
}

export default Main;