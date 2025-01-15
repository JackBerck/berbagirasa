export default function DeleteAlert({ onConfirm, onCancel }) {
  return (
    <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-4 rounded shadow-lg">
        <p>Are you sure you want to delete this post?</p>
        <div className="flex gap-2 mt-4">
          <button
            className="bg-red-600 text-white p-2 rounded"
            onClick={onConfirm}
          >
            Yes
          </button>
          <button
            className="bg-gray-300 text-black p-2 rounded"
            onClick={onCancel}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}
