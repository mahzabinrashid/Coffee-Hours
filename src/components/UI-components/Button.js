import React from "react";
import "./Button.scss";

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.class = "button";

    if (this.props.secondary) this.class += " secondary";
    else this.class += " primary";

    if (this.props.big) this.class += " big";
    else if (this.props.biig) this.class += " biig";
  }

  render() {
    return <button className={this.class}>{this.props.text}</button>;
  }
}

export default Button;
