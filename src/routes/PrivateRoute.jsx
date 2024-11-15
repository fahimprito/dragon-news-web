import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import PropTypes from "prop-types";
import { Navigate } from "react-router-dom";
import Loading from "../components/Loading/Loading";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <Loading></Loading>
    }

    if (user) {
        return children;
    }

    return (
        <div>
            <Navigate to="/login"></Navigate>
        </div>
    );
};

PrivateRoute.propTypes = {
    children: PropTypes.object
};

export default PrivateRoute;