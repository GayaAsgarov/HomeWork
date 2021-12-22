import React from 'react';
import Photo from './Photo';
//import DataSec4 from './DataSec4';

const ItemSec4 = (props) => {
    return (
        <div className="feature">
            <div className="imgbox">
                <img src={props.img} alt="error" />
                <span className={props.class}>for {props.rent}</span>
                <div className="info row mx-1">
                    <div className="location col-6">
                        <a href="#">
                            <i class="fas fa-map-marker-alt"></i>
                            Belmont Gardens, Chicago
                        </a>
                    </div>
                    <div className="detail col row">
                        <div className="photo col-3 ml-2">
                            <i class="fas fa-camera"></i>4
                        </div>
                        <div className="photo col-3">
                            <i class="fas fa-film"></i>2
                        </div>
                    </div>
                </div>
            </div>
            <div className="price">
                <p>$34,900 <span>/Month</span></p>
            </div>
            <div className="title">
                <a href="#">new appartment nice view</a>
            </div>
            <p className="text">
                beautiful huge 1 family house in heart of <br />
                westbury. newly renovated with new wood
            </p>
            <div className="service row">
                <div className="col-3">
                    3 <i class="fas fa-bed"></i> <br />
                    Bedrooms
                </div>
                <div className="col-3 bath">
                    2 <i class="fas fa-bath"></i> <br />
                    Bathrooms
                </div>
                <div className="col-3">
                    3450 <i class="far fa-square"></i> <br />
                    square Ft
                </div>
            </div>
            <hr />
            <div className="product-info row">
                <div className="owner row col">
                    <div className="img col">
                        <img src={Photo.img4} alt="error" />
                    </div>
                    <div className="name col">
                        <h4>William Seklo</h4>
                        <h6>Estate Agents</h6>
                    </div>
                </div>
                <div className="icons row col">
                    <div className="col-1 expand">
                        <i class="fas fa-expand-alt"></i>
                    </div>
                    <div className="col-1 like">
                        <i class="far fa-heart"></i>
                    </div>
                    <div className="col-1 plus">
                        <i class="far fa-plus-square"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemSec4
