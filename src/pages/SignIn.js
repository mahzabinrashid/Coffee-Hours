import IntroSection from "../components/auth/IntroSection";
import SignInComponent from "../components/auth/SignIn";

export default function SignIn() {
  return (
    <div className="two-panels">
      <IntroSection />
      <SignInComponent />
    </div>
  );
}
