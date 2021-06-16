// Views
import LogIn from '../views/LogIn';
import Home from '../views/Home';

// Routers
import {
  Switch,
  Route,
  Redirect,
  // Link,
} from "react-router-dom";

function Routers() {
  return (
    // <Switch location={item}>
    <Switch>
      <Route path={`/auth`} component={ LogIn }/>
      <Route path={`/home`} component={ Home }/>
      <Redirect exact from="/" to="/auth" />
    </Switch>
  )
}

export default Routers;
