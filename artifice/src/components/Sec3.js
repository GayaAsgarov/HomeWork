import React from 'react';
import Photo from './Photo';

const Sec3 = () => {
    return (
        <div className="sec3 container">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={Photo.img2} className="d-block w-100" alt="error" />
                    </div>
                    <div className="carousel-item">
                        <img src={Photo.img3} className="d-block w-100" alt="error" />
                    </div>
                </div>
                <button className="carousel-control-prev bt-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default Sec3
