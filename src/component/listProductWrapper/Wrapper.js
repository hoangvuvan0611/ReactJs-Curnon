import {connect} from 'react-redux'
import ListWrapperMen from './ListMen'
import ListWrapperWomen from './ListWomen'
import {toggleMenumen} from '../../reduxModule'
import {toggleAccessory} from '../../reduxModule'
import {toggleAlbert} from '../../reduxModule'
import {toggleSearch} from '../../reduxModule'
import {toggleCart} from '../../reduxModule'
import {toggleBackground} from "../../reduxModule"
import {NavLink} from 'react-router-dom' 
//women
import {toggleSp} from "../../reduxModule"
import {toggleSz} from "../../reduxModule"
import {toggleCl} from "../../reduxModule"
import {toggleCld} from "../../reduxModule"
import {toggleSort} from "../../reduxModule"
//login
import {loginApp} from '../../reduxModule'
import {StatusBoxUser} from '../../reduxModule'
//logout
import {toggleLogOutUser} from "../../reduxModule" 
import {quantityCarts} from "../../reduxModule"
//lấy thông tin những đơn hàng của từng tài khoản


function Wrapper(props){
  
    let {Products, ProductWomen} = props;
    let {toggleMenumen, statusMenuMen} = props;
    let {toggleAccessory, statusAccessory} = props;
    let {toggleAlbert, statusAlbert} = props;
    let {toggleSearch, statusSearch} = props;
    let {toggleCart, quantitycart, statusquantitycart} = props;
    
    //background
    let {statusBackground, toggleBackground} = props;
    //women
    let {toggleSp, toggleSz, toggleCl, toggleCld, toggleSort} = props;

    //login
    let {statusLogin, loginApp, boxUser, StatusBoxUser} = props;
    //logout
    let {toggleLogOutUser, quantityCarts, accountuser, product} = props;

    const PostDataProducts = () =>{
        let test = localStorage.getItem('Data-Account') ? JSON.parse(localStorage.getItem("Data-Account")) : [];
        let accountUser = accountuser;
        for(let i=0; i<test.length; i++){
            if(test[i].account === accountUser){
                test[i].prod = product;
                test[i].qty = quantitycart;
            }
        }
        localStorage.setItem('Data-Account', JSON.stringify(test));
    }

    return( 
        <div>
            <div className ="wrapper d-flex">
                <div className="wrapper_left d-flex">
                <button onMouseMove={() => {toggleCart(false); toggleBackground(true); toggleSp(false); toggleSz(false); toggleCl(false); toggleCld(false); toggleCart(false); toggleSort(false)}} 
                        className='boxMen' onMouseLeave={() => toggleBackground(false)}>
                    <span onMouseMove={()=>toggleSearch(false)} onMouseEnter={() => toggleMenumen(true)} onMouseMoveCapture={() => toggleAccessory(false)} onMouseOver={() => toggleAlbert(false)}>
                        nam giới
                        {/* <div className='boxMen_pointer'>
                            <img src='https://curnonwatch.com/_next/static/media/highlight.6a4d6470.svg' alt='img'/>
                        </div> */}
                    </span>
                    <div className='boxMen_deltail'> 
                        <div className='row'>
                            <div className='boxMen_deltail-left col-4'>
                                <div className='clock' onMouseMove={() => toggleMenumen(true)} onMouseMoveCapture={() => toggleAccessory(false)} onMouseEnter={() => toggleAlbert(false)} ><p>đồng hồ</p></div>
                                <div className='bestseller' >bán chạy nhất</div>
                                <div className='accessory' onMouseMove={() => toggleAccessory(true)} onMouseMoveCapture={() => toggleMenumen(false)} onMouseEnter={() => toggleAlbert(false)}><p>phụ kiện</p></div>
                                <div className='albert' onMouseMove={() => toggleAlbert(true)} onMouseMoveCapture={() =>toggleMenumen(false)} onMouseEnter={() => toggleAccessory(false)}><p>dây đồng hồ</p></div>
                            </div>
                            {
                                statusMenuMen &&
                                    <div className='boxMen_clock-right row col-8'>
                                        {
                                            Products.map(item => <ListWrapperMen ProductsWapperMen = {item} key={item.id}/>)
                                        }
                                        <div className='moreProducts'>
                                        <NavLink to="/dong-ho-nam">
                                            <button onClick={() => toggleBackground(false)}>
                                                <div>xem tất cả</div>
                                                <div><i className="fa-sharp fa-solid fa-arrow-right"></i></div>
                                            </button>
                                        </NavLink>
                                        </div>
                                    </div>
                            }
                            {
                                statusAccessory &&
                                    <div className='boxMen_accessory d-flex'>
                                        <div className='left'>
                                            <img src='https://curnonwatch.com/_next/image/?url=https%3A%2F%2Fshop.curnonwatch.com%2Fmedia%2Fcatalog%2Fcategory%2FCuff_1.png&w=128&q=75' alt='img'/>
                                        </div>
                                        <div className='right'>
                                            <NavLink to="/phu-kien-dong-ho">
                                                <button>
                                                    <div>xem tất cả</div>
                                                    <div><i className="fa-sharp fa-solid fa-arrow-right"></i></div>
                                                </button>
                                            </NavLink>
                                        </div>
                                    </div>
                            }
                            {
                                statusAlbert &&
                                    <div className='boxMen_albert d-flex'>
                                        <div className='boxMen_albert-left'>
                                            <img src='https://curnonwatch.com/_next/image/?url=https%3A%2F%2Fcms.curnonwatch.com%2Fuploads%2F3_ebc2dc50c4.jpeg&w=384&q=75' alt='img'/>
                                        </div>
                                        <div className='boxMen_albert-right '>
                                            <div className='content'>
                                                <p>Từ nay bạn đã có thể biến một thành nhiều chiếc đồng hồ để thay đổi phong cách thời trang của bản thân với dây đồng hồ Curnon.</p>
                                            </div>
                                            <div className='btn'>
                                                <button>Mua ngay</button>
                                            </div>
                                        </div>
                                    </div>
                            }
                        </div>
                        {/* <div className='blackhole'></div> */}
                    </div>
                </button>
                <button onMouseMove={() => {toggleCart(false); toggleBackground(true); toggleSp(false); toggleSz(false); toggleCl(false); toggleCld(false); toggleCart(false); toggleSort(false)}} 
                            className='boxWomen' 
                            onMouseLeave={() => toggleBackground(false)}>
                    <span onMouseMove={()=>toggleSearch(false)}>
                        Nữ giới
                        {/* <div className='boxWomen_pointer'>
                            <img src='https://curnonwatch.com/_next/static/media/highlight.6a4d6470.svg' alt='img'/>
                        </div> */}
                    </span>
                </button>
                <div className='boxWomen_deltail'>
                    <div className='row'>
                        <div className='boxWomen_deltail-left col-4'>
                            <div className='clock' onMouseMove={() => toggleMenumen(true)} onMouseMoveCapture={() => toggleAccessory(false)} onMouseEnter={() => toggleAlbert(false)}><p>đồng hồ</p></div>
                            <div className='bestseller'>bán chạy nhất</div>
                            <div className='accessory' onMouseMove={() => toggleAccessory(true)} onMouseMoveCapture={() => toggleMenumen(false)} onMouseEnter={() => toggleAlbert(false)}><p>Vòng tay</p></div>
                            <div className='albert' onMouseMove={() => toggleAlbert(true)} onMouseMoveCapture={() =>toggleMenumen(false)} onMouseEnter={() => toggleAccessory(false)}><p>dây đồng hồ</p></div>
                        </div>
                        {
                        statusMenuMen &&  
                                <div className='boxWomen_clock-right row col-8'>
                                    {
                                        ProductWomen.map(item => <ListWrapperWomen ProductsWapperWomen = {item} key={item.id}/>)
                                    }
                                    <div className='moreProducts'>
                                    <NavLink to="/dong-ho-nu">
                                        <button onClick={() => toggleBackground(false)}>
                                            <div>xem tất cả</div>
                                            <div><i className="fa-sharp fa-solid fa-arrow-right"></i></div>
                                        </button>
                                    </NavLink>
                                    </div>
                                </div>
                        }
                        {
                            statusAccessory &&
                                <div className='boxWomen_accessory d-flex'>
                                    <div className='boxWomen_accessory-left'>
                                        <img src='https://curnonwatch.com/_next/image/?url=https%3A%2F%2Fcms.curnonwatch.com%2Fuploads%2FFemale_Cuffs_6f19de41b6.jpg&w=384&q=75' alt='img'/>
                                    </div>
                                    <div className='boxWomen_accessory-right '>
                                        <div className='content'>
                                            <p>Mỗi thiết kế vòng tay của Curnon đều thể hiện một cá tính riêng biệt của những cô gái hiện đại</p>
                                        </div>
                                        <div className='btn'>
                                            <button>Mua ngay</button>
                                        </div>
                                    </div>
                                </div>
                        }
                        {
                            statusAlbert &&
                                <div className='boxWomen_albert d-flex'>
                                    <div className='boxWomen_albert-left'>
                                        <img src='https://curnonwatch.com/_next/image/?url=https%3A%2F%2Fcms.curnonwatch.com%2Fuploads%2F2_1_85f9086d78.jpg&w=384&q=75' alt='img'/>
                                    </div>
                                    <div className='boxWomen_albert-right '>
                                        <div className='content'>
                                            <p>Biến một thành nhiều chiếc đồng hồ để thay đổi phong cách thời trang của bản thân với dây đồng hồ Curnon.</p>
                                        </div>
                                        <div className='btn'>
                                            <button>Mua ngay</button>
                                        </div>
                                    </div>
                                </div>
                        }
                    </div>
                    {/* <div className='blackhole'></div> */}
                </div>
                <button onMouseMove={() => {toggleCart(false); toggleBackground(true); toggleSp(false); toggleSz(false); toggleCl(false); toggleCld(false); toggleCart(false); toggleSort(false)}} 
                        onMouseLeave={() => toggleBackground(false)} 
                        className='boxCurnon'>
                    <span onMouseMove={()=>toggleSearch(false)}>
                        về curnon
                        {/* <div className='boxCurnon_pointer'>
                            <img src='https://curnonwatch.com/_next/static/media/highlight.6a4d6470.svg' alt='img'/>
                        </div> */}
                    </span>
                    <div className='boxCurnon_deltail'>
                        <div><p>Blog</p></div>
                        <div><p>Về chúng tôi</p></div>
                        <div><p>Long & Short</p></div>
                    </div>
                </button>
                </div>
                <NavLink to="/">
                    <div className='wrapper_logo' onClick={() => toggleBackground(false)}>
                        <img src='https://curnonwatch.com/wp-content/uploads/2023/12/logo.svg' alt='img'/>
                    </div>            
                </NavLink>
                <div className='wrapper_right d-flex'>
                    <button onClickCapture={()=>toggleSearch(false)} 
                            onClick={() => {toggleCart(true); toggleBackground(true); toggleSp(false); toggleSz(false); toggleCl(false); toggleCld(false); toggleSort(false) }
                    }>
                        {
                            statusquantitycart && <button className='btn_quantityCart'>{quantitycart}</button>
                        }
                        <span>giỏ hàng</span>
                        <i className="fa-sharp fa-solid fa-bag-shopping"></i>
                    </button>
                    <button className='btn-Search'>
                        <i onClick={() => {toggleSearch(true); toggleBackground(true)}}  className='fa-solid fa-magnifying-glass'></i>
                        {
                            statusSearch &&
                            <div className='Search'>
                                <div className='boxSearch'>
                                    <form>
                                        <input placeholder='Nhập từ khóa...'/>
                                    </form>
                                    <div className='outstanding'>
                                        <div className='title'>các từ khóa nổi bật</div>
                                        <div>Kashmir</div>
                                        <div>colosseum</div>
                                        <div>florenge</div>
                                        <div>mykonos</div>
                                        <div>jackie cuff</div>
                                    </div>
                                    <div onClick={() => {toggleSearch(false); toggleBackground(false)}} className='close'>
                                        đóng
                                    </div>
                                </div>
                            </div>
                        }
                    </button>
                    {
                        !statusLogin &&
                        <div className='lgin_sub'>
                            <NavLink to="/dang-nhap"><button className='login' >Đăng nhập</button></NavLink> / <NavLink to="/dang-ky"><button className='subc'>Đăng ký</button></NavLink> 
                        </div>  
                    }
                    {
                        statusLogin &&
                        <button className='btn_user'>   
                             <i class="fa-sharp fa-solid fa-user" onClick={() => {StatusBoxUser(true); toggleBackground(true)}}></i>
                            {
                                boxUser &&
                                <div className='btn_user_box'>
                                    <ul>
                                        <NavLink to="/account-profile">
                                            <li onClick={() => {StatusBoxUser(false); toggleBackground(false)}}><button>Tài khoản</button></li>
                                        </NavLink>
                                        <li onClick={() => {toggleCart(true); StatusBoxUser(false); toggleBackground(false)}}>Đơn mua</li>
                                        <li onClick={() => {toggleLogOutUser(false); toggleBackground(false); StatusBoxUser(false); quantityCarts(0); PostDataProducts()}}>Đăng xuất</li>
                                    </ul>
                                </div>
                            }
                        </button>
                    }
                </div>
            </div>
            {
                statusBackground && 
                <div className = 'background' onClick = {() => {toggleBackground(false); toggleSp(false); toggleSz(false); toggleCl(false); toggleCld(false); toggleCart(false); toggleSort(false); toggleSearch(false); StatusBoxUser(false)}}>
                </div>
            }
        </div>
    )
}
const mapStateToProps = (state) => ({
    Products: state.wrapper, 
    ProductWomen: state.wrapperWomen,
    statusMenuMen:state.statusMenuMen,
    statusAccessory: state.statusAccessory,
    statusAlbert: state.statusAlbert,
    statusSearch: state.statusSearch,
    //statusquantityCart
    statusquantitycart: state.statusquantitycart,
    //quantityCart
    quantitycart: state.quantitycart,
    //backgroundblack
    statusBackground: state.statusBackground,

    //login
    statusLogin: state.statusLogin,
    boxUser: state.boxUser,
    accountuser: state.accountuser,
    product: state.product,
});
const mapDispatchToProps = {
    toggleMenumen, 
    toggleAccessory, 
    toggleAlbert, 
    toggleSearch, 
    toggleCart,
    toggleBackground,

    //women
    toggleSp,
    toggleSz,
    toggleCl,
    toggleCld,
    toggleSort,
    //login
    loginApp,
    StatusBoxUser,
    //logout
    toggleLogOutUser,
    quantityCarts,
}
export default (connect)(mapStateToProps, mapDispatchToProps)(Wrapper);