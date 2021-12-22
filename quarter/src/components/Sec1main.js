import React from 'react'

const Sec1main = () => {
    return (
        <div className="container">
            <div className="mybutton">
                <button><i class="fas fa-home"></i> RENT HOME</button>
                <button className="bg-white text-black"><i class="fas fa-home"></i> SALE HOME</button>
            </div>
            <div className="inputs" >
                <div className="row row1">
                    <form>
                        <select name="pets" id="pet-select">
                            <option value="">Property Type</option>
                            <option value="apartment">Apartment</option>
                            <option value="co-op">Co-op</option>
                            <option value="condo">Condo</option>
                            <option value="single family home">Single Family Home</option>
                        </select>
                        <select className="mid" name="pets" id="pet-select">
                            <option value="">Location</option>
                            <option value="chicago">Chicago</option>
                            <option value="london">London</option>
                            <option value="los angeles">Los Angeles</option>
                            <option value="new york">New York</option>
                            <option value="new jersey">New Jersey</option>
                        </select>
                        <select name="pets" id="pet-select">
                            <option value="">Sub Location</option>
                            <option value="bayonne">Bayonne</option>
                            <option value="greenville">Greenville</option>
                            <option value="manhattan">Manhattan</option>
                            <option value="heights">The Heights</option>
                            <option value="east">Upper East Side</option>
                            <option value="west">West Side</option>
                        </select>
                    </form>
                </div>
                <div className="row row2">
                    <select name="pets" id="pet-select">
                        <option value="">Bedrooms</option>
                        <option value="one">1</option>
                        <option value="two">2</option>
                        <option value="three">3</option>
                        <option value="four">4</option>
                    </select>
                    <input className="mid" type="number" placeholder="Min size (in sqft)" />
                    <input className="last" type="number" placeholder="Max size (in sqft)" />
                </div>
                <div className="row row3">
                    <div>
                        <input className="typerange" type="range" id="volume" name="volume" min="50" max="5000"/>
                    </div>
                </div>
                <div className="row row4 pb-5">
                    <button>SEARCH INVENTORY</button>
                </div>
            </div>
        </div>
    )
}

export default Sec1main
