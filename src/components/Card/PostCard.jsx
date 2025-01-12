export default function PostCard({ post }) {
  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return text;
  };

  return (
    <div className="flex flex-col bg-white shadow-md rounded-lg">
      <a href={`/post/${post.id}`}>
        <img
          className="object-cover w-full h-48 rounded-lg mb-2"
          src={post.image[0]}
          alt={`${post.title} Image`}
        />
      </a>
      <div className="p-1 md:p-2">
        <span className="flex gap-1 md:gap-2 items-center card-description-font-size">
          <svg
            className="w-4 h-4 text-gray-700"
            viewBox="0 0 14 17"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M6.94515 0.953796C3.46182 0.953796 0.611816 3.8038 0.611816 7.28713C0.611816 11.5621 6.15348 16.3913 6.39098 16.6288C6.54932 16.708 6.78682 16.7871 6.94515 16.7871C7.10348 16.7871 7.34098 16.708 7.49932 16.6288C7.73682 16.3913 13.2785 11.5621 13.2785 7.28713C13.2785 3.8038 10.4285 0.953796 6.94515 0.953796ZM6.94515 14.9663C5.28265 13.383 2.19515 9.9788 2.19515 7.28713C2.19515 4.67463 4.33265 2.53713 6.94515 2.53713C9.55765 2.53713 11.6952 4.67463 11.6952 7.28713C11.6952 9.89963 8.60765 13.383 6.94515 14.9663ZM6.94515 4.12046C5.20348 4.12046 3.77848 5.54546 3.77848 7.28713C3.77848 9.0288 5.20348 10.4538 6.94515 10.4538C8.68682 10.4538 10.1118 9.0288 10.1118 7.28713C10.1118 5.54546 8.68682 4.12046 6.94515 4.12046ZM6.94515 8.87046C6.07432 8.87046 5.36182 8.15796 5.36182 7.28713C5.36182 6.4163 6.07432 5.7038 6.94515 5.7038C7.81598 5.7038 8.52848 6.4163 8.52848 7.28713C8.52848 8.15796 7.81598 8.87046 6.94515 8.87046Z"></path>
          </svg>
          <p>{post.location}</p>
        </span>
        <a href={`/post/${post.id}`}>
          <h2 className="card-title-font-size font-semibold">
            {truncateText(post.title, 4)}
          </h2>
        </a>
        <p className="card-description-font-size text-gray-600">
          {truncateText(post.content, 5)}
        </p>
      </div>
    </div>
  );
}
