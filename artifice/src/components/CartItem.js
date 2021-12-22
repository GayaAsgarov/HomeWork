import React from 'react';
import {useCart} from 'react-use-cart';
import {  Link } from 'react-router-dom';

const CartItem = (props) => {

    const {addItem} = useCart();

    return (
        <div className="item">
            <div className="imgbox">
                <img src={props.img} alt="error" />
                <div className="stars">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                </div>
                <div className="check">
                    <input type="checkbox" id="comp" name="comp" value="Compare" />
                    <label for="comp">Compare</label><br />
                </div>
            </div>
            <h5><a href="#">{props.title}</a></h5>
            <p className="price">${props.price}</p>
            <div className="links d-flex">
                <Link to="/cart" onClick={()=>addItem(props.item)}>Add To Cart</Link>
                <div className="seperator"></div>
                <a href="#">Quick View</a>
            </div>
        </div>
    )
}

export default CartItem
