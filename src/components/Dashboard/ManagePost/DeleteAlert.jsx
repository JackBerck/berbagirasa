export default function DeleteAlert({ onConfirm, onCancel }) {
    const handleClickOutside = (e) => {
        if (e.target.classList.contains('overlay')) {
            onCancel();
        }
    };

    return (
        <div
            className="fixed z-[999] top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 overlay"
            onClick={handleClickOutside}
        >
            <div className="bg-white p-4 rounded shadow-lg" onClick={(e) => e.stopPropagation()}>
                <p>Apakah postingan ini ingin dihapus?</p>
                <div className="flex gap-2 mt-4">
                    <button
                        className="bg-red-600 text-white p-2 rounded"
                        onClick={onConfirm}
                    >
                        Ya
                    </button>
                    <button
                        className="bg-gray-300 text-black p-2 rounded"
                        onClick={onCancel}
                    >
                        Tidak
                    </button>
                </div>
            </div>
        </div>
    );
}
