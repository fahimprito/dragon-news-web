import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "./NewsCard";
import { useEffect, useState } from "react";


const CategoryNews = () => {
    const data = useLoaderData();
    const { category_id } = useParams();
    const [news, setNews] = useState([]);
    // console.log(data);
    // console.log(category_id);

    useEffect(() => {
        if (category_id === "8") {
            setNews(data);
        }
        else if (category_id) {
            const filteredByCategory = [...data].filter(
                news => news.category_id == category_id
            )
            setNews(filteredByCategory)
        }
        else {
            setNews(data);
        }
    }, [category_id, data])

    return (
        <div>
            <h2 className="text-2xl font-semibold mb-6">Dragon News Home {news.length}</h2>
            <div className="md:col-span-2">
                {
                    news.length === 0 ? (
                        <div className="p-4 border min-h-60 flex justify-center items-center">
                            <p className="text-4xl text-center text-gray-300 font-bold">No Updates Found</p>
                        </div>
                    ) : (

                        news.map(singleNews => <NewsCard
                            key={singleNews._id}
                            news={singleNews}
                        ></NewsCard>)
                    )
                }
            </div>
        </div>
    );
};

export default CategoryNews;