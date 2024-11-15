import { useContext, useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { AuthContext } from "../providers/AuthProvider";


const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState({});

    const handleRegister = e => {
        e.preventDefault();
        // get form data 
        const form = new FormData(e.target);
        const name = form.get("name");
        const photo = form.get("photo");
        const email = form.get("email");
        const password = form.get("password");
        console.log({ name, photo, email, password });
        
        setError({});

        if (name.length < 4) {
            setError({ ...error, name: "name should be more then 4 character" });
            return
        }


        // create user
        createUser(email, password)
            .then(result => {
                console.log(result.user);
                e.target.reset();
            })
            .catch(error => {
                console.log('ERROR', error.message)
            })

    }

    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>

            <div className="border md:w-3/4 lg:w-1/2 mx-auto p-16">
                <h2 className="text-3xl font-semibold mb-6 text-center">Register your account</h2>
                <div className="divider py-6"></div>

                <form onSubmit={handleRegister}>
                    <div className="form-control mt-4">
                        <label className="label">
                            <span className="label-text font-semibold text-lg">Your Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Enter your name" className="input rounded-none bg-base-200" required />
                        {error.name && (
                            <label className="label text-sx text-red-500">{error.name}</label>
                        )}
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