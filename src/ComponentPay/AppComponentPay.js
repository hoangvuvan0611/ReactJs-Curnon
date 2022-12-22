import {Link, NavLink} from 'react-router-dom' 
import { useEffect } from 'react';
import {connect} from "react-redux";
import ProductPay from "./ProductPay";
import {toggleStatusSet} from "../reduxModule";
//statusCheckoutright
import {toggleStatusCheckOutRight} from "../reduxModule";
import {quantityCarts} from "../reduxModule";
//thanh toán
import {postProductsPay} from '../reduxModule';


function AppComponentPay(props){

    //renderProducts
    let {product} = props;

    //statusSetProduct
    let {statusSetProduct, toggleStatusSet, postProductsPay, dataAccountPay, accountuser} = props;
    //Statuscheckoutright
    let {statusCheckOutRight, toggleStatusCheckOutRight, quantityCarts} = props;
    let totalPrice = product.reduce((total, item) => total + item.price * item.quantity, 0);
    let totalQuantity = product.reduce((total, item) => total + item.quantity, 0)
    let freeship = 0;
    if(totalPrice < 700000){
        freeship = 10000*totalQuantity
    }
    useEffect(()=> {
        if(totalPrice > 0){
            return()=>{
                quantityCarts(totalQuantity);
                toggleStatusCheckOutRight(true);
            }
            
        }
        else if(totalPrice == 0){
            return()=>{
                quantityCarts(totalQuantity);
                toggleStatusCheckOutRight(false);
            }
        }
        
    });

    const PostDataProducts = () =>{
        let test = localStorage.getItem('Data-Account') ? JSON.parse(localStorage.getItem("Data-Account")) : [];
        let accountUser = accountuser;
        for(let i=0; i<test.length; i++){
            if(test[i].account == accountUser){ 
                for(let j= 0; j<product.length; j++){
                    test[i].prodPay = [...test[i].prodPay, product[j]];
                    postProductsPay([...test[i].prodPay, product[j]]);
                }
            }
        }
        localStorage.setItem('Data-Account', JSON.stringify(test));
    }

    return(
        <div className="componentpay d-flex">
            <div className="checkout_leftbox col-6">
                <div className="checkout_leftbox_logo">
                    <NavLink to="/">
                        <img src="https://curnonwatch.com/_next/static/media/logo.cc5d661a.svg"/>
                    </NavLink>
                </div>
                <div className="checkout_leftbox_title">thông tin khách hàng</div>
                <div className="checkout_leftbox_email">
                    <input placeholder="Email" type="email"/>
                </div>
                <div className="checkout_leftbox_namephonenumber d-flex">
                    <div className="name">
                        <input placeholder="Họ tên"/>
                    </div>
                    <div className="phone">
                        <input placeholder="Số điện thoại"/>
                    </div>
                </div>
                <div className="checkout_leftbox_address">
                    <input placeholder="Địa chỉ nhận hàng"/>
                </div>
                <div className="checkout_leftbox_district_city">
                    <select className="city">
                        <option>Chọn tỉnh / thành</option>
                        <option>Hà Nội</option>
                        <option>Hải Phòng</option>
                        <option>TP.Hồ Chí Minh</option>
                    </select>
                    <select className="district">
                        <option>Chọn quận / huyện</option>
                        <option>dsfsd</option>
                        <option>sdfsdf</option>
                        <option>sdfsdf</option>
                        <option>sdfsdf</option>
                    </select>
                </div>
                <div className="checkout_leftbox_text">
                    <input type="text" placeholder="Nhập ghi chú nếu cần"/>
                </div>
                <div className="checkout_leftbox_note">
                    *Phương thức vận chuyển là <span>freeship</span> với đơn hàng từ 700.000đ
                </div>
                <div className="checkout_leftbox_btn">
                    <button onClick={() => (postProductsPay(), PostDataProducts())}>thanh toán <i class="fa-solid fa-arrow-right"></i></button>
                </div>
                <div className="checkout_leftbox_end">
                    <div>© 2021 - Bản quyền của CTCP PHÁT TRIỂN SẢN PHẨM SÁNG TẠO VIỆT</div>
                    <div>HOTLINE: 0868889103</div>
                </div>
            </div>
            <div className="checkout_rightbox col-6">
                {
                    statusCheckOutRight && <>
                    <div className="checkout_rightbox_title d-flex">
                        <div className="title">Đơn hàng</div>
                        {
                            !statusSetProduct &&
                                <div className="fix" onClick={() => toggleStatusSet(true)}>Sửa</div>
                        }
                        {
                            statusSetProduct &&
                                <div className="fix" onClick={() => toggleStatusSet(false)}>Hủy</div>
                        }
                    </div>
                    <div className="checkout_rightbox_products">
                        {
                            product.map(item => <ProductPay key={item.id} quantity = {item.quantity} products = {item}/>)
                        }
                    </div>
                    <div className="checkout_rightbox_saleof">
                        <input placeholder="Nhập mã khuyến mãi..."/>
                        <button className="submit">áp dụng</button>
                    </div>
                    <div className="checkout_rightbox_paytop">
                        <div className="intomoney d-flex">
                            <div className="content">Thành tiền</div>
                            <div className="money">{totalPrice} <span>đ</span></div>
                        </div>
                        <div className="girdcode d-flex">
                            <div className="content">Mã giảm giá</div>
                            <div className="money">0 <span>đ</span></div>
                        </div>
                        <div className="feeship d-flex">
                            <div className="content">Phí ship</div>
                            <div className="money">{freeship} <span>đ</span></div>
                        </div>
                    </div>
                    <div className="checkout_rightbox_paybottom">
                        <div className="total d-flex">
                            <div className="nametotal">tổng</div>
                            <div className="money">{totalPrice} <span>đ</span></div>
                        </div>
                        <div className="vat d-flex">
                            <div className="notevat">{"(Đã bao gồm VAT)"}</div>
                            <div className="deltailVat">
                                <div className="top">
                                    hoặc 45345345 <span>đ</span> x 3 kỳ
                                </div>
                                <div className="bottom" >với <span>Fundiin</span></div>
                            </div>
                        </div>
                    </div>
                    </>
                }
                {
                    !statusCheckOutRight &&
                        <div className='emptyPay'>
                            <NavLink to="/">
                                <img src="https://curnonwatch.com/_next/static/media/logo.cc5d661a.svg"/>
                            </NavLink>
                            <div className='emptyPay_content'>Giỏ hàng của bạn trống</div>
                            <NavLink to="/">
                                <button className='emptyPay_btn'> tiếp tục mua sắm <i class="fa-solid fa-arrow-right"></i></button>
                            </NavLink>
                        </div>
                }
            </div>
        </div>
    )
}

const maStateToProps = (state) => ({
    product: state.product,
    statusSetProduct: state.statusSetProduct,
    //statuscheckoutright
    statusCheckOutRight: state.statusCheckOutRight,
    accountuser: state.accountuser,
    dataAccountPay: state.dataAccountPay,
})
const mapDispatchToProps = {
    //StatusSet
    toggleStatusSet,
    toggleStatusCheckOutRight,
    quantityCarts,
    //thanh toán đẻ lưu những sản phẩm đã mua
    postProductsPay,
}

export default connect(maStateToProps, mapDispatchToProps)(AppComponentPay);