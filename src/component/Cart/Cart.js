import {NavLink} from 'react-router-dom'; 
import {connect} from "react-redux";
import { useEffect } from "react";
import {toggleCart} from "../../reduxModule";
import {toggleBackground} from "../../reduxModule";
import {productCart} from "../../reduxModule";
import CartItem from "./CartItem";
import {toggleContentCart} from "../../reduxModule";
import {quantityCarts} from "../../reduxModule";
import {toggleStatusCheckOutRight} from "../../reduxModule"

function Cart(props){

    let {StatusCart, toggleCart, statusContent} = props;
    let {toggleBackground} = props;
    let {product} = props;
    let {toggleContentCart, quantityCarts} = props;
    let {toggleStatusCheckOutRight} = props;

    let totalPrice = product.reduce((total, item) => total + item.price * item.quantity, 0);
    let totalQuantity = product.reduce((total, item) => total + item.quantity, 0)
    useEffect(()=> {
        if(totalPrice > 0){
            return()=>{
                quantityCarts(totalQuantity);
                toggleContentCart(false);
            }
        }
        else if(totalPrice === 0){
            return()=>{
                quantityCarts(totalQuantity);
                toggleContentCart(true);
            }
        }
        
    });
    
    //date
    let date = new Date();
    let month = date.getMonth() + 1 >= 10? date.getMonth() + 1: '0' +(date.getMonth());
    let year = date.getFullYear();
    let day = date.getDate() + 2;

    return (
        <div>
            {
                StatusCart &&
                    <div className="cart_item d-flex">
                            <div onClick={() => {toggleCart(false); toggleBackground(false)}} className="cart-left"></div>
                            <div className='cart-right'>
                                <div className='cart_wrapper d-flex'>
                                    <div className='cart_wrapperTitle'>
                                        Giỏ Hàng của bạn
                                    </div>
                                    <div onClick={() => {toggleCart(false); toggleBackground(false)}} className='cart_wrapperIcon'>
                                        <i  class="fa-sharp fa-solid fa-xmark"></i>
                                    </div>
                                </div>
                                {
                                    statusContent &&
                                        <div className="cart_empty" >
                                            <button className="content" >
                                                Hiện tại chưa có sản phẩm nào trong giỏ hàng của bạn
                                            </button>
                                            <button onClick={() => {toggleCart(false); toggleBackground(false)}} className="btn_sell d-flex">
                                                <div className="btn_sellContent">Mua hàng ngay</div>
                                                <div className="btn_sellIcon">
                                                    <i class="fa-sharp fa-solid fa-arrow-right"></i>
                                                </div>
                                            </button>
                                        </div>
                                }
                                <div className="bannercart d-flex">
                                    <div className="icon-truck">
                                        <i class="fa-solid fa-truck-fast"></i>
                                    </div>
                                    <div className="contentbanner">miễn phí vận chuyển đơn hàng {">"}700k</div>
                                </div>
                                <div className="bodycart">
                                    {
                                        product.map(item => <CartItem key={item.id} quantity = {item.quantity} products = {item}/>)
                                    }
                                    <div className=""></div>
                                </div>
                                {
                                    !statusContent &&
                                        <div className="endcart" onClick={() => {toggleCart(false); toggleBackground(false)}}>
                                            <div className="endcart_pay d-flex">
                                                <div className="left">Thành tiền:</div>
                                                <div className="right">{totalPrice} <span>đ</span></div>
                                            </div>
                                            <NavLink to="/checkout/">
                                                <button className="endcart_btn" onClick={() => toggleStatusCheckOutRight(true)}>thanh toán ngay <i class="fa-sharp fa-solid fa-arrow-right"></i></button>
                                            </NavLink>
                                            <div className="endcart_bill">*Ước tính thời gian ship: <span>{day}/{month}/{year}</span></div>
                                        </div>
                                }
                            </div>
                    </div>
            }
        </div>
    
    );
}

const mapStateToProps = (state) => ({
    StatusCart: state.statusCart,
    statusContent: state.statusContentCart,
    product: state.product
})
const mapDispatchToProps = {
    toggleCart,
    toggleBackground,
    productCart, 
    toggleContentCart,
    quantityCarts,
    //statusQuantityCart
    toggleStatusCheckOutRight,
}
export default (connect)(mapStateToProps, mapDispatchToProps)(Cart);