import "./ProfilePicture.scss";
const ProfilePicture = (props) => {
  return (
    <div className="avatar-circle">
      <span className="initials">{props.name.split(' ').map(function(item){return item[0]}).join('')}</span>
    </div>
  );
};
export default ProfilePicture;
