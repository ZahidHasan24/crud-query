import { Switch, Route } from "react-router-dom";
import BooksList from "./components/BooksList";
import UpdateBook from "./components/UpdateBook";
import CreateBook from "./components/CreateBook";
import Navbar from "./components/Shared/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/create-book">
          <CreateBook />
        </Route>
        <Route path="/update-book/:id">
          <UpdateBook />
        </Route>
        <Route path="/">
          <BooksList />
        </Route>
      </Switch>
    </>
  );
}

export default App;
