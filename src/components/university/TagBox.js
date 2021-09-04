export default function Tagbox(props) {
  const allTags = [
    "‍🎓 First Year",
    "⚙️ Engineer",
    "🌈 LGBTQ+",
    "🌎 International",
    "🔬 STEM",
    "👧  Feminist",
    "🗳️ Politics",
    "🏋️ Fitness",
    "🎶 Music",
  ];
  return (
    <div className="tag_box">
      {allTags.map((tag) => (
        <div className="tag" onClick={props.chosenTag}>
          <p>{tag}</p>
        </div>
      ))}
    </div>
  );
}
