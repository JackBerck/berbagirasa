import UpdatePostForm from "../../components/Post/UpdatePost/UpdatePostForm";
import { useParams } from "react-router-dom";

export default function UpdatePost() {
  const { id } = useParams();

  return (
    <main>
      <section
        id="add-product"
        className="section-padding-x pt-24 pb-16 text-dark-base"
      >
        <div className="container max-w-screen-xl">
          <h1 className="font-bold title-font-size mb-4">Perbarui Postingan</h1>
          <UpdatePostForm postId={id} />
        </div>
      </section>
    </main>
  );
}
