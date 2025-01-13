import { posts } from "../../data/posts";
import Post from "../../components/Post/PostsList";

export default function Home() {
  return (
    <main>
      <Post
        key="postingan-terbaru"
        id="postingan-terbaru"
        title="Terbaru"
        posts={posts}
        addClass="pt-24"
      />
      <Post
        key="makanan-minuman"
        id="makanan-minuman"
        title="Makanan & Minuman"
        posts={posts}
      />
      <Post key="pakaian" id="pakaian" title="Pakaian" posts={posts} />
      <Post key="kendaraan" id="kendaraan" title="Kendaraan" posts={posts} />
      <Post key="peralatan" id="peralatan" title="Peralatan" posts={posts} />
    </main>
  );
}
