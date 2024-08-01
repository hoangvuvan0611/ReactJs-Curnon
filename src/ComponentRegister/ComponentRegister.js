import { connect } from "react-redux";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";
import { base, token } from "../Constants/Config";
import ContactCurnon from "../component/ContactCurnon/ContactCurnon";
import {RegisterAccount} from "../reduxModule";
// import {AccountUser} from "../reduxModule"
// import { render } from "react-dom";

function ComponentRegister(props){

    let {statusRegisterName, statusRegisterPassword, statusRegiterNlPassword, RegisterAccount} = props;
    let {statusAlbertAccountS} = props;

    let { register, handleSubmit} = useForm();
    const StatusSubmitAccount = (data) => {
        if(data.name.length > 5){
            if(data.password.length > 7){
                if(data.password === data.nhaplai){
                    Componentsignin(data);
                    document.getElementById("name").value = "";
                    document.getElementById("nlmk").value = "";
                    document.getElementById("mk").value = "";
                }
                //mật khẩu nhập lại khác mật khẩu
                else{
                    RegisterAccount("mknl");
                    document.getElementById("nlmk").value = "";
                }
            }
            //mật khẩu nhập vào ít hơn 8 kí tự
            else{
                RegisterAccount("mk");
                document.getElementById("nlmk").value = "";
                document.getElementById("mk").value = "";
            }
        }
        else{
            RegisterAccount("name");
            document.getElementById("nlmk").value = "";
            document.getElementById("mk").value = "";
        }
    }
    const Componentsignin = async (data) => {
        //setup connect api
        let url = base + '/api/user/signIn';
        let requestConfig = {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }
        //lấy data nhập vào từ input để đưa vào trong api
        let datas = {
            name: data.name,
            account: data.name,
            password: data.password,
        }
        axios.post(url, datas, requestConfig)
        .then(res => {
            if(res.data.status === 'badrequest'){
                RegisterAccount("badrequest");
            }
            if(res.data.status ==='success'){
                alert("Tạo tài khoản thành công!");
                RegisterAccount("success");
                //Đẩy dữ liệu nên localStorage
                let test = localStorage.getItem('Data-Account') ? JSON.parse(localStorage.getItem("Data-Account")) : [];
                test.push({
                    account: data.name,
                    prod: [],
                    prodPay: [],
                    qty: 0,
                });
                localStorage.setItem('Data-Account', JSON.stringify(test));
            }
        })
    }

    return(
        <div>
            <div className="logins">
                <NavLink to="/">
                    <img src="https://curnonwatch.com/_next/static/media/logo.cc5d661a.svg" alt="logo"/>
                </NavLink>
                <form className="box" onSubmit={handleSubmit(StatusSubmitAccount)}>
                    <div className="login_box">
                        <div className="title">Đăng Ký tài khoản</div>
                        <div className="name">
                            {
                                statusRegisterName &&
                                    <div className="error_ps">
                                        *Email / Số điện thoại / Tên đăng nhập: phải có ít nhất 6 kí tự!
                                    </div>
                            }
                            {
                                statusAlbertAccountS &&
                                    <div className="error_ps">
                                        *Email / Số điện thoại / Tên đăng nhập: đã có!
                                    </div>
                            }
                            <input id="name" placeholder="Email / Số điện thoại / Tên đăng nhập" {...register("name")}/>
                        </div>
                        <div className="password">
                            {
                                statusRegisterPassword &&
                                    <div className="error_ps">
                                        *Mật khẩu phải có ít nhất 8 kí tự!
                                    </div>
                            }
                            <input id="mk" type="password" placeholder="Mật khẩu" {...register("password")}/>
                        </div>
                        <div className="password_around">
                            {
                                statusRegiterNlPassword &&
                                    <div className="error">
                                        *Mật khẩu nhập lại không đúng!
                                    </div>
                            }
                            <input id="nlmk" type="password" placeholder="Nhập lại mật khẩu" {...register("nhaplai")}/>
                        </div>
                        <div className="box_btn ">
                            <NavLink to="/dang-nhap">
                                <button className="box_btn_login">đăng nhập <i class="fa-sharp fa-solid fa-right-to-bracket"></i></button>
                            </NavLink>
                            <button type="submit">Đăng ký</button>
                            <NavLink to='/'>
                                <button className="box_btn_home">trang chủ <i class="fa-sharp fa-solid fa-house-user"></i></button>
                            </NavLink>
                        </div>
                    </div>
                </form>

            </div>
            <ContactCurnon/>
        </div>
    )
}

const maStateToProps = (state) => ({
    statusRegiterNlPassword: state.statusRegiterNlPassword,
    statusRegisterName: state.statusRegisterName,
    statusRegisterPassword: state.statusRegisterPassword,
    statusAlbertAccountS: state.statusAlbertAccountS
})
const mapDispatchToProps = {
    RegisterAccount,
}
export default connect(maStateToProps, mapDispatchToProps)(ComponentRegister);