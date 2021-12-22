import React from 'react';
import CartItem from './CartItem';
import Photo from './Photo';
import data from './data';

const Sec5 = () => {
    return (
        <div className="sec5 container">
            <div className="tabs d-flex">
                <li className="activeTab"><a href="#">Featured Products</a></li>
                <li><a href="#">Most Popular Products</a></li>
                <li><a href="#">New Products</a></li>
            </div>
            <div className="row d-flex justify-content-between">
                {data.productData.map((item, index) => {
                    return (
                        <CartItem
                            img={item.img}
                            title={item.title}
                            price={item.price}
                            item={item}
                            key={index}

                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Sec5
