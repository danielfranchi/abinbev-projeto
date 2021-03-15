import { Route, Switch } from "react-router-dom";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import Product from "../pages/Product/Product";
import User from "../pages/User/User";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/home" exact component={Home} />
      <Route path="/product" exact component={Product} />
      <Route path="/user" exact component={User} />
    </Switch>
  );
}

export default Routes;
