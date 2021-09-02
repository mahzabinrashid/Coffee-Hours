import "./Hero.scss";
export default function Hero(props) {
  return (
    <div className="hero">
      <img src={props.image} className="university_logo" alt="uni logo" />
      <div
        className="aerial_wrapper"
        style={{
          backgroundImage: `url(${props.cover})`,
        }}
      ></div>
      <div className="content">
        <h1 className="title">{props.name}</h1>
        <p>
          Find a mentor you're interested in learning more from and book a
          virtual coffee chat with them! You can use the filters to help narrow
          down your search.
        </p>
      </div>
    </div>
  );
}
