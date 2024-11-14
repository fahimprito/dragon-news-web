import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";


const LeftNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div>
            <h2 className="text-2xl font-semibold mb-6">All Categories ({categories.length})</h2>
            <div>
                {
                    categories.map(category =>
                        <NavLink key={category.category_id} 
                        className={`btn btn-lg flex justify-start pl-16 bg-transparent text-xl text-gray-500 border-none`}>
                            {category.category_name}
                        </NavLink>)
                }

            </div>
        </div>
    );
};

export default LeftNav;