import { useLoaderData } from "react-router-dom";
import NewsCard from "./NewsCard";


const CategoryNews = () => {
    const news = useLoaderData();
    console.log(news);


    return (
        <div>
            <h2 className="text-2xl font-semibold mb-6">Dragon News Home {news.length}</h2>
            <div className="md:col-span-2">
                {
                    news.map(singleNews => <NewsCard
                        key={singleNews._id}
                        news={singleNews}
                    ></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;