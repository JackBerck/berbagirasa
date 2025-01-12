import Authentication from ".";
import LoginForm from "./Form/LoginForm";

export default function Login() {
  return (
    <Authentication
      id="login"
      sideImage="/img/backgrounds/charity.jpg"
      direction="right"
      addClass="pb-24 pt-36"
    >
      <LoginForm />
    </Authentication>
  );
}
