import React from "react";
import "./Button.css"

class Button extends React.Component {
  constructor(props) {
    super(props);

    this.class = "button"
    
    if (this.props.secondary)
      this.class += " secondary"
    else
      this.class  += " primary"
      
    if (this.props.big) {
      this.class += " big"
    }
  }

  render() {
    return(
      <button className={this.class}>
        {this.props.text}
      </button>
    )
  }
}

export default Button;
  