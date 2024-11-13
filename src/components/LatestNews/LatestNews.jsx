import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const LatestNews = () => {
    return (
        <div className="flex items-center p-4 bg-base-200">
            <p className="bg-[#D72050] px-6 py-2 text-xl font-medium text-white">Latest</p>
            <Marquee className="text-lg mx-4" pauseOnHover>
                <Link>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque aliquam hic fugiat voluptas ab quas.
                </Link>
                <Link>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque aliquam hic fugiat voluptas ab quas.
                </Link>
                <Link>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque aliquam hic fugiat voluptas ab quas.
                </Link>
            </Marquee>

        </div>
    );
};

export default LatestNews;