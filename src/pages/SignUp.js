import IntroSection from "../components/auth/IntroSection";
import SignUpComponent from "../components/auth/SignUp";

export default function SignUp() {
  return (
    <div className="two-panels">
      <IntroSection />
      <SignUpComponent />
    </div>
  );
}
