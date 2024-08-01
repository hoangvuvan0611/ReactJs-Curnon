import Wrapper from "../component/listProductWrapper/Wrapper";
import {connect} from "react-redux"
import Cart from "../component/Cart/Cart";
import ContactCurnon from "../component/ContactCurnon/ContactCurnon";
import ListProductsAccountPay from "./ListProductsAccountPay";


function AccountUser(props){

    let {accountuser, dataAccountPay} = props;

    return(
        <div>
            <Wrapper/>
            <Cart/>
            <div className="accountuser d-flex">
                <div className="accountuser-left">
                    <div className="profile">
                        <div className="avatar">
                            <i class="fa-sharp fa-solid fa-circle-user"></i>
                        </div>
                        <div className="name">{accountuser}</div>
                    </div>
                </div>
                <div className="accountuser-right">
                    <div className="Statusbar">
                        <ul className="Statusbar_title d-flex">
                            <li>tất cả <div className="bar"></div></li>
                            <li>đang vận chuyển <div className="bar"></div></li>
                            <li>đã giao <div className="bar"></div></li>
                        </ul>
                    </div>
                    <div className="boxProducts">
                        {
                            dataAccountPay.map(item => <ListProductsAccountPay key={item.id} product={item}/>)
                        }
                    </div>
                </div>
            </div>
            <ContactCurnon/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    accountuser: state.accountuser,
    dataAccountPay:state.dataAccountPay,
});
export default connect(mapStateToProps)(AccountUser);