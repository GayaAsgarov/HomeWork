import React from 'react';
import { useCart } from 'react-use-cart';


const Cart = () => {
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart
    } = useCart();
    //if (isEmpty) return <h1 className="text-center">Your Cart is Empty</h1>


    return (
        <div>
            <section className="container">
                <h2>Your Cart ({totalItems} Items)</h2>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Item</th>
                            <th scope="col">Price</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="d-flex">
                                            <img src={item.img} style={{ height: '6rem' }} />
                                            <div className="name" style={{ "marginLeft": "5px", "marginTop": "30px" }}>
                                                {item.title}
                                            </div>
                                        </td>
                                        <td>
                                            <div className="price" style={{ "marginTop": "30px" }}>
                                                {item.price}
                                            </div>
                                        </td>
                                        <td>
                                            <div className="add">
                                                <i class="fas fa-chevron-up" onClick={() => updateItemQuantity(item.id, item.quantity + 1)}></i>
                                            </div>
                                            <div className="quantity">
                                                {item.quantity}
                                            </div>
                                            <div className="remove">
                                                <i class="fas fa-chevron-down" onClick={() => updateItemQuantity(item.id, item.quantity - 1)}></i>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="total" style={{ "marginTop": "30px" }}>
                                                ${item.quantity * item.price}
                                            </div>
                                            <div className="clear" onClick={()=>removeItem(item.id)}>
                                                <i class="fas fa-times"></i>
                                            </div>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

                <h2>Grand Total: ${cartTotal}</h2>
            </section>
        </div >
    )
}

export default Cart


