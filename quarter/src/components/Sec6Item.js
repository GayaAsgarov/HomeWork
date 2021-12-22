import React from 'react';

const Sec6Item = (props) => {
    return (
        <div className="box">
            <div className="myicon">
                <i className={props.class}></i>
            </div>
            <h2>{props.title}</h2>
            <div className="arrow">
                <a href="#">
                    <i className="fas fa-arrow-right"></i>
                </a>
            </div>
        </div>
    )
}

export default Sec6Item
