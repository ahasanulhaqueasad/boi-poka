import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import ScrollToTop from "../ScrollToTop/ScrollToTop";

const Root = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* ScrollToTop কে আলাদা রাখুন, এটি ব্যাকগ্রাউন্ডে কাজ করবে */}
      <ScrollToTop />

      {/* Navbar fixed রাখার জন্য sticky ক্লাস এখানে দিন */}
      <div className="sticky top-0 z-50 shadow-md">
        <Navbar />
      </div>

      {/* মাঝখানের কন্টেন্ট */}
      <main className="flex-grow bg-base-100">
        <Outlet />
      </main>

      {/* ফুটার */}
      <Footer />
    </div>
  );
};

export default Root;