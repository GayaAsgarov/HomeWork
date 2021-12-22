import React from 'react';
// import Photo from './Photo';
import ItemSec4 from './ItemSec4';
import data from './DataSec4';

const Sec4 = () => {
    return (
        <div className="sec4">
            <h6>Properties</h6>
            <h1>Featured Listings</h1>
            <div className="row justify-content-around">
                {/* <ItemSec4 img={Photo.img8}  class="rent" rent="rent" />
                <ItemSec4 img={Photo.img9}  class="sale" rent="sale" />
                <ItemSec4 img={Photo.img10}  class="sale" rent="sale" /> */}



                {data.productData.map((item, index) => {
                    return (
                        <ItemSec4
                            img={item.img}
                            // img={item.author}
                            class={item.class}
                            rent={item.rent}
                            item={item}
                            key={index}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Sec4
