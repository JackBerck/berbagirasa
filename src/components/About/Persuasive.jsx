import { Link } from "react-router-dom";

export default function AboutPersuasive() {
  return (
    <section
      id="about-hero"
      className="section-padding-x pt-16 pb-16 text-dark-base"
    >
      <div className="container max-w-screen-xl">
        <div className="flex flex-col lg:flex-row justify-between gap-4">
          <div className="w-full lg:w-1/2">
            <p className="px-2 py-1 rounded-md bg-lime-400 text-lime-700 font-semibold w-fit">
              Kelebihan
            </p>
            <h2 className="title-font-size font-bold mb-2">
              Saling Memberi Menggunakan Aplikasi Kami
            </h2>
            <p className="mb-2">
              Berbagi Rasa adalah platform berbagi cerita dan pengalaman seputar
              kesehatan mental. Kami hadir untuk memberikan dukungan kepada
              siapa pun yang membutuhkan.
            </p>
            <p className="mb-2">
              Kami percaya bahwa kesehatan mental adalah hal yang penting dan
              harus diperhatikan. Oleh karena itu, kami ingin memberikan
              informasi dan dukungan kepada siapa pun yang membutuhkan.
            </p>
            <ul className="flex flex-col gap-2">
              <li className="flex items-center gap-4">
                <svg
                  className="w-10 h-10 text-amber-700 bg-amber-400 p-2 rounded-full"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z" />
                </svg>
                <span className="font-semibold">
                  Banyak orang telah terbantu
                </span>
              </li>
              <li className="flex items-center gap-4">
                <svg
                  className="w-10 h-10 text-blue-700 bg-blue-400 p-2 rounded-full"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path d="M256 48C141.1 48 48 141.1 48 256l0 40c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-40C0 114.6 114.6 0 256 0S512 114.6 512 256l0 144.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24l-32 0c-26.5 0-48-21.5-48-48s21.5-48 48-48l32 0c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40L464 256c0-114.9-93.1-208-208-208zM144 208l16 0c17.7 0 32 14.3 32 32l0 112c0 17.7-14.3 32-32 32l-16 0c-35.3 0-64-28.7-64-64l0-48c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64l0 48c0 35.3-28.7 64-64 64l-16 0c-17.7 0-32-14.3-32-32l0-112c0-17.7 14.3-32 32-32l16 0z" />
                </svg>
                <span className="font-semibold">
                  Layanan yang mudah digunakan
                </span>
              </li>
            </ul>
          </div>
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-2">
            <img
              src="/img/random/giving-homeless.jpg"
              alt="Giving Homeless Photo"
              className="object-cover w-full max-h-[96px] md:max-h-[144px] rounded-lg"
            />
            <img
              src="/img/random/homeless.jpg"
              alt="Homeless Photo"
              className="object-cover w-full max-h-[96px] md:max-h-[144px] rounded-lg"
            />
            <img
              src="/img/random/volunteer-food.jpg"
              alt="Volunteer Food Photo"
              className="object-cover w-full max-h-[256px] rounded-lg col-span-2"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
