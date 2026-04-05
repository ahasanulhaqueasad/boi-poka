import { useLoaderData } from "react-router-dom";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';
import { getStoredReadList } from "../Utility/addToDb";
import { useEffect, useState } from "react";

const PagesToRead = () => {
    const allBooks = useLoaderData() || [];
    const [readBooks, setReadBooks] = useState([]);

    useEffect(() => {
        const storedReadList = getStoredReadList();
        // স্টোর করা আইডি গুলোর সাথে মেইন ডাটা ফিল্টার করা
        const readBookList = allBooks.filter(book => storedReadList.includes(book.bookId));
        
        // চার্টের জন্য ডাটা ফরম্যাট করা
        const chartData = readBookList.map(book => ({
            name: book.bookName,
            pages: book.totalPages
        }));
        setReadBooks(chartData);
    }, [allBooks]);

    // বার গুলোর জন্য আলাদা আলাদা সুন্দর কালার
    const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink', '#AF19FF'];

    // কাস্টম ট্রায়াঙ্গেল শেপ ফাংশন
    const getPath = (x, y, width, height) => {
        return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
        ${x + width / 2}, ${y}
        C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
        Z`;
    };

    const TriangleBar = (props) => {
        const { fill, x, y, width, height } = props;
        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    return (
        <div className="max-w-7xl mx-auto px-4 md:px-12 my-10 min-h-[80vh] flex flex-col items-center justify-center">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Pages to Read</h2>
                <p className="text-gray-500">Visual representation of your reading progress</p>
            </div>

            <div className="w-full h-[500px] bg-gray-50 rounded-[32px] p-5 md:p-10 border border-gray-100 shadow-sm relative">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={readBooks}
                        margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e0e0e0" />
                        <XAxis 
                            dataKey="name" 
                            tick={{fontSize: 12, fill: '#6b7280'}} 
                            interval={0}
                            angle={-20}
                            textAnchor="end"
                        />
                        <YAxis tick={{fill: '#6b7280'}} />
                        <Tooltip 
                            cursor={{fill: 'transparent'}}
                            contentStyle={{borderRadius: '10px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'}}
                        />
                        <Bar 
                            dataKey="pages" 
                            shape={<TriangleBar />} 
                            label={{ position: 'top', fill: '#374151', fontSize: 14, fontWeight: 'bold' }}
                        >
                            {readBooks.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default PagesToRead;