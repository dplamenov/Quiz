import React from 'react';
import {Helmet} from "react-helmet";

function Title({children}) {
    return (
        <Helmet>
            <title>{children}</title>
        </Helmet>
    );
}

export default Title;