import { useLoaderData } from "react-router-dom";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { getStoredReadList, getStoredWishList } from "../Utility/addToDb.js";

const Dashboard = () => {
  const allBooks = useLoaderData() || [];
  const storedReadIds = getStoredReadList() || [];
  const storedWishIds = getStoredWishList() || [];

  const chartData = allBooks.map((book) => ({
    name: book.bookName
      ? book.bookName.length > 10
        ? book.bookName.substring(0, 10) + "..."
        : book.bookName
      : "Unknown",
    pages: book.totalPages || 0,
  }));

  const pieData = [
    { name: "Read", value: storedReadIds.length },
    { name: "Wishlist", value: storedWishIds.length },
    { name: "Total", value: allBooks.length },
  ];

  const colors = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#AF19FF",
    "#FF4560",
  ];

  // যদি ডাটা লোড হতে দেরি হয় বা না থাকে, তবে একটি লোডিং মেসেজ দেখাবে
  if (allBooks.length === 0) {
    return (
      <div className="text-center my-20 text-2xl font-bold">
        Loading Data or No Books Found...
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 my-10 font-sans">
      <div className="mb-10 text-center">
        <h2 className="text-4xl font-black text-gray-800">
          Dashboard Overview
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100 shadow-sm text-center">
          <p className="text-blue-500 text-xs font-black uppercase tracking-widest">
            Total Books
          </p>
          <h3 className="text-4xl font-black text-blue-700">
            {allBooks.length}
          </h3>
        </div>
        <div className="bg-green-50 p-8 rounded-3xl border border-green-100 shadow-sm text-center">
          <p className="text-green-500 text-xs font-black uppercase tracking-widest">
            Read List
          </p>
          <h3 className="text-4xl font-black text-green-700">
            {storedReadIds.length}
          </h3>
        </div>
        <div className="bg-orange-50 p-8 rounded-3xl border border-orange-100 shadow-sm text-center">
          <p className="text-orange-500 text-xs font-black uppercase tracking-widest">
            Wishlist
          </p>
          <h3 className="text-4xl font-black text-orange-700">
            {storedWishIds.length}
          </h3>
        </div>
        <div className="bg-purple-50 p-8 rounded-3xl border border-purple-100 shadow-sm text-center">
          <p className="text-purple-500 text-xs font-black uppercase tracking-widest">
            Total Pages
          </p>
          <h3 className="text-4xl font-black text-purple-700">
            {allBooks.reduce((sum, book) => sum + (book.totalPages || 0), 0)}
          </h3>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-xl h-[500px]">
          <h3 className="text-xl font-bold mb-8 text-gray-700">
            Page Distribution
          </h3>
          <ResponsiveContainer width="100%" height="90%">
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis
                dataKey="name"
                tick={{ fontSize: 10 }}
                interval={0}
                angle={-45}
                textAnchor="end"
                height={70}
              />
              <YAxis />
              <Tooltip />
              <Bar dataKey="pages" radius={[10, 10, 0, 0]} barSize={40}>
                {chartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={colors[index % colors.length]}
                  />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-xl h-[500px] flex flex-col items-center">
          <h3 className="text-xl font-bold mb-4 text-gray-700 self-start">
            Reading Progress
          </h3>
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="45%"
                innerRadius={70}
                outerRadius={100}
                paddingAngle={8}
                dataKey="value"
                label
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={colors[index % colors.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
