import { Link } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";


const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div>
            <div className="mb-6">
                <Navbar></Navbar>
            </div>

            <div className="border md:w-3/4 lg:w-1/2 mx-auto p-16">
                <h2 className="text-3xl font-semibold mb-6 text-center">Login your account</h2>
                <div className="divider py-6"></div>

                <form>
                    <div className="form-control mt-4">
                        <label className="label">
                            <span className="label-text font-semibold text-lg">Email address</span>
                        </label>
                        <input type="email" name="email" placeholder="Enter your email address" className="input rounded-none bg-base-200" required />
                    </div>
                    <div className="form-control mt-4 relative">
                        <label className="label">
                            <span className="label-text font-semibold text-lg">Password</span>
                        </label>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password" placeholder="Enter your password"
                            className="input rounded-none bg-base-200" required />
                        <button
                            onClick={() => setShowPassword(!showPassword)}
                            type="button"
                            className="btn btn-xs bg-transparent border-none hover:bg-transparent text-base absolute right-2 top-14 ">
                            {showPassword ? <FaEye /> : <FaEyeSlash />}
                        </button>
                    </div>

                    <div className="form-control mt-10">
                        <button className="btn bg-[#403F3F] text-white hover:bg-[#333232] text-base rounded-md">Login</button>
                    </div>

                </form>
                <p className="text-center mt-10">Do not have an account <Link className="text-orange-600 font-bold" to="/register">Register</Link></p>

            </div>


        </div>
    );
};

export default Login;