import bannerImage from "../../assets/images/Book4.jpg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="container mx-auto px-4 sm:px-6 lg:px-12">
      <div className="hero bg-base-200 my-6 md:my-12 rounded-[2rem] overflow-hidden min-h-[450px] lg:min-h-[550px]">
        <div className="hero-content flex-col lg:flex-row-reverse p-8 md:p-16 lg:gap-24">
          
          {/* Image Section - সুন্দর শ্যাডো এবং রেসপনসিভ সাইজ */}
          <div className="flex-1 flex justify-center items-center">
            <img
              src={bannerImage}
              alt="Featured Book"
              className="w-full max-w-[200px] md:max-w-[320px] rounded-lg shadow-2xl transform hover:rotate-2 hover:scale-105 transition-all duration-500 ease-in-out"
            />
          </div>

          {/* Text Section - টাইপোগ্রাফি ইম্প্রুভমেন্ট */}
          <div className="flex-1 text-center lg:text-left mt-8 lg:mt-0">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.2] text-[#131313]">
              Books to freshen up <br className="hidden sm:block" /> 
              your bookshelf
            </h1>
            
            <p className="py-6 text-gray-600 text-sm md:text-lg max-w-md mx-auto lg:mx-0">
              Discover your next great read from our curated collection of best-selling books and hidden gems.
            </p>

            <div className="mt-4 md:mt-8">
              <Link to="/listedBooks">
                <button className="btn bg-[#23BE0A] hover:bg-[#1fa308] text-white border-none px-10 font-bold text-lg rounded-xl h-14 transition-all duration-300 shadow-md hover:shadow-lg active:scale-95">
                  View The List
                </button>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;