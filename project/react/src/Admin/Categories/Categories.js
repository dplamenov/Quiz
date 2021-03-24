import React, {useEffect, useState} from "react";
import adminService from "../../services/admin";
import './Categories.css';
import {Link} from "react-router-dom";
import DeleteCategory from "./DeleteCategory/DeleteCategory";
import LoaderHOC from "../../Core/LoaderHOC";

function Categories({history, startLoader, stopLoader}) {
    const [categories, setCategories] = useState([]);
    const [deleteCategory, setDeleteCategory] = useState(false);

    const getAll = () => {
        startLoader();
        adminService.getAllCategories()
            .then(categories => {
                return setCategories(() => {
                    stopLoader();
                    return categories.sort((u1, u2) => u1.id - u2.id);
                });
            });
    }

    useEffect(() => {
        getAll();
    }, []);

    const closeDeleteCategoryHandler = () => {
        setDeleteCategory(false);
    };

    const deleteHandler = (catId) => {
        return () => {
            setDeleteCategory(catId);
        };
    };

    const yesHandler = () => {
        setDeleteCategory(false);
        getAll();
    };

    return (
        <>
            {deleteCategory ?
                <DeleteCategory id={deleteCategory} closeHandler={closeDeleteCategoryHandler}
                                yesHandler={yesHandler}/> : ''}
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
                            <td><Link to={'category/' + cat.id + '/edit'}><img src="/images/edit.png" alt=""/></Link>
                            </td>
                            <td onClick={deleteHandler(cat.id)} className="cursor-pointer"><img src="/images/delete.png"
                                                                                                alt=""/></td>
                        </tr>
                    );
                })}
                </tbody>
            </table>
            {categories.length === 0 ? <p>No categories.</p> : ''}
        </>
    );
}

export default LoaderHOC(Categories);