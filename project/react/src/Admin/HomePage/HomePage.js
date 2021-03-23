import React from 'react';
import './HomePage.css';

function HomePage() {
    return (
        <div className="admin-panel-home-page">
            <p>
                <span className="bold space">Total users</span>
                <span>5</span>
            </p>
            <p>
                <span className="bold space">Total questions</span>
                <span>5</span>
            </p>
            <p>
                <span className="bold space">Total categories</span>
                <span>5</span>
            </p>
        </div>
    );
}

export default HomePage;