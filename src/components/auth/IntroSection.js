import coffeeGraphic from "../../assets/form-graphic.png"

export default function IntroSection() {
    return (
      <div className="intro-section">
        <h1>Welcome to<br />Coffee Hours!</h1>
        <h3>Make personable connections<br/>with a click of a button.</h3>
        <img src={coffeeGraphic} alt="cool coffee graphic" />
      </div>
    );
  }
  