import landing from "./landing.png";
import "./Landing.scss"
export default function SignIn() {
  return (
    <div class="cover">
        <div className="content">
        <h1>Deeper Connections made easy.</h1>
        <p>Learn from current students, faculty members and alumini from universities across Canada through virtual coffee chats!</p>
        </div>
      <img src={landing} />
    </div>
  );
}
