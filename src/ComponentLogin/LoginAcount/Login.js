import { connect } from "react-redux";
import {loginApp} from "../../reduxModule"
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import ContactCurnon from "../../component/ContactCurnon/ContactCurnon";
import {DataAccount} from "../../reduxModule"
import { useEffect } from "react";
import axios from 'axios'
import { base, token } from "../../Constants/Config";
import {GetListDataLogin} from "../../reduxModule"
import {CountAccount} from "../../reduxModule"
import {PostDataProduct} from "../../reduxModule"
import {quantityCarts} from "../../reduxModule"

function ComponentLogin(props){
    let history = useNavigate();
    let { register, handleSubmit} = useForm();
    let {loginApp, DataAccount, statusLogin, dataLogin} = props;
    let {statuspasswordLogin, statuspassNameLogin, GetListDataLogin, PostDataProduct, quantityCarts} = props;
    
    const getAuthentication = async (data) =>{
        let url = base + "/api/user/authentication";
        let requestConfig = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        let datas = {
            account: data.name,
            password: data.password,
        }
        axios.post(url, datas, requestConfig)
            .then(res => {
                if(res.data.status == 'success'){
                    document.getElementById("name").value = "";
                    document.getElementById("password").value = "";
                    DataAccount(res.data.data.name);
                    loginApp(true);
                    history("/");
                    let test = localStorage.getItem('Data-Account') ? JSON.parse(localStorage.getItem("Data-Account")) : [];
                    let temb = []
                    test.map((value, index) =>{
                        temb = {
                            id: index,
                            account: value.account,
                            prod: "",
                        }
                        GetListDataLogin(temb);
                    });
                    for(let i=0; i<test.length; i++){
                        if(test[i].account == data.name){
                            PostDataProduct(test[i].prod);
                            quantityCarts(test[i].qty)

                        }
                    }
                        
                }
                if(res.data.status == "unauthentication"){
                    DataAccount("error");
                }
            });
    }
    return(
        <div>
            <form className="logins" onSubmit={handleSubmit(getAuthentication)}>
                <NavLink to="/">
                    <img src="https://curnonwatch.com/_next/static/media/logo.cc5d661a.svg"/>
                </NavLink>
                <div className="box">
                    <div className="login_box">
                        <div className="title">Đăng nhập</div>
                        <div className="name">
                            {
                                statuspassNameLogin &&
                                    <div className="errorPasswordLogin">
                                        *Email / Số điện thoại / Tên đăng nhập: không đúng!
                                    </div>
                            }
                            <input id="name" placeholder="Email / Số điện thoại / Tên đăng nhập" {...register("name")} />
                        </div>
                        <div className="password">
                            {
                                statuspasswordLogin &&
                                    <div className="errorPasswordLogin">
                                        *Mật khẩu không đúng!
                                    </div>
                            }
                            <input id="password" type="password" placeholder="Password"  {...register("password")}/>
                        </div>
                        <div className="note_password d-flex">
                            <div className="left">Quên mật khẩu</div>
                            <NavLink to="/dang-ky">
                                <div className="right">Đăng ký tài khoản</div>
                            </NavLink>
                        </div>
                        <button type="submit">Đăng nhập </button>
                    </div>
                </div>

            </form>
            <ContactCurnon/>
        </div>
    )
}
const maStateToProps = (state) => ({
    statuspasswordLogin: state.statuspasswordLogin,
    statuspassNameLogin: state.statuspassNameLogin,
    complete: state.complete,
    statusLogin: state.statusLogin,
    dataLogin: state.dataLogin,
})
const mapDispatchToProps = {
    loginApp,
    DataAccount,
    //lấy dữ liệu từ trên localstorage mối khi reload
    GetListDataLogin,
    //khi đăng nhập thì đẩy lại product lên redux
    PostDataProduct,
    quantityCarts
}
export default connect(maStateToProps, mapDispatchToProps)(ComponentLogin);
