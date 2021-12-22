import React from 'react';
import Photo from './Photo';

const Sec8 = () => {

    const Sec8Item = (props) => {
        return (
            <div className="item">
                <div className="imgbox">
                    <img src={props.img} alt="error" />
                </div>
                <div className="infos row">
                    <div className="col-4">
                        <i class="far fa-user"></i>
                        <a href="#">by: Admin</a>
                    </div>
                    <div className="col-4">
                        <i class="fas fa-tags"></i>
                        <a href="#">{props.decor}</a>
                    </div>
                </div>
                <div className="title">
                    <a href="#">{props.title}</a>
                </div>
                <div className="line"></div>
                <div className="more row">
                    <div className="date col-6">
                        <span>
                            <i class="far fa-calendar-alt"></i>
                            {props.date}, 2021
                        </span>
                    </div>
                    <div className="link col-6">
                        <a href="#">read more</a>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="container sec8">
            <h6>News & Blogs</h6>
            <h1>Latest News Feeds</h1>
            <div className="items row justify-content-between mt-5">
                <Sec8Item img={Photo.img10} decor="Decorate" title="10 brilliant ways to decorate your home" date="June 24"/>
                <Sec8Item img={Photo.img9} decor="Interior" title="the most inspiring interior design of 2021" date="July 23"/>
                <Sec8Item img={Photo.img15} decor="Estate" title="recent commercial real estate transactions" date="May 22"/>
            </div>
        </div>
    )
}

export default Sec8
