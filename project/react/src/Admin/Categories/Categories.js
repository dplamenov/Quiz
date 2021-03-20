import React, {useEffect, useState} from "react";
import adminService from "../../services/admin";
import './Categories.css';

function Categories({history}) {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        adminService.getAllCategories()
            .then(categories => setCategories(categories.sort((u1, u2) => u1.id - u2.id)));
    }, []);

    return (
        <>
            <h1>Categories</h1>
            <section className="admin-panel-categories-actions">
                <button className="btn" onClick={() => history.push('/admin/categories/create')}>
                    Create category
                </button>
            </section>
            <table className="custom-table">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Category name</th>
                    <th>Edit</th>
                    <th>Edit</th>
                </tr>
                </thead>
                <tbody>
                {categories.map(cat => {
                    return (
                        <tr key={cat.id}>
                            <td>{cat.id}</td>
                            <td>{cat.name}</td>
                            <td>Edit</td>
                            <td>Delete</td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
            {categories.length === 0 ? <p>No categories.</p> : ''}
        </>
    );
}

export default Categories;