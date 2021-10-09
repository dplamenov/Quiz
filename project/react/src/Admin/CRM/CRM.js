import React from 'react';
import {NavLink} from "react-router-dom";


function CRM() {
    return (
        <>
            <h2>Customer relationship management</h2>
            <NavLink to={`/admin/crm/email-marketing`}>Email marketing</NavLink>
        </>
    );
}

export default CRM;