import React from 'react';
import Photo from './Photo';

const Garden = () => {
    return (
        <div className="sec5-main row">
                <div className="studio col-6">
                    <h2>Top Garden</h2>
                    <p>Enimad minim veniam quis nostrud exercitation ullamco <br />
                        laboris. Lorem ipsum dolor sit amet cons aetetur adipisicing <br />
                        elit sedo eiusmod tempor.Incididunt labore et dolore magna <br />
                        aliqua. sed ayd minim veniam.
                    </p>
                    <div className="info d-flex row">
                        <span className="col-3">Total Area</span>
                        <div className="dashes col-6"></div>
                        <span className="col-3">2800 Sq. Ft</span>
                    </div>
                    <div className="info row">
                        <span className="col-3">Bedroom</span>
                        <div className="dashes col-6"></div>
                        <span className="col-3">150 Sq. Ft</span>
                    </div>
                    <div className="info row">
                        <span className="col-3">Bathroom</span>
                        <div className="dashes col-6"></div>
                        <span className="col-3">45 Sq. Ft</span>
                    </div>
                    <div className="info row">
                        <span className="col-3">Belcony/Pets</span>
                        <div className="dashes col-6"></div>
                        <span className="col-3">Allowed</span>
                    </div>
                    <div className="info row">
                        <span className="col-3">Lounge</span>
                        <div className="dashes col-6"></div>
                        <span className="col-3">650 Sq. Ft</span>
                    </div>
                </div>
                <div className="plan col-6">
                    <img src={Photo.img11} alt="error" />
                </div>
            </div>
    )
}

export default Garden
