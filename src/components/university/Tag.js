import "./Tag.scss";
export default function Tag(props) {
  return (
    <a className="tag" href="#" >
      {props.title}
    </a>
  );
}
