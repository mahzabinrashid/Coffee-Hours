import { MentorGallery, Mentor } from "../components/university/MentorGallery";
import universityLogo from "../assets/mcmaster-logo.png"
import uwaerial from "../assets/uw_aerial.jpg"
import imageA from "../assets/person-a.jpeg"
import imageB from "../assets/person-b.jpeg"
import imageC from "../assets/person-c.jpeg"

import "./university.css"

export default function McMasterUniversity() {
  return (
    <div className="uni-page">
      <h1 className="title">McMaster University</h1>
      <img src = {universityLogo} className="university-logo" />
      <div
        className="aerial-wrapper"
        style={{backgroundImage: "url(" + uwaerial + ")" }}
      >
      </div>
      <p>Find a mentor you're interested in learning more from and book a virtual coffee chat with them! You can use the filters to help narrow down your search.</p>

      <MentorGallery>
        <Mentor
          name="Priscilla Preez"
          image={imageB}
          story="As the first girl in my family of immigrants to pursue a degree, there have been no shortage of obstacles along the way. From dealing with losing family mem..."
        />
        <Mentor
          name="Tristan Martin"
          image={imageA}
          story="I was born without hands and feet. It’s a rare condition called congenital amputation. Living with that 
              adversity has made me who I am today. My pa..."
        />
        <Mentor
          name="Janet Jonea"
          image={imageC}
          story="I’m a sociology major by day, and an aspiring DJ by night and I love it. After constantly being let down f..."
        />
      </MentorGallery>
    </div>
  );
}
