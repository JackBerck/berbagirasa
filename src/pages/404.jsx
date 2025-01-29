import { Link } from "react-router-dom";

export default () => {
  return (
    <section className="section-padding-x pt-24 pb-16 text-dark-base">
      <div className="container max-w-screen-xl">
        <div className="mx-auto max-w-screen-sm text-center">
            <img src="/img/random/404.webp" alt="404 Animation" className="max-w-[296px] mx-auto" />
          <h1 className="mb-2 tracking-tight font-extrabold title-font-size">
            404
          </h1>
          <p className="mb-2 title-font-size tracking-tight font-bold">
            Something's missing.
          </p>
          <p className="mb-2 font-light">
            Sorry, we can't find that page. You'll find lots to explore on the
            home page.{" "}
          </p>
          <Link
            to="/"
            className="inline-flex text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-md px-5 py-2.5 text-center"
          >
            Back to Homepage
          </Link>
        </div>
      </div>
    </section>
  );
};
