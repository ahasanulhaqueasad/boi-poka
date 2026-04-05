const Book = ({ book }) => {
  const { bookName, author, image, rating, category, tags } = book;

  return (
    <div className="card bg-base-100 p-6 border border-gray-200 rounded-[24px] flex flex-col h-full">
      <div className="bg-[#F3F3F3] rounded-2xl py-8 flex justify-center items-center">
        <img
          src={image}
          alt={bookName}
          className="h-[166px] object-contain shadow-md"
        />
      </div>

      <div className="flex gap-3 mt-6">
        {tags && tags.map((tag, index) => (
          <span
            key={index}
            className="px-4 py-1 bg-[#23BE0A0D] text-[#23BE0A] font-medium rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="flex-grow">
        <h2 className="text-2xl font-bold text-[#131313] mt-4 mb-2">
          {bookName}
        </h2>
        <p className="text-[#131313CC] font-medium border-b border-dashed border-gray-300 pb-5">
          By : {author}
        </p>
      </div>

      <div className="flex justify-between items-center mt-5 text-[#131313B3] font-medium">
        <span>{category}</span>
        <div className="flex items-center gap-2">
          <span>{rating}</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={1.5} 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Book;