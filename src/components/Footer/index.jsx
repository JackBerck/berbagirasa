export default function Footer() {
  return (
    <footer
      id="footer"
      className="section-padding-x pt-4 pb-4 normal-font-size text-light-base bg-dark-base flex items-center justify-center"
    >
      <div className="max-w-screen-xl container">
        <p className="text-center">
          &copy; {new Date().getFullYear()}{" "}
          <a
            href="https://instagram.com/zakidzlfkr_"
            className="text-blue-base"
          >
            BerbagiRasa
          </a>
          . All rights reserved.
        </p>
      </div>
    </footer>
  );
}
