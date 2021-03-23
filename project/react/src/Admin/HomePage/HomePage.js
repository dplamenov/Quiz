import React, {useEffect, useState} from 'react';
import './HomePage.css';
import adminService from "../../services/admin"

function HomePage() {
    const [data, setData] = useState([]);

    useEffect(() => {
        adminService.getData()
            .then(data => setData(data));
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
            {/*todo display all question error reports from other (new) component*/}
        </div>
    );
}

export default HomePage;