import MentorGallery from "../../components/university/MentorGallery";
import { Modal } from 'semantic-ui-react'
import Button from "../../components/UI-components/Button";
import React from "react"
import "./university.scss";

class TemplateUniversity extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      person: {}
    }
  }

  selectPerson = (p) => {
    this.setState({
      open: true,
      person: p
    })
  }

  setImage = (i) => {
    this.setState({
      open: this.state.open,
      person: this.state.person
    })
  }

  setOpen = (b) => {
    this.setState({
      open: b,
      person: this.state.person
    })
  }

  setPerson = (p) => {
    this.setState({
      open: this.state.open,
      person: p
    })
  }

  render() {
    return (
      <div className="uni-page">
        <h1 className="title">{this.props.name}</h1>
        <img src={this.props.image} className="university-logo" alt="uni logo" />
        <div
          className="aerial-wrapper"
          style={{backgroundImage: "url(" + "https://images.pexels.com/photos/137618/pexels-photo-137618.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" + ")" }}
        >
        </div>
        <p className="instructions">
          Find a mentor you're interested in learning more from and book a virtual
          coffee chat with them! You can use the filters to help narrow down your
          search.
        </p>
  
        <MentorGallery selectFunc={this.selectPerson} setImageFunc={this.setImage} />
  
        <Modal
          onClose={() => this.setOpen(false)}
          onOpen={() => this.setOpen(true)}
          open={this.state.open}
        >
          <Modal.Content>
            <div className="img-wrapper">
              <img src={this.state.person.image}/>
            </div>
            <h1>{this.state.person.name}</h1>
            <p>{this.state.person.story}</p>
            <div className="button-wrapper">
              <a href="https://calendly.com/coffee-hours-mentor/30min" target="_blank">
                <Button text="☕ book a virtual coffee with me!" primary />
              </a>
            </div>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}

export default TemplateUniversity;
