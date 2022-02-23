import React from 'react';

function Loader({ loading }) {
    return (
        <div className={`ui ${loading ? 'active' : ''} centered inline loader`}></div>

    )
}

export default Loader