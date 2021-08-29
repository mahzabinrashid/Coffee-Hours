import "./UniversityCard.scss";
export default function UniversityCard(props) {
  return (
    <div className="uni_card">
      <img src={props.logo} alt="uni logo" />
      <p className="label">{props.name}</p>
    </div>
  );
}
