import { Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Landing from "./pages/Landing";
import UniversityOfWaterloo from "./pages/universities/UniversityOfWaterloo";
import CommunityHub from "./pages/CommunityHub";
import UniversityOfToronto from "./pages/universities/UniversityOfToronto";
import QueensUniversity from "./pages/universities/QueensUniversity";
import McMasterUniversity from "./pages/universities/McMasterUniversity";
import BritishColumbia from "./pages/universities/BritishColumbia";
import Western from "./pages/universities/Western";

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
        <Route path="/universities/universityoftoronto">
          <UniversityOfToronto />
        </Route>
        <Route path="/universities/mcmasteruniversity">
          <McMasterUniversity />
        </Route>
        <Route path="/universities/queensuniversity">
          <QueensUniversity />
        </Route>
        <Route path="/universities/universityofbritishcolumbia">
          <BritishColumbia />
        </Route>
        <Route path="/universities/westernuniversity">
          <Western />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
