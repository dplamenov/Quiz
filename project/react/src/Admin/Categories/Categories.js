import React, {useEffect, useState} from "react";
import adminService from "../../services/admin";

function Categories() {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        adminService.getAllCategories()
            .then(categories => setCategories(categories.sort((u1, u2) => u1.id - u2.id)));
    }, []);

    return (
        <>
            <h1>Categories</h1>
            {categories.map(cat => {
                console.log(cat);
            })}
        </>
    );
}

export default Categories;