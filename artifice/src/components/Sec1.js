import React from 'react'

const Sec1 = () => {
    return (
        <div className="sec1">
            <div className="container d-flex justify-content-between">
                <div className="left">
                    <p>Biggest Indian Sale Flat 15% Off.</p>
                </div>
                <div className="right d-flex">
                    <li><a href="#">gift certificates</a></li>
                    <li><a href="#">
                        <select className="form-select" aria-label="Default select example">
                            <option selected>Select Currency: USD</option>
                            <option value="1">Default Currency</option>
                            <option value="2">Dollar</option>
                        </select>
                    </a></li>
                    <li><a href="#">Login</a></li>
                    <li>or</li>
                    <li><a href="#">Sign Up</a></li>
                </div>
            </div>
        </div>
    )
}

export default Sec1
