export default function AboutDonation() {
  return (
    <section
      id="donation"
      className="section-padding-x py-16 bg-[url('/img/random/motoran.jpg')] bg-cover bg-center relative text-light-base"
    >
      <div className="absolute bg-gradient-to-b from-dark-base to-dark-base/50 inset-0 opacity-70"></div>
      <div className="container max-w-screen-xl relative z-10">
        <div className="flex flex-col lg:flex-row gap-4 justify-between">
          <div className="w-full lg:w-1/2">
            <h1 className="title-font-size font-semibold mb-2">
              Berdonasi adalah Tindakan Mulia
            </h1>
            <p className="text-gray-200 mb-4">
              Mari berdonasi untuk membantu sesama yang membutuhkan. Setiap
              bantuan yang kamu berikan akan sangat berarti bagi mereka. Kita
              bisa membantu satu sama lain.
            </p>
          </div>
          <div className="w-full lg:w-1/2 bg-light-base text-dark-base p-4 rounded-md">
            <p className="mb-2">
              Donasi yang Anda berikan juga sangat berarti bagi kami dalam
              membangun dan mengembangkan lebih lanjut tentang aplikasi berbasis
              website BerbagiRasa ini.
            </p>
            <a
              className="flex items-center gap-2 bg-amber-200 w-fit rounded-md px-2 py-1 font-semibold"
              href="#"
            >
              <img
                className="w-12"
                src="/img/icons/saweria.svg"
                alt="Saweria Logo"
              />{" "}
              Donasi menggunakan Saweria
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
