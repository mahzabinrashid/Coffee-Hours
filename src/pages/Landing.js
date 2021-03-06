import Button from "../components/UI-components/Button";
import { Link } from "react-router-dom";
import landing from "../assets/landing-long.png";
import "./Landing.scss";
export default function SignIn() {
  return (
    <div className="cover">
      <div className="landing_content">
        <h1>
          Deeper Connections
          <br />
          made easy.
        </h1>
        <p>
          Learn from current students, faculty members and alumini from
          universities across Canada through virtual coffee chats!
        </p>
        <Link to="/signup">
          <Button text="join now" big />
        </Link>
      </div>
      <img src={landing} alt="" />
    </div>
  );
}
