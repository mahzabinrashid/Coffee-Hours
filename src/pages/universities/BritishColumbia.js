import universityLogo from "../../assets/ubc.png";
import TemplateUniversity from "../../components/university/TemplateUni";

export default function BritishColumbia() {
  return (
    <TemplateUniversity
      name="University of British Columbia"
      image={universityLogo}
      cover="https://images.pexels.com/photos/137618/pexels-photo-137618.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    />
  );
}
