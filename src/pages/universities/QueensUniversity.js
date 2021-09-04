import universityLogo from "../../assets/queens-logo.png";
import TemplateUniversity from "../../components/university/TemplateUni.js";

export default function QueensUniversity() {
  return (
    <TemplateUniversity
      name="Queens University"
      image={universityLogo}
      cover="https://images.pexels.com/photos/137618/pexels-photo-137618.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    />
  );
}
