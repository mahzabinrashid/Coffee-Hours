
import universityLogo from "../../assets/waterloo-logo-round.png";
import uwaerial from "../../assets/uw_aerial.jpg";
import MentorGallery from "../../components/university/MentorGallery";
import { Modal } from 'semantic-ui-react'
import { useState } from "react";
import Button from "../../components/UI-components/Button";
import "./university.scss";

import personImage from "../../assets/person-b.jpeg"

export default function UniversityOfWaterloo() {
  const [open, setOpen] = useState(false);
  const [person, setPerson] = useState({});
  const [image, setImage] = useState(null);

  let selectPerson = (p) => {
    setPerson(p);
    setOpen(true);
  }

  return (
    <div className="uni-page">
      <h1 className="title">University of Waterloo</h1>
      <img src={universityLogo} className="university-logo" alt="uni logo" />
      <div
        className="aerial-wrapper"
        style={{ backgroundImage: "url(" + uwaerial + ")" }}
      ></div>
      <p>
        Find a mentor you're interested in learning more from and book a virtual
        coffee chat with them! You can use the filters to help narrow down your
        search.
      </p>

      <MentorGallery selectFunc={selectPerson} setImageFunc={setImage} />

      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
      >
        <Modal.Content>
          <div className="img-wrapper">
            <img src={image}/>
          </div>
          <h1>{person.name}</h1>
          <p>{person.story}</p>
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
