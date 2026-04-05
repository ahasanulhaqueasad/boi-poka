import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredReadList, getStoredWishList } from "../Utility/addToDb";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { RiArrowDropDownLine } from "react-icons/ri";

const ListedBooks = () => {
  const allBooks = useLoaderData() || [];
  const [readBooks, setReadBooks] = useState([]);
  const [wishlistBooks, setWishlistBooks] = useState([]);
  const [displayReadBooks, setDisplayReadBooks] = useState([]);

  useEffect(() => {
    const storedReadList = getStoredReadList();
    const storedWishList = getStoredWishList();

    // ID গুলোর টাইপ (String vs Number) চেক করে ফিল্টার করা
    const readBookList = allBooks.filter((book) =>
      storedReadList.includes(book.bookId),
    );
    const wishList = allBooks.filter((book) =>
      storedWishList.includes(book.bookId),
    );

    setReadBooks(readBookList);
    setWishlistBooks(wishList);
    setDisplayReadBooks(readBookList);
  }, [allBooks]);

  const handleSort = (sortType) => {
    let sortedList = [...readBooks];
    if (sortType === "rating") {
      sortedList.sort((a, b) => b.rating - a.rating);
    } else if (sortType === "pages") {
      sortedList.sort((a, b) => b.totalPages - a.totalPages);
    } else if (sortType === "year") {
      sortedList.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
    }
    setDisplayReadBooks(sortedList);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-12 my-10 font-sans">
      <div className="bg-gray-100 py-8 rounded-2xl mb-8">
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Books List
        </h1>
      </div>

      {/* Sort Dropdown */}
      <div className="flex justify-center mb-10">
        <div className="dropdown dropdown-bottom">
          <div
            tabIndex={0}
            role="button"
            className="btn bg-green-500 text-white hover:bg-green-600 px-8 border-none"
          >
            Sort By <RiArrowDropDownLine className="text-2xl" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[10] menu p-2 shadow bg-base-100 rounded-box w-52 mt-2 border"
          >
            <li onClick={() => handleSort("rating")}>
              <a>Rating</a>
            </li>
            <li onClick={() => handleSort("pages")}>
              <a>Number of pages</a>
            </li>
            <li onClick={() => handleSort("year")}>
              <a>Publisher year</a>
            </li>
          </ul>
        </div>
      </div>

      <Tabs>
        <TabList className="flex border-b mb-8 border-gray-200">
          <Tab
            className="px-6 py-3 cursor-pointer outline-none transition-all text-gray-500"
            selectedClassName="border-b-2 border-green-500 font-bold text-green-600 bg-white"
          >
            Read Books
          </Tab>
          <Tab
            className="px-6 py-3 cursor-pointer outline-none transition-all text-gray-500"
            selectedClassName="border-b-2 border-green-500 font-bold text-green-600 bg-white"
          >
            Wishlist Books
          </Tab>
        </TabList>

        {/* Read Books Panel */}
        <TabPanel>
          {displayReadBooks.length > 0 ? (
            displayReadBooks.map((book) => (
              <BookListItem key={book.bookId} book={book} />
            ))
          ) : (
            <div className="text-center py-20 text-gray-400 font-bold">
              No books found in Read List.
            </div>
          )}
        </TabPanel>

        {/* Wishlist Panel */}
        <TabPanel>
          {wishlistBooks.length > 0 ? (
            wishlistBooks.map((book) => (
              <BookListItem key={book.bookId} book={book} />
            ))
          ) : (
            <div className="text-center py-20 text-gray-400 font-bold">
              No books found in Wishlist.
            </div>
          )}
        </TabPanel>
      </Tabs>
    </div>
  );
};

// এই কম্পোনেন্টটি আলাদা করে নিচে লিখলে এরর হবে না
const BookListItem = ({ book }) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 p-6 border rounded-2xl mb-6 bg-white shadow-sm">
      <div className="bg-gray-100 rounded-xl p-8 flex items-center justify-center md:w-60">
        <img
          src={book.image}
          alt={book.bookName}
          className="w-32 shadow-lg rounded"
        />
      </div>
      <div className="flex-1 space-y-3">
        <h2 className="text-2xl font-bold text-gray-800">{book.bookName}</h2>
        <p className="text-gray-600 font-medium text-sm">By: {book.author}</p>
        <div className="flex flex-wrap items-center gap-4 py-2">
          <span className="font-bold text-gray-800 text-sm">Tag</span>
          {book.tags?.map((tag, idx) => (
            <span
              key={idx}
              className="bg-green-50 text-green-600 px-3 py-1 rounded-full text-xs font-bold"
            >
              #{tag}
            </span>
          ))}
          <p className="text-gray-500 text-sm flex items-center gap-1">
            📍 Year of Publishing: {book.yearOfPublishing}
          </p>
        </div>
        <div className="flex flex-wrap gap-6 text-gray-500 text-sm border-b pb-4">
          <p>👥 Publisher: {book.publisher}</p>
          <p>📄 Page {book.totalPages}</p>
        </div>
        <div className="flex flex-wrap gap-3 pt-2">
          <span className="bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-xs font-bold">
            Category: {book.category}
          </span>
          <span className="bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-xs font-bold">
            Rating: {book.rating}
          </span>
          <button className="bg-green-500 text-white px-5 py-2 rounded-full text-xs font-bold hover:bg-green-600">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
