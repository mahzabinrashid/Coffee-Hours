import { Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Landing from "./pages/Landing";
import UniversityOfWaterloo from "./pages/UniversityOfWaterloo";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/landing" exact>
          <Landing />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/signin">
          <SignIn />
        </Route>
        <Route path="/universities/universityofwaterloo">
          <UniversityOfWaterloo />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
