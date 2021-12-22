import React from 'react';
import Photo from './Photo'

const Sec1nav = () => {
    return (
        <div className="container">
            <nav className="navbar navbar-light justify-content-between">
                <a className="navbar-brand"><img src={Photo.img1} /></a>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Home+
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a className="dropdown-item" href="#">Home Style 01</a></li>
                        <li><a className="dropdown-item" href="#">Home Style 02</a></li>
                        <li><a className="dropdown-item" href="#">Home Style 03</a></li>
                        <li><a className="dropdown-item" href="#">Home Style 04</a></li>
                        <li><a className="dropdown-item" href="#">Home Style 05</a></li>
                        <li><a className="dropdown-item" href="#">Home Style 06</a></li>
                        <li><a className="dropdown-item" href="#">Home Style 07</a></li>
                        <li><a className="dropdown-item" href="#">Home Style 08</a></li>
                        <li><a className="dropdown-item" href="#">Home Style 09</a></li>
                        <li><a className="dropdown-item" href="#">Home Style 10</a></li>
                        <li><a className="dropdown-item" href="#">Home Style 11</a></li>
                    </ul>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        About+
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a className="dropdown-item" href="#">About</a></li>
                        <li><a className="dropdown-item" href="#">Services</a></li>
                        <li><a className="dropdown-item" href="#">Service Details</a></li>
                        <li><a className="dropdown-item" href="#">Portfolio</a></li>
                        <li><a className="dropdown-item" href="#">Portfolio - 02</a></li>
                        <li><a className="dropdown-item" href="#">Portfolio Details</a></li>
                        <li><a className="dropdown-item" href="#">Team</a></li>
                        <li><a className="dropdown-item" href="#">Team Details</a></li>
                        <li><a className="dropdown-item" href="#">FAQ</a></li>
                        <li><a className="dropdown-item" href="#">Google Map Locations</a></li>
                    </ul>
                </li>
                <li className="nav-item dropdown text-white">
                    <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Shop+
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a className="dropdown-item" href="#">Shop</a></li>
                        <li><a className="dropdown-item" href="#">Shop Grid</a></li>
                        <li><a className="dropdown-item" href="#">Shop Left Sidebar</a></li>
                        <li><a className="dropdown-item" href="#">Shop Right Sidebar</a></li>
                        <li><a className="dropdown-item" href="#">Shop Details</a></li>
                        <li><a className="dropdown-item" href="#">Portfolio Details</a></li>
                        <li><a className="dropdown-item" href="#">Team</a></li>
                        <li><a className="dropdown-item" href="#">Team Details</a></li>
                        <li><a className="dropdown-item" href="#">FAQ</a></li>
                        <li><a className="dropdown-item" href="#">Google Map Locations</a></li>
                    </ul>
                </li>
                <li className="nav-item dropdown text-white">
                    <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        News+
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                        <li><a className="dropdown-item" href="#">News</a></li>
                        <li><a className="dropdown-item" href="#">News Grid</a></li>
                        <li><a className="dropdown-item" href="#">News Left Sidebar</a></li>
                        <li><a className="dropdown-item" href="#">News Right Sidebar</a></li>
                        <li><a className="dropdown-item" href="#">News Details</a></li>
                    </ul>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Pages+
                    </a>
                    <ul className="dropdown-menu dropmenupage droppage" aria-labelledby="navbarDropdownMenuLink">
                        <div className="col">
                            <li className="title">
                                <a href="#">Inner Pages</a>
                            </li>
                            <li><a href="#">Portfolio </a></li>
                            <li><a href="#">Portfolio - 02</a></li>
                            <li><a href="#">Portfolio Details</a></li>
                            <li><a href="#">Team</a></li>
                            <li><a href="#">Team Details</a></li>
                            <li><a href="#">FAQ</a></li>
                        </div>
                        <div className="col">
                            <li className="title">
                                <a href="#">Inner Pages</a>
                            </li>
                            <li><a href="#">History</a></li>
                            <li><a href="#">Add listing</a></li>
                            <li><a href="#">Google Map Locations</a></li>
                            <li><a href="#">404</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">Coming Soon</a></li>
                        </div>
                        <div className="col">
                            <li className="title">
                                <a href="#">Shop Pages</a>
                            </li>
                            <li><a href="#">Shop</a></li>
                            <li><a href="#">Shop Left Sidebar</a></li>
                            <li><a href="#">Shop Right Sidebar</a></li>
                            <li><a href="#">Shop Grid</a></li>
                            <li><a href="#">Shop Details</a></li>
                            <li><a href="#">Cart</a></li>
                        </div>
                        <div className="col colimg">
                            <img src={Photo.img2} />
                        </div>
                    </ul>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Contact
                    </a>
                </li>
                <button>
                    Add Listing
                </button>
            </nav>
        </div>
    )
}

export default Sec1nav
