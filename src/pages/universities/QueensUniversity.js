
import universityLogo from "../../assets/queens-logo.png"
import uwaerial from "../../assets/uw_aerial.jpg"
import "./university.scss";
import MentorGallery from "../../components/university/MentorGallery";
export default function QueensUniversity() {
  return (
    <div className="uni-page">
      <h1 className="title">Queens University</h1>
      <img src = {universityLogo} className="university-logo" alt="uni logo"/>
      <div
        className="aerial-wrapper"
        style={{backgroundImage: "url(" + uwaerial + ")" }}
      >
      </div>
      <p>Find a mentor you're interested in learning more from and book a virtual coffee chat with them! You can use the filters to help narrow down your search.</p>

      <MentorGallery/>
    </div>
  );
}
