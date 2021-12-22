import React from 'react'

const Sec1top = () => {
    return (
        <div className="container-fluid cont1">
            <div className="container row m-auto justify-content-between">
                <div className="col-4 col1 d-flex">
                    <div className="col col1of1">
                        <a href="javascript:void(0)" className="text-white text-decoration-none">
                            <i className="far fa-envelope" ></i>
                            info@webmail.com
                        </a>
                    </div>
                    <div className="col col2of1">
                        <a href="javascript:void(0)" className="text-white text-decoration-none">
                            <i className="fas fa-map-marker-alt"></i>
                            15/A, Nest Tower, NYC
                        </a>
                    </div>
                </div>
                <div className="col-3 row">
                    <div className="col dropdown aling-center">
                        <a className="btn btn-secondary dropdown-toggle dropBut" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            English <i class="fas fa-arrow-down"></i>
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                            <li><a className="dropdown-item" href="#">Arabic</a></li>
                            <li><a className="dropdown-item" href="#">Bengali</a></li>
                            <li><a className="dropdown-item" href="#">Chinese</a></li>
                            <li><a className="dropdown-item" href="#">English</a></li>
                            <li><a className="dropdown-item" href="#">French</a></li>
                            <li><a className="dropdown-item" href="#">Hindi</a></li>
                        </ul>
                    </div>
                    <div className="col contacts d-flex justify-content-around">
                        <li><a href="javascript:void(0)" className="text-white"><i class="fab fa-facebook-f"></i></a></li>
                        <li><a href="javascript:void(0)" className="text-white"><i class="fab fa-twitter"></i></a></li>
                        <li><a href="javascript:void(0)" className="text-white"><i class="fab fa-instagram"></i></a></li>
                        <li><a href="javascript:void(0)" className="text-white"><i class="fab fa-dribbble"></i></a></li>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sec1top
