import { Link, useLoaderData, useParams } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";
import Header from '../components/Header/Header';
import RightNav from '../components/HomeSideLayouts/RightNav';

const NewsDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const news = data.find(sNews => sNews._id === id);

    const { category_id, title, image_url, details } = news;
    // console.log(news);


    return (
        <div>
            <Header></Header>

            <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="md:col-span-3">
                    <h2 className="text-2xl font-semibold mb-6">Dragon News</h2>

                    <div className='border rounded-md space-y-6 p-4'>
                        <img className='w-full' src={image_url} alt="Shoes" />
                        <h2 className="text-2xl text-gray-700 font-semibold">{title}</h2>
                        <p>{details}</p>
                        <div>
                            <Link
                                to={`/category/${category_id}`}>
                                <button
                                    className="bg-[#D72050] px-6 py-2 text-xl font-medium text-white">
                                    <span className='flex items-center gap-2'><FaArrowLeft />All news in this category</span>
                                </button>
                            </Link>
                        </div>
                    </div>

                </div>
                <div>
                    <RightNav></RightNav>
                </div>

            </div>

        </div>
    );
};

export default NewsDetails;