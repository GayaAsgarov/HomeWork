import React from 'react';
import Photo from './Photo';

const Sec3 = () => {
    const Sec3focus = (props) => {
        return (
            <div className="focus">
                <img src={props.myPhoto} />
                <div><a href="#" className="mainlink">{props.verb} a home</a></div>
                <p>
                    over 1 million+ homes for sale available on the website, we can match you with a house you will want to call home.
                </p>
                <a className="find" href="#">Find A Home <i class="fas fa-arrow-right"></i></a>
            </div>
        );
    }
    return (
        <div className="container-fluid sec3 pb-5">
            <div className="container">
                <h6>Our Services</h6>
                <h1>Our Main Focus</h1>
                <div className="focuses d-flex justify-content-between mt-5">
                    <Sec3focus myPhoto={Photo.img5} verb="Buy" />
                    <Sec3focus myPhoto={Photo.img6} verb="Rent" />
                    <Sec3focus myPhoto={Photo.img7} verb="Sell" />
                </div>
            </div>
        </div>
    )
}

export default Sec3
