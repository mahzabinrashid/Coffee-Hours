import "./CommunityHubPost.scss";
import ProfilePic from "../UI-components/ProfilePicture";
import Button from "../UI-components/Button.js";

function CommunityHubPost(props) {
  return (
    <div className="hub_post">
      {props.auth && (
        <form onSubmit={props.formSubmission}>
          <div className="comment">
            <ProfilePic name={props.name} />
            <textarea
              type="text"
              id="comment"
              placeholder="Type here..."
              onChange={props.commentInputChangeHandler}
              cols="95"
              rows="5"
              value={props.enteredComment}
            ></textarea>
          </div>
          <p className="error_message">{props.error}</p>
          <div className="hub_button_container">
            <Button text="Submit Comment" />
          </div>
        </form>
      )}
      {!props.auth && (
        <p className="loggedout">
          <a href="/signin">Log in</a> to post your own comment! {props.auth}
        </p>
      )}
    </div>
  );
}

export default CommunityHubPost;
