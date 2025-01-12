import NavigationBar from "../components/NavigationBar";
import Footer from "../components/Footer";

export default function Layout({ children }) {
  return (
    <>
      <NavigationBar />
      {children}
      <Footer />
    </>
  );
}
