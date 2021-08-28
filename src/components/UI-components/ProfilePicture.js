import "./ProfilePicture.scss";
const ProfilePicture = (props) => {
  return (
    <div className="avatar-circle">
      <span className="initials">{props.name.charAt(0)}</span>
    </div>
  );
};
export default ProfilePicture;
