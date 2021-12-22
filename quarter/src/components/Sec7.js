import React from 'react';
import Photo from './Photo';

const Sec7 = () => {
    const Sec7Item = (props) => {
        return (
            <div className="review">
                <p className="text">
                    <i className="fas fa-quote-left"></i>
                    Precious ipsum dolor sit amet <br />
                    consectetur adipiscing elit, sed dos <br />
                    mod tempor incididunt ut labore et <br />
                    dolore magna aliqua. Ut enim ad min <br />
                    veniam, quis nostrud Precious ips <br />
                    um dolor sit amet, consecte
                </p>
                <div className="author row">
                    <div className="image col">
                        <img src={props.img} alt="error" />
                    </div>
                    <div className="name col">
                        <h5>{props.name}</h5>
                        <span>SELLING AGENTS</span>
                    </div>
                </div>
            </div>
        );
    }
    return (
        <div className="sec7">
            <div className="container">
                <h6>Our Testimonial</h6>
                <h1>Clients Feedback</h1>
                <div className="reviews row d-flex justify-content-between mt-5">
                    <Sec7Item img={Photo.img12} name="Jacob William" />
                    <Sec7Item img={Photo.img13} name="Kelian Anderson" />
                    <Sec7Item img={Photo.img14} name="Adam Joseph" />
                </div>
            </div>
        </div>
    )
}

export default Sec7
