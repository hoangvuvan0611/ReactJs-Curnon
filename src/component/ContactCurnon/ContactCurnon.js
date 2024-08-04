import { faFaceKissBeam } from "@fortawesome/free-solid-svg-icons/faFaceKissBeam";
import { NavLink } from "react-router-dom";

function ContactCurnon(){
    return(
        <div className="contactcurnon">
            <div className="contactcurnon_box d-flex">
                <div className="contactcurnon_register">
                    <div className="contactcurnon_register_title">nhận thông tin mới nhất từ curnon</div>
                    <div className="contactcurnon_register_input">
                        <div className="top d-flex">
                            <div className="gender">
                                <select placeholder="giới tính ">
                                    <option>Giới tính</option>
                                    <option>Nam</option>
                                    <option>Nữ</option>
                                </select>
                            </div>
                            <div className="name">
                                <input placeholder="Họ tên..."/>
                            </div>
                        </div>
                        <div className="bottom">
                            <input placeholder="Email..."/>
                        </div>
                    </div>
                    <div className="contactcurnon_register_btn">
                        <button>đăng kí ngay</button>
                    </div>
                </div>
                <div className="contactcurnon_contact">
                    <div className="contactcurnon_contact_title">Liên lạc</div>
                    <div className="contactcurnon_contact_web">cskh@curnonwatch.com</div>
                    <div className="contactcurnon_contact_phonenumber">0868889103</div>
                    <div className="contactcurnon_contact_icon d-flex">
                        <div className="icon_contact">
                            <i class="fa-brands fa-facebook"></i>
                        </div>
                        <div className="icon_contact">
                            <i class="fa-brands fa-instagram"></i>
                        </div>
                        <div className="icon_contact">
                            <i class="fa-brands fa-youtube"></i>
                        </div>
                    </div>
                </div>
                <div className="contactcurnon_address">
                    <div className="contactcurnon_address_title">hanoi strore</div>
                    <div className="contactcurnon_address_address">33 Hàm Long, Hoàn Kiếm.</div>
                    <div className="contactcurnon_address_address">9 B7 Phạm Ngọc Thạch, Đống Đa.</div>
                    <div className="contactcurnon_address_address">173C Kim Mã, Ba Đình.</div>
                    <div className="contactcurnon_address_title hcm">TP.HCM STORES</div>
                    <div className="contactcurnon_address_address">25 Nguyễn Trãi, P.Bến Thành, Quận 1.</div>
                    <div className="contactcurnon_address_address">348 Lê Văn Sỹ, Phường 14, Quận 3.</div>
                </div>
            </div>
            <div className="contactcurnon_bar d-flex">
                <div className="contactcurnon_bar-left d-flex">
                    <NavLink to="/dong-ho-nam">
                        <div className="curnon">đồng hồ nam</div>
                    </NavLink>
                    <NavLink to="/dong-ho-nu">
                        <div className="curnon">đồng hồ nữ</div>
                    </NavLink>
                </div>
                <div className="contactcurnon_bar-right d-flex">
                    <div className="transport curnon">Chính sách vận chuyển</div>
                    <div className="curnon">Đổi trả & Bảo hành</div>
                </div>
            </div>
            <div className="contactcurnon_certification d-flex">
                <div className="contactcurnon_certification-left">
                    <div className="license">© 2021 - Bản quyền của CTCP PHÁT TRIỂN SẢN PHẨM SÁNG TẠO VIỆT</div>
                    <div className="certification">Giấy chứng nhận ĐKKD số 0108150321 do Sở Kế hoạch và Đầu tư Thành phố Hà Nội cấp ngày 29/01/2018 123C Thụy Khuê, Tây Hồ, Hà Nội</div>
                </div>
                <div className="contactcurnon_certification-right">
                </div>
            </div>
        </div>
    )
}


export default ContactCurnon;