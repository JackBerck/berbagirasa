import { useEffect } from "react";
import { formatDistanceToNow } from "date-fns";
import { id } from "date-fns/locale";
import { getPostById } from "../../../utils/post";
import PostImages from "./PostImages";

export default function PostDetail({ postId }) {
  const post = getPostById(postId);

  useEffect(() => {
    document.title = `${post.title} | BerbagiRasa`;
  }, [post.title]);

  const formattedCreatedAt = formatDistanceToNow(new Date(post.createdAt), {
    addSuffix: true,
    locale: id,
  });

  return (
    <main
      id="detail-product"
      className="pt-[72px] max-w-screen-xl container flex justify-between flex-col lg:flex-row"
    >
      <section className="w-full lg:w-3/5 h-[216px] md:h-[360px] lg:h-auto">
        <PostImages title={post.title} images={post.images} />
      </section>
      <section className="section-padding-x-sm pt-4 pb-4 lg:w-2/5">
        <div className="container lg:max-w-screen-sm">
          <div className="flex items-center gap-2 border-b-2 border-b-gray-400 pb-2">
            <img
              src={`${post.author.image ?? "profile.svg"}`}
              alt={`${post.author.image ?? "user"} Profile Picture`}
              className="rounded-full w-10 aspect-square"
            />
            <p className="small-font-size font-semibold">
              {post.author.username ?? "user"}
            </p>
          </div>
          <div className="mb-2 mt-2">
            <h1 className="product-title-font-size font-bold">{post.title}</h1>
            <p className="extra-small-font-size text-gray-600 font-light">
              Ditawarkan {formattedCreatedAt} yang lalu di {post.location}
            </p>
          </div>
          <div className="flex gap-2 items-center mb-2">
            <a
              target="_blank"
              href={`https://wa.me/${post.author.phone ?? ""}`}
              className="rounded-lg bg-green-base text-light-base h-9 px-2 items-center flex gap-2"
            >
              <svg
                className="h-6 w-6 aspect-square"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
                fill="currentColor"
              >
                <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
              </svg>
              <span>Kirim pesan</span>
            </a>
          </div>
          <div>
            <h2 className="subtitle-font-size font-bold mb-2">Detail</h2>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <h3 className="font-medium">Kategori</h3>
                <p className="">{post.category}</p>
              </div>
              <p className="extra-small-font-size">{post.content}</p>
              <div className="relative text-right w-full h-52 rounded-lg">
                <div className="overflow-hidden bg-none w-full h-full">
                  <iframe
                    className="w-full h-full"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    src="https://maps.google.com/maps?width=600&height=200&hl=en&q=universitas jenderal soedirman&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                  ></iframe>
                </div>
              </div>
              <div className="flex justify-between">
                <h3 className=" font-medium">Perkiraan lokasi</h3>
                <p className="">{post.location}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
