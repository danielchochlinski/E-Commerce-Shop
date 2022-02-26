import Home from "../src/pages/Home";
import ProductList from "../src/pages/ProductList";
import Product from "../src/pages/Product";
import Register from "../src/pages/Register";
import Login from "../src/pages/Login";
import Cart from "../src/pages/Cart";
import Success from "../src/pages/Success"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";

const App = () => {

const user = useSelector((state) => state.user.currentUser)
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/products/:category">
          <ProductList />
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
        <Route path="/login">
          {user ? <Redirect to="/" /> : <Login />}
          <Login />
        </Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
          <Register />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
