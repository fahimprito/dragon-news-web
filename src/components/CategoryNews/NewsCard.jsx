import { Link } from "react-router-dom";
import { FaShareAlt, FaRegEye } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
import PropTypes from 'prop-types';


const NewsCard = ({ news }) => {
    const { title, image_url, details, _id, author } = news;
    return (
        <div className="border bg-base-100 mb-16">
            {/* Author Information */}
            <div className="flex items-center mb-4 p-4 bg-base-200">
                <img
                    src={author.img}
                    alt={author.name}
                    className="w-10 h-10 rounded-full mr-3"
                />
                <div>
                    <p className="font-semibold">{author.name}</p>
                    <p className="text-sm text-gray-500">{author.published_date}</p>
                </div>
                <div className="ml-auto">
                    <FaShareAlt className="text-gray-600" />
                </div>
            </div>

            <div className="p-6">

                <h2 className="text-2xl text-gray-700 font-semibold">{title}</h2>
                <figure><img src={image_url} alt="Shoes" /></figure>
                <div>

                    {
                        details.length > 200
                            ? <p>{details.slice(0, 200)} <Link
                                to={`/news/${_id}`}
                                className="text-blue-600 font-bold">Read More...</Link></p>
                            : <p>{details}</p>
                    }

                    <div className="flex items-center justify-between text-gray-600 text-sm">
                        {/* Rating */}
                        <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                                <AiFillStar
                                    key={i}
                                    className={`text-yellow-500 ${i < Math.round(news.rating.number) ? "" : "opacity-50"
                                        }`}
                                />
                            ))}
                            <span className="ml-2 font-semibold">{news.rating.number}</span>
                        </div>

                        {/* Views */}
                        <div className="flex items-center">
                            <FaRegEye className="mr-1" />
                            <span>{news.total_view}</span>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

NewsCard.propTypes = {
    news: PropTypes.object
};

export default NewsCard;