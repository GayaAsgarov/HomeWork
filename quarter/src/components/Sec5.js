import React from 'react';
import Photo from './Photo';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Studio from './Studio';
import Deluxe from './Deluxe';
import Penthouse from './Penthouse';
import Garden from './Garden';
import Double from './Double';

const Sec5 = () => {
    return (
        <div className="container sec5">
            <h6>Apartment Sketch</h6>
            <h1>Apartments Plan</h1>
            <div className="links row justify-content-center">
                <Router>
                    <li className="col-2"><Link to="/" className="active">The Studio</Link></li>
                    <li className="col-2"><Link to="/deluxe">Deluxe Portion</Link></li>
                    <li className="col-2"><Link to="/penthouse">Penthouse</Link></li>
                    <li className="col-2"><Link to="/garden">Top Garden</Link></li>
                    <li className="col-2"><Link to="/double">Double Height</Link></li>

                    <Switch>
                        <Route exact path="/">
                            <Studio />
                        </Route>
                        <Route path="/deluxe">
                            <Deluxe />
                        </Route>
                        <Route path="/penthouse">
                            <Penthouse />
                        </Route>
                        <Route path="/garden">
                            <Garden />
                        </Route>
                        <Route path="/double">
                            <Double />
                        </Route>
                    </Switch>
                </Router>
            </div>
            {/* <div className="sec5-main row">
                <div className="studio col-6">
                    <h2>The Studio</h2>
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
            </div> */}
        </div >
    )
}

export default Sec5
