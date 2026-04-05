import bannerImage from "../../assets/images/Book4.jpg";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div>
      {/* Banner Section */}
      <div className="container mx-auto px-4 md:px-12">
        <div className="hero bg-base-200 my-10 md:my-16 rounded-3xl p-6 md:p-12 min-h-[500px]">
          <div className="hero-content flex-col lg:flex-row-reverse gap-10 lg:gap-20">
            {/* Image Section */}
            <div className="flex-1 flex justify-center">
              <img
                src={bannerImage}
                alt="Featured Book"
                className="max-w-xs md:max-w-sm rounded-lg shadow-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Text Section*/}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight text-[#131313]">
                Books to freshen up <br className="hidden md:block" /> your
                bookshelf
              </h1>

              {/* Link Section */}
              <Link to="/listed-books">
                <button className="btn bg-[#23BE0A] hover:bg-[#1fa308] text-white border-none mt-8 md:mt-12 px-8 font-bold text-lg rounded-xl h-14">
                  View The List
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
