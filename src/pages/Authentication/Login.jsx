import Authentication from "../../components/Authentication";
import LoginForm from "../../components/Authentication/Form/LoginForm";

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
