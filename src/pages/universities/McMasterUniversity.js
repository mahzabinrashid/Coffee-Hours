import universityLogo from "../../assets/mcmaster-logo.png";
import TemplateUniversity from "../../components/university/TemplateUni";

export default function McMasterUniversity() {
  return (
    <TemplateUniversity
      name="McMaster University"
      image={universityLogo}
      cover="https://images.pexels.com/photos/137618/pexels-photo-137618.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    />
  );
}
