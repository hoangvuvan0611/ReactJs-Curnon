function Discover(){
    return(
        <div className="discovery">
            <div className="discovery_content-top container">
                <div className="discovery_content-top_tag">#COLOSSEUM #CURNONWATCH</div>
                <div className="discovery_content-top_title">JACKSON COLLECTION</div>
                <div className="discovery_content-top_content">Dòng đồng hồ lặn đầu tiên từ một thương hiệu Việt</div>
                <div className="discovery_content-top_btn">Khám phá ngay</div>
            </div>
            <div className="discovery_content-bottom container d-flex">
                <div className="discovery_content-bottom_left d-flex">
                    <button className="icon"><i class="fa-solid fa-play"></i></button>
                    <div className="content">COLOSSEUM COLLECTION</div>
                </div>
                <div className="discovery_content-bottom_center d-flex">
                    <button className="icon"><i class="fa-solid fa-play"></i></button>
                    <div className="content">WEIMAR COLLECTION</div>
                </div>
                <div className="discovery_content-bottom_right d-flex">
                    <button className="icon"><i class="fa-solid fa-play"></i></button>
                    <div className="content">JACKSON COLLECTION</div>
                </div>
            </div>
        </div>
    )
}

export default Discover;