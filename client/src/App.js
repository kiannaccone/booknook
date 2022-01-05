import './App.css';
import { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Welcome from './Welcome';
import Main from './Main';
import Header from './Header';

function App() {


  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me").then((resp) => {
      if (resp.ok) {
        resp.json().then(setUser);
      }
    });
  }, []);


  if 
  (!user) return <Welcome onLogin={setUser} />
//   else {
//     return <h2>Loading....</h2>
// }

  return (
    <div>
      <Header user={user}/>
        <Main setUser={setUser} user={user} />
    </div>
  );
}

export default App;
