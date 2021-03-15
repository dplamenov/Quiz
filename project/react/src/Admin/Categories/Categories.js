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
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Category name</th>
                </tr>
                </thead>
                <tbody>
                {categories.map(cat => {
                    return (
                        <tr key={cat.id}>
                            <td>{cat.id}</td>
                            <td>{cat.name}</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>

        </>
    );
}

export default Categories;