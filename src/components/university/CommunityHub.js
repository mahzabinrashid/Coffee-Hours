import CommunityHubGallery from "./CommunityHubGallery";
import CommunityHubPost from "./CommunityHubPost";
export default function CommunityHub() {
  return (
    <div>
      <h1>Community Hub</h1>
      <p>Share the key takeways from your coffee chats!</p>
      <CommunityHubPost />
      <CommunityHubGallery />
    </div>
  );
}
