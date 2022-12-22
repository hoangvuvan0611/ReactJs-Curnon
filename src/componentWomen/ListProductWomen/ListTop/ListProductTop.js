import {connect} from "react-redux"
import {toggleCart} from "../../../reduxModule"
import {toggleBackground} from "../../../reduxModule"
import {toggleContentCart} from "../../../reduxModule"
import {productCart} from "../../../reduxModule"

function ListProductTop(props){

    let {products} = props
    let {toggleCart, toggleBackground, toggleContentCart, productCart} = props;
    return(
        <div className="bestseller_productsChild col-3">
            <div className="bestseller_productsChildImg">
                <img src={products.image}/>
                <div className="bestseller_productsChildImg_btn" onClick={() => (toggleCart(true), toggleBackground(true), toggleContentCart(false))}>
                    <button onClick={() => productCart(products)}>thêm vào giỏ</button>
                </div>
            </div>
            <div className="bestseller_productsChildType">
                {products.type}
            </div>
            <div className="bestseller_productsChildName">
                {products.name}
            </div>
            <div className="bestseller_productsChildPrice d-flex">
                <div className="bestseller_productsChildPrice-price">
                    {products.price} <span className="unit">đ</span>
                </div>
                <div className="bestseller_productsChildPrice-oldprice">
                    {products.oldprice} <span className="unit">đ</span>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = {
    toggleCart,
    toggleBackground,
    toggleContentCart,
    productCart,
}
export default connect(null, mapDispatchToProps)(ListProductTop);