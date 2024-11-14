import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";


const LatestNews = () => {
    return (
        <div className="flex items-center p-4 bg-base-200">
            <p className="bg-[#D72050] px-6 py-2 text-xl font-medium text-white">Latest</p>
            <Marquee className="text-lg mx-4" pauseOnHover>
                <Link>
                    Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet
                </Link>
                <Link>
                    Zelensky says he had ‘great conversation with Biden, discussed Kiev`s further steps
                </Link>
                <Link>
                    George Russell wears $110 Daniel Ricciardo merchandise to Zandvoort paddock ahead of Dutch GP
                </Link>
            </Marquee>

        </div>
    );
};

export default LatestNews;