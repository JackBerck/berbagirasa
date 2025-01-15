import Authentication from "../../components/Authentication";
import RegisterForm from "../../components/Authentication/Form/RegisterForm";

export default function Register() {
  return (
    <main>
      <Authentication
        id="register"
        sideImage="/img/backgrounds/we-care.jpg"
        direction="left"
      >
        <RegisterForm />
      </Authentication>
    </main>
  );
}
