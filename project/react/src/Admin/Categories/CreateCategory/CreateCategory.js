import React from 'react'
import './CreateCategory.css';

function CreateCategory() {
    return (
        <>
            <h2 className="admin-panel-categories-create-heading">Create category</h2>
            <form>
                <input type="text" className="input" placeholder="CATEGORY NAME"/>
                <textarea placeholder="CATEGORY DESCRIPTION" className="input no-resize" rows={10}/>
                <button className="btn">Create</button>
            </form>
        </>
    );
}

export default CreateCategory;