import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { FaEye, FaEyeSlash } from "react-icons/fa6";


const Register = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>

            <div className="border md:w-3/4 lg:w-1/2 mx-auto p-16">
                <h2 className="text-3xl font-semibold mb-6 text-center">Register your account</h2>
                <div className="divider py-6"></div>

                <form>
                    <div className="form-control mt-4">
                        <label className="label">
                            <span className="label-text font-semibold text-lg">Your Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Enter your name" className="input rounded-none bg-base-200" required />
                    </div>
                    <div className="form-control mt-4">
                        <label className="label">
                            <span className="label-text font-semibold text-lg">Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Photo URL" className="input rounded-none bg-base-200" required />
                    </div>
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
                    <div className="form-control mt-6">
                        <label className="label justify-start gap-2 cursor-pointer">
                            <input
                                // onChange={() => setCheckTerms(!checkTerms)}
                                type="checkbox"
                                name="terms"
                                className="checkbox w-5 h-5" />
                            <span className="label-text text-[#403F3F]">Agree <span className="font-semibold">Terms and Conditions</span></span>
                        </label>
                    </div>

                    <div className="form-control mt-6">
                        <button
                            className="btn bg-[#403F3F] text-white hover:bg-[#333232] text-base rounded-md">
                            Register
                        </button>
                    </div>

                </form>

            </div>

        </div>
    );
};

export default Register;