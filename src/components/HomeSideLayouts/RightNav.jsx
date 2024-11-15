import { FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaSquareXTwitter } from "react-icons/fa6";
import swimImg from "../../assets/swimming.png"
import classImg from "../../assets/class.png"
import playImg from "../../assets/playground.png"
import adsSection from "../../assets/bg.png"
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const RightNav = () => {
    const { loginWithGoogle } = useContext(AuthContext);

    const handleGoogleSignIn = () => {
        loginWithGoogle()
            .then(() => {

            })
            .catch(error => {
                console.log('ERROR', error.message)
            })
    }

    return (
        <div>
            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-2xl font-semibold">Login With</h2>
                <button
                    onClick={handleGoogleSignIn}
                    className="btn btn-outline w-full text-blue-500 font-semibold text-base">
                    <FcGoogle></FcGoogle>
                    Login with Google
                </button>
                <button className="btn btn-outline w-full font-semibold text-base">
                    <FaGithub></FaGithub>
                    Login with Github
                </button>
            </div>

            <div className='p-4 mb-6'>
                <h2 className="text-2xl font-semibold mb-4">Find Us on</h2>
                <a className='p-4 flex text-lg items-center border rounded-t-lg' href="" target="_blank">
                    <span className="mr-2 text-blue-600"><FaFacebook /></span>
                    <span>Facebook</span>
                </a>
                <a className='p-4 flex text-lg items-center border-x' href="" target="_blank">
                    <span className="mr-2"><FaSquareXTwitter /></span>
                    <span>Twitter</span>
                </a>
                <a className='p-4 flex text-lg items-center border rounded-b-lg' href="" target="_blank">
                    <span className="mr-2"><FaInstagram /></span>
                    <span>Instagram</span>
                </a>
            </div>

            <div className='bg-base-200 p-4 space-y-3 mb-6'>
                <h2 className="text-2xl font-semibold">Q Zone</h2>
                <div className="flex flex-col items-center">
                    <img src={swimImg} alt="" />
                    <img src={classImg} alt="" />
                    <img src={playImg} alt="" />
                </div>
            </div>

            <div>
                <img className="w-full" src={adsSection} alt="" />
            </div>
        </div>
    );
};

export default RightNav;