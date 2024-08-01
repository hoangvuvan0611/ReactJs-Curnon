import { connect } from "react-redux";
import {deleteCart} from "../../reduxModule"
import {increaseProductCart} from "../../reduxModule"
import {reduceProductCart} from "../../reduxModule"
import {toggleContentCart} from "../../reduxModule"

function CartItem(props){

    let {products, deleteCart, reduceProductCart, increaseProductCart, toggleContentCart} = props

    return(
        <div className="bodycart_products d-flex">
            <div className="imageproduct">
                <button className="iconclose" onClick={() => {deleteCart(products); toggleContentCart(true)}}>
                    <i class="fa-solid fa-xmark"></i>
                </button>
                <img src={products.image} alt="img"/>
            </div>
            <div className="deltalproduct">
                <div className="name_price d-flex">
                    <div className="name col-6">{products.name}</div>
                    <div className="price col-4">{products.price}{" "} 
                        <span>đ</span>
                    </div>
                </div>
                <div className="sz_qty d-flex">
                    <div className="size">{products.size}mm</div>
                    <div className="quantity d-flex">
                        <button className="reduce" onClick={() => {reduceProductCart(products); toggleContentCart(true)}}>
                            <i class="fa-solid fa-minus"></i>
                        </button>
                        <div className="qty">Qty: {products.quantity}</div>
                        <button className="raise" onClick={() => increaseProductCart(products)}>
                            <i class="fa-solid fa-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    deleteCart,
    increaseProductCart,
    reduceProductCart,
    toggleContentCart
}   
export default connect(null, mapDispatchToProps)(CartItem);