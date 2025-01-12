import Authentication from ".";
import RegisterForm from "./Form/RegisterForm";

export default function Register() {
  return (
    <Authentication
      id="register"
      sideImage="/img/backgrounds/we-care.jpg"
      direction="left"
    >
      <RegisterForm />
    </Authentication>
  );
}
