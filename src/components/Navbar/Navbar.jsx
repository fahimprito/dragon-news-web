import { Link, NavLink } from "react-router-dom";
import userIcon from "../../assets/user.png"
import { FaBars } from "react-icons/fa6";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Navbar = () => {
    const { user, logOutUser } = useContext(AuthContext);

    // const handleLogOut = () => {
    //     logOutUser()
    //         .then(() => {
    //             console.log('user sign out successfully')
    //         })
    //         .catch(error => console.log('ERROR', error.message))
    // }

    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/career">Career</NavLink></li>
    </>

    return (
        <div>
            <div className="navbar bg-base-100 px-0 py-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <span className="text-xl"><FaBars /></span>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <div>
                        {user?.name}
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-base text-gray-500">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end gap-2">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={userIcon} />
                        </div>
                    </label>
                    {
                        user ?
                            <button
                                onClick={logOutUser}
                                className="btn bg-[#403F3F] text-white hover:bg-[#333232] text-base rounded-none px-10">
                                Log Out
                            </button>
                            :
                            <Link to="/login">
                                <button
                                    className="btn bg-[#403F3F] text-white hover:bg-[#333232] text-base rounded-none px-10">
                                    Login
                                </button>
                            </Link>
                    }


                </div>
            </div>
        </div>
    );
};

export default Navbar;