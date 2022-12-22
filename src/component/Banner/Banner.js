import { NavLink } from "react-router-dom";

function Banner(){
    return(
        <div>
            <div className='banner'>
                <div className='banner_content col-6'>
                <div className='banner_event'>Noel' day 22.12</div>
                <div className='banner_title'>mua 1 tặng 1</div>
                <div className='banner_subtitle'>15 . 12 - 25 . 12</div>
                <div className='banner_description'>mua một đồng hồ tặng 1 vòng tay</div>
                <div className='boxbtn d-flex'>
                    <div className='btnBanner'>
                    <NavLink to="/dong-ho-nam">
                        <button>shop men</button>
                    </NavLink>
                    </div>
                    <div className='btnBanner'>
                    <NavLink to="/dong-ho-nu">
                        <button>shop women</button>
                    </NavLink>
                    </div>
                </div>
                </div>
            </div> 
            <div className="bannerPromotion">
                <div className="bannerPromotion_box container d-flex">
                    <div className="d-flex">
                        <div className="icon">
                        <i class="fa-solid fa-truck-fast"></i>
                        </div>
                        <div className="content">
                            <p>freeship đơn hàng {">"} 700k</p></div>
                        </div>
                    <div className="d-flex">
                        <div className="icon">
                            <i class="fa-solid fa-shield-halved"></i>
                        </div>
                        <div className="content">
                            <p>bảo hành 10 năm</p></div>
                        </div>
                    <div className="d-flex">
                        <div className="icon">
                            <i class="fa-solid fa-box-archive"></i>
                        </div>
                        <div className="content">
                            <p>đổi trả miễn phí trong vòng 3 ngày</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Banner;