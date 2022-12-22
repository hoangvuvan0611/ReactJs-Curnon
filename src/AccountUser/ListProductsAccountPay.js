import {connect} from "react-redux";
import {productCart} from "../reduxModule";
import {toggleCart} from "../reduxModule";

function ListProductsAccountPay(props){

    let {product, productCart, toggleCart} = props;

    return(
        <div className="products d-flex">
            <img src={product.image}/>
            <div className="introduce">
                <div className="name">{product.name}</div>
                <div className="quantity">x{product.quantity}</div>
                <div className="price">{product.price} <span>đ</span></div>
            </div>
            <div className="products-right">
                <div>
                    <div className="status_GH">
                        <i class="fa-solid fa-truck-moving"></i>    Giao hàng thành công 
                    </div>
                </div>
                <div className="box_btn d-flex">
                    <button>Đánh giá</button>
                    <button onClick={() =>(productCart(product), toggleCart(true))}>Mua lại</button>
                    <button>Liên hệ</button>
                </div>
            </div>
        </div>
    )
}


const maStateToProps = (state) => ({
    statusCart: state.statusCart
})
const mapDispatchToProps = {
    productCart,
    toggleCart
}
export default connect(maStateToProps, mapDispatchToProps)(ListProductsAccountPay);