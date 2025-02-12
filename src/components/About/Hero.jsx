import { Link } from "react-router-dom";

export default function AboutHero() {
  return (
    <section
      id="about-hero"
      className="section-padding-x pt-36 pb-24 lg:pt-40 lg:pb-32 bg-[url('/img/backgrounds/indonesia-street.jpg')] bg-center lg:bg-top bg-cover text-light-base relative"
    >
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-dark-base to-dark-base/10 opacity-70" />
      <div className="container max-w-screen-xl">
        <div className="max-w-screen-sm  relative z-20">
          <h2 className="text-3xl font-bold mb-2">Tentang Kami</h2>
          <p className="text-gray-200 mb-4">
            BerbagiRasa adalah platform yang memungkinkan kamu untuk berbagi
            makanan, minuman, dan kebutuhan sehari-hari atau barang lainnya
            kepada sesama yang membutuhkan. Kami percaya bahwa kebaikan akan
            selalu berlipat ganda, dan dengan berbagi, kita dapat membantu satu
            sama lain.
          </p>
          <Link
            to="/masuk"
            className="px-4 py-2 bg-blue-base rounded-md font-semibold"
          >
            Bergabung dengan kami
          </Link>
        </div>
      </div>
    </section>
  );
}
