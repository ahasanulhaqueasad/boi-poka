import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList, addToStoredWishList } from "../Utility/addToDb";

const BookDetail = () => {
  const { bookId } = useParams();
  const id = parseInt(bookId);
  const data = useLoaderData();
  const book = data.find((book) => book.bookId === id);

  if (!book) {
    return (
      <div className="h-screen flex items-center justify-center text-2xl font-bold">
        Book not found
      </div>
    );
  }

  const handleMarkAsRead = (id) => {
    addToStoredReadList(id);
  };

  const handleWishlist = (id) => {
    addToStoredWishList(id);
  };

  return (
    <div className="w-11/12 mx-auto my-10 grid md:grid-cols-2 gap-10 font-sans">
      <div className="bg-gray-100 rounded-3xl flex items-center justify-center p-12 shadow-sm">
        <img
          src={book.image}
          alt={book.bookName}
          className="w-72 shadow-2xl rounded-lg"
        />
      </div>

      <div className="flex flex-col">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          {book.bookName}
        </h1>
        <p className="text-xl text-gray-600 font-medium mb-4">
          By : {book.author}
        </p>

        <div className="divider"></div>
        <p className="text-lg font-semibold text-gray-700">{book.category}</p>
        <div className="divider"></div>

        <p className="text-gray-600 leading-relaxed mb-6">
          <span className="font-bold text-gray-800">Review :</span>{" "}
          {book.review}
        </p>

        <div className="flex gap-3 flex-wrap mb-6">
          <span className="font-bold mr-2">Tag</span>
          {book.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-green-50 text-green-600 px-4 py-1 rounded-full text-sm font-bold"
            >
              #{tag}
            </span>
          ))}
        </div>

        <div className="divider"></div>

        <div className="grid grid-cols-2 gap-y-3 mb-8 max-w-sm">
          <span className="text-gray-500">Number of Pages:</span>
          <span className="font-bold">{book.totalPages}</span>

          <span className="text-gray-500">Publisher:</span>
          <span className="font-bold">{book.publisher}</span>

          <span className="text-gray-500">Year of Publishing:</span>
          <span className="font-bold">{book.yearOfPublishing}</span>

          <span className="text-gray-500">Rating:</span>
          <span className="font-bold">{book.rating}</span>
        </div>

        <div className="flex flex-wrap gap-4 mt-auto">
          <button
            onClick={() => handleMarkAsRead(id)}
            className="btn btn-outline border-gray-300 px-8 hover:bg-gray-800"
          >
            Read
          </button>
          <button
            onClick={() => handleWishlist(id)}
            className="btn bg-[#50B1C9] text-white hover:bg-[#3e98ad] px-8"
          >
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
