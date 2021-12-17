import './App.css';
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Welcome from './Welcome';
import Home from './Home';

function App() {

  const [books, setBooks] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((resp) => {
      if (resp.ok) {
        resp.json().then(setUser);
      }
    });
  }, []);

  useEffect(() => {
    fetch("/books")
      .then((resp) => resp.json())
      .then((data) => console.log(data));
  }, []);

  if (!user) return <Welcome onLogin={setUser} />

  return (
    <div>
      <Home setUser={setUser} user={user}/>
    </div>
  );
}

export default App;
