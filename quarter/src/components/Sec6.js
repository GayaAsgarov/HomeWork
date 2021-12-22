import React from 'react';
import Sec6Item from './Sec6Item';




const Sec6 = () => {
return (
    <div className="container sec6">
        <h6>Our Aminities</h6>
        <h1>Building Aminities</h1>
        <div className="row justify-content-between mt-5">
            <Sec6Item class="fas fa-car" title="Parking Space" />
            <Sec6Item class="fas fa-swimming-pool" title="Swimming Pool" />
            <Sec6Item class="fas fa-shield-alt" title="Private Security" />
            <Sec6Item class="fas fa-stethoscope" title="Medical Center" />
        </div>
        <div className="row justify-content-between mt-5">
            <Sec6Item class="fas fa-book" title="Library Area" />
            <Sec6Item class="fas fa-bed" title="King Size Beds" />
            <Sec6Item class="fas fa-home" title="Smart Homes" />
            <Sec6Item class="fas fa-gamepad" title="Kid's Playland" />
        </div>
    </div>
)
}

export default Sec6
