import React, {useEffect, useState} from 'react';
import './HomePage.css';
import adminService from "../../services/admin"
import ReportedErrors from "../ReportedErrors/ReportedErrors";
import LoaderHOC from "../../Core/LoaderHOC";

function HomePage({startLoader, stopLoader}) {
    const [data, setData] = useState([]);

    useEffect(() => {
        startLoader();
        adminService.getData()
            .then(data => {
                setData(data);
                stopLoader();
            });
    }, []);

    return (
        <div className="admin-panel-home-page">
            <p>
                <span className="bold space">Total users</span>
                <span>{data?.users?.count}</span>
            </p>
            <p>
                <span className="bold space">Total questions</span>
                <span>{data?.questions?.count}</span>
            </p>
            <p>
                <span className="bold space">Total categories</span>
                <span>{data?.categories?.count}</span>
            </p>
            <hr/>
            <ReportedErrors/>
        </div>
    );
}

export default LoaderHOC(HomePage);