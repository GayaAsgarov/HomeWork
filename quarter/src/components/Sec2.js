import React from 'react';
import Photo from './Photo';

const Sec2 = () => {
    const Sec2Items = (props) => {
        return (
            <div className="item">
                <div className="box">
                    <img className="sec2imgman" src={Photo.img4} />
                </div>
                <p>FOR {props.rent}</p>
                <li className="titl"><a href="#">New Appartment Nice View</a></li>
                <li className="loc"><a href="#">
                    <i class="fas fa-map-marker-alt"></i>
                    Belmont Gardens, Chicago
                </a></li>
                <div className="service">
                    <div>3 Bed</div>
                    <div>2 Bath</div>
                    <div>3450 Square Ft</div>
                </div>
                <div className="lnks">
                    <div>
                        <i class="fas fa-expand-alt"></i>
                    </div>
                    <div>
                        <i class="far fa-heart"></i>
                    </div>
                    <div>
                        <i class="far fa-plus-square"></i>
                    </div>
                </div>
                <hr />
                <h5>$34,900 <span>/Month</span></h5>
            </div>
        );
    }


    return (
        <div className="container">
            <h6>Property</h6>
            <h1>Latest Listings</h1>
            <div className="row d-flex justify-content-between mt-5">
                <Sec2Items rent="RENT" />
                <Sec2Items rent="SALE" />
                <Sec2Items rent="RENT" />
            </div>
            <div className="row d-flex justify-content-between mt-5">
                <Sec2Items rent="RENT" />
                <Sec2Items rent="RENT" />
                <Sec2Items rent="RENT" />
            </div>
        </div>
    )
}

export default Sec2
