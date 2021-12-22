import React from 'react';
import Photo from './Photo';

const Sec2 = () => {
    return (
        <div className="sec2">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container-fluid row d-flex justify-content-between">
                        <div className="logo">
                            <a className="navbar-brand" href="#"><img src={Photo.img1} alt="error" /></a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon" />
                            </button>
                        </div>
                        <div className="collapse navbar-collapse links col-2" id="navbarNavDropdown">
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Electronics
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <div className="col dropdown-item elec">
                                            <h3><a href="#">All Electronics</a></h3>
                                        </div>
                                        <div className="col dropddown-item">
                                            <h3><a href="#">Desktop</a></h3>
                                            <li><a href="#">Keyboard</a></li>
                                            <li><a href="#">Motherboard</a></li>
                                            <li><a href="#">Mouse</a></li>
                                        </div>
                                        <div className="col dropddown-item">
                                            <h3><a href="#">Laptop</a></h3>
                                            <li><a href="#">Cleaner</a></li>
                                            <li><a href="#">Hard Disk</a></li>
                                            <li><a href="#">Screen</a></li>
                                            <li><a href="#">Solid Drive</a></li>
                                        </div>
                                        <div className="col dropddown-item">
                                            <h3><a href="#">Mobile</a></h3>
                                            <li><a href="#">Bluetooth</a></li>
                                            <li><a href="#">Card</a></li>
                                            <li><a href="#">Cover</a></li>
                                            <li><a href="#">Earphone</a></li>
                                        </div>
                                        <div className="col dropddown-item">
                                            <h3><a href="#">TV</a></h3>
                                            <li><a href="#">Remote</a></li>
                                            <li><a href="#">Speaker</a></li>
                                            <li><a href="#">Woofer</a></li>
                                            <li><a href="#">Projector</a></li>
                                        </div>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Footware</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Player</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Clothing</a>
                                </li>
                                <li className="nav-item mx-2">
                                    <a className="nav-link" href="#">Accessories</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Furniture</a>
                                </li>
                                {/* <div className="seperator"></div> */}
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Sec2
