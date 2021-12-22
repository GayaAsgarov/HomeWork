import React from 'react';
import Sec1top from './Sec1top';
import Sec1nav from './Sec1nav';
import Sec1main from './Sec1main';

const Sec1 = () => {
    return (
        <div className="container-fluid sec1container">
            <Sec1top />
            <Sec1nav />
            <Sec1main />
        </div>
    )
}

export default Sec1
