import "./CommunityHubCard.scss";
import ProfilePicture from "../UI-components/ProfilePicture";
export default function CommunityHub(props) {
  return (
    <div className="hub_card">
      <div className="header">
        <ProfilePicture name={props.pic} />

        <h3>{props.name}</h3>
      </div>
      <p className="bold">Key Takeaways</p>

      <p>{props.comment}</p>
    </div>
  );
}
