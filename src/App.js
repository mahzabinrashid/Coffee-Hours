import { Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Landing from "./pages/Landing";
import UniversityOfWaterloo from "./pages/UniversityOfWaterloo";
import CommunityHub from "./pages/CommunityHub";
import UniversityOfToronto from "./pages/UniversityOfToronto";
import QueensUniversity from "./pages/QueensUniversity";
import McMasterUniversity from "./pages/McMasterUniversity";

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
        <Route path="/communityhub">
          <CommunityHub />
        </Route>
        <Route path="/universities/universityofwaterloo">
          <UniversityOfWaterloo />
        </Route>
        <Route path="/universities/uoft">
          <UniversityOfToronto />
        </Route>
        <Route path="/universities/mac">
          <McMasterUniversity />
        </Route>
        <Route path="/universities/queens">
          <QueensUniversity />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
