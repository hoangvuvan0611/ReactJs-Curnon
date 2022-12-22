import {connect} from "react-redux"
import {deleteCart, increaseProductCart, reduceProductCart} from "../reduxModule"
//statusCheckoutRight
import {toggleStatusCheckOutRight} from "../reduxModule"
import {productCart} from "../reduxModule"

function ProductPay(props){

    //renderProduct
    let {products} = props;
    //deleteProduct
    let {deleteCart} = props;

    let {increaseProductCart, reduceProductCart} = props;
    
    //statusSetProduct
    let {statusSetProduct} = props;
    //statuscheckoutright
    let {toggleStatusCheckOutRight, productCart} = props;


    return(
        <div className="products d-flex">
            <div className="left d-flex">
                {
                    statusSetProduct &&
                        <button className="remove" onClick={() => (deleteCart(products), toggleStatusCheckOutRight(false), productCart("0"))}>
                            <i class="fa-sharp fa-solid fa-xmark"></i>
                        </button>
                }
                <div className="img">
                    <img src={products.image}/>
                </div>
                <div className="introduce">
                    <div className="name">{products.name}</div>
                    <div className="size">{products.size}mm</div>
                    <div className="quantity d-flex">
                        {
                            statusSetProduct &&
                                <button className="reduce" onClick={() => (reduceProductCart(products), toggleStatusCheckOutRight(false), productCart(0))}>
                                    <i class="fa-solid fa-minus"></i>
                                </button>
                        }
                        <div className="qty">Qty: {products.quantity}</div>
                        {
                           statusSetProduct && 
                                <button className="raise" onClick={() => (increaseProductCart(products))}>
                                    <i class="fa-solid fa-plus"></i>
                                </button>
                        }
                    </div>
                </div>
            </div>
            <div className="price">
                <div className="newprice">{products.price} <span>đ</span></div>
                <div className="oldprice">{products.oldprice} <span>đ</span></div>
            </div>
        </div>
    )
}
const mapStateToProps = state =>({
    statusSetProduct: state.statusSetProduct,
})
const mapDispatchToProps = {
    deleteCart,
    increaseProductCart,
    reduceProductCart,
    //statuscheckoutRight
    toggleStatusCheckOutRight,
    productCart,
}  
export default connect(mapStateToProps, mapDispatchToProps)(ProductPay);