import React, { useState } from "react";
import AddPostForm from "../../components/Post/AddPost/AddPostForm";

export default function AddPost() {
  return (
    <main>
      <section
        id="add-product"
        className="section-padding-x pt-24 pb-16 text-dark-base"
      >
        <div className="container max-w-screen-xl">
          <h1 className="font-bold title-font-size mb-4">Buat Postingan</h1>
          <AddPostForm />
        </div>
      </section>
    </main>
  );
}
