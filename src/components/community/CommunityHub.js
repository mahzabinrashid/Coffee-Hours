import CommunityHubGallery from "./CommunityHubGallery";
import CommunityHubPost from "./CommunityHubPost";
import "./CommunityHub.scss"
export default function CommunityHub() {
  return (
    <div class="community_hub">
      <h1>Community Hub</h1>
      <p className="community_hub_text">Share the key takeways from your coffee chats!</p>
      <CommunityHubPost />
      <CommunityHubGallery />
    </div>
  );
}
