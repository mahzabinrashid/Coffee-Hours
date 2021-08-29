
import universityLogo from "../../assets/mcmaster-logo.png";
import uwaerial from "../../assets/uw_aerial.jpg";
import MentorGallery from "../../components/university/MentorGallery";
import "./university.scss";

export default function McMasterUniversity() {
  return (
    <div className="uni-page">
      <h1 className="title">McMaster University</h1>
      <img src={universityLogo} className="university-logo" alt="uni logo"/>
      <div
        className="aerial-wrapper"
        style={{ backgroundImage: "url(" + "https://images.pexels.com/photos/137618/pexels-photo-137618.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" + ")" }}
      ></div>
      <p>
        Find a mentor you're interested in learning more from and book a virtual
        coffee chat with them! You can use the filters to help narrow down your
        search.
      </p>

      <MentorGallery/>
    </div>
  );
}
