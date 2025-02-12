import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function WhatWeDo() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="about-what-we-do"
      className="section-padding-x pb-16 text-dark-base"
    >
      <div className="container max-w-screen-xl">
        <div className="flex flex-col-reverse lg:flex-row justify-between gap-4">
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-2 gap-2 text-center">
              <div
                ref={ref}
                className="bg-green-400 text-green-700 flex items-center justify-center flex-col rounded-md p-8 font-semibold"
              >
                {inView && (
                  <CountUp
                    end={12768}
                    duration={2}
                    className="sub-title-font-size"
                  />
                )}
                <p className="text-light-base">Orang Terbantu</p>
              </div>
              <div
                ref={ref}
                className="bg-amber-400 text-amber-700 flex items-center justify-center flex-col rounded-md p-8 font-semibold"
              >
                {inView && (
                  <CountUp
                    end={476}
                    duration={2}
                    className="sub-title-font-size"
                  />
                )}
                <p className="text-light-base">Artikel Terbit</p>
              </div>
              <div
                ref={ref}
                className="bg-blue-400 text-blue-700 flex items-center justify-center flex-col rounded-md p-8 font-semibold"
              >
                {inView && (
                  <CountUp
                    end={87652}
                    duration={2}
                    className="sub-title-font-size"
                  />
                )}
                <p className="text-light-base">Like Diterima</p>
              </div>
              <div
                ref={ref}
                className="bg-purple-400 text-purple-700 flex items-center justify-center flex-col rounded-md p-8 font-semibold"
              >
                {inView && (
                  <CountUp
                    end={987}
                    duration={2}
                    className="sub-title-font-size"
                  />
                )}
                <p className="text-light-base">Donasi Diterima</p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <p className="px-2 py-1 rounded-md bg-lime-400 text-lime-700 font-semibold w-fit">
              Apa yang Kami Lakukan
            </p>
            <h2 className="title-font-size font-bold mb-2">
              Kita Membuat Perbedaan dalam Hidup Mereka
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
          </div>
        </div>
      </div>
    </section>
  );
}
