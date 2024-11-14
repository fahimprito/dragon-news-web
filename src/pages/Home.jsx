import Header from "../components/Header/Header";
import LeftNav from "../components/HomeSideLayouts/LeftNav";
import RightNav from "../components/HomeSideLayouts/RightNav";
import LatestNews from "../components/LatestNews/LatestNews";
import Navbar from "../components/Navbar/Navbar";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <LatestNews></LatestNews>
            <Navbar></Navbar>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="">
                    <LeftNav></LeftNav>
                </div>
                <div className="md:col-span-2 border">
                    news container
                </div>
                <div>
                    <RightNav></RightNav>
                </div>
            </div>

        </div>
    );
};

export default Home;