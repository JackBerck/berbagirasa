import { posts } from "../data/posts.js";

function getPostById(id) {
  return posts.find((post) => post.id === id);
}

export { getPostById };
