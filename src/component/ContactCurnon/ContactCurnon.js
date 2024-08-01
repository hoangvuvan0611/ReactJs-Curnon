

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
                        <div className="icon">
                            <img src="https://curnonwatch.com/_next/static/media/icon_fb.ba9f5d29.svg" alt="img"/>
                        </div>
                        <div className="icon">
                            <img src="https://curnonwatch.com/_next/static/media/icon_insta.9353e397.svg" alt="img"/>
                        </div>
                        <div className="icon">
                            <img src="https://curnonwatch.com/_next/static/media/icon_fb.ba9f5d29.svg" alt="img"/>
                        </div>
                    </div>
                    <div className="contactcurnon_contact_pay d-flex">
                        <div className="">
                            <img src="https://curnonwatch.com/_next/static/media/cod.10bcbd91.png" alt="img"/>
                        </div>
                        <div className="">
                            <img src="https://curnonwatch.com/_next/static/media/fundiin.34ef01d3.png" alt="img"/>
                        </div>
                        <div className="">
                            <img src="https://curnonwatch.com/_next/static/media/momo.1a8e86d8.png" alt="img"/>
                        </div>
                        <div className="">
                            <img src="https://curnonwatch.com/_next/static/media/vnpay.3fa45c06.png" alt="img"/>
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
                    <div className="curnon">đồng hồ nam</div>
                    <div className="curnon">đồng hồ nữ</div>
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
                    <img src="https://curnonwatch.com/_next/static/media/certificate.e07e4993.png" alt="img"/>
                </div>
            </div>
        </div>
    )
}


export default ContactCurnon;