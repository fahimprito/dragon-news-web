import moment from "moment";
import logo from "../../assets/logo.png"

const Header = () => {
    return (
        <div className="flex flex-col justify-center items-center text-center gap-3 py-8">
            
            <img className="mb-2" src={logo} alt="" />
            <p className="text-xl text-gray-500">Journalism Without Fear or Favour</p>
            <p className="text-xl text-gray-500 font-medium">
                <span className="text-gray-700">{moment().format("dddd, ")}</span>
                {moment().format("MMMM DD, YYYY")}
            </p>
        </div>
    );
};

export default Header;