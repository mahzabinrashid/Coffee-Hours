import React from "react"
import "./UniversityGallery.css"


class UniversityGallery extends React.Component {
  render() {
    return(
      <div className="uni-gallery">
        <h4>Choose a university to get started!</h4>
        <div className="card-wrapper">
          {this.props.children}
        </div>
      </div>
    )
  }
}

class UniversityCard extends React.Component {
  render() {
    return(
      <div className="uni-card">
        <img src={this.props.logo} alt="uni logo" />
        <p className="label">{this.props.name}</p>
      </div>
    )
  }
}

export { UniversityGallery, UniversityCard };