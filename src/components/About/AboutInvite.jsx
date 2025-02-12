export default function AboutInvite() {
  return (
    <section className="section-padding-x text-dark-base">
      <div className="container max-w-screen-xl px-4 py-8 lg:py-16 rounded-md bg-green-400 text-light-base">
        <div className="flex flex-col items-center justify-center gap-2 lg:gap-4">
          <h2 className="title-font-size font-semibold text-center">
            Bergabunglah dalam Komunitas Kami
          </h2>
          <p className="text-center">
            Dapatkan informasi terbaru seputar kami dan berbagai kegiatan yang
            kami lakukan.
          </p>
          <div className="flex flex-col items-center gap-2 lg:gap-4 sm:flex-row sm:justify-center">
            <a href="#" className="btn bg-amber-400 px-4 py-2 rounded-md">
              Daftar Sekarang
            </a>
            <a
              href="#"
              className="btn text-green-400 bg-light-base px-4 py-2 rounded-md"
            >
              Ikuti Instagram Kami
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
