import Slider from "react-slick";
import {connect} from 'react-redux'
import ListItemPart from "./ListItemPart";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function PartOfCurnon(props){

    let {item} = props

    const test = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        centerMode: true,
        focusOnSelect: true
      };

    return(
        <div className="partofcurnon">
            <div className="partofcurnon_title">be part of curnon</div>
            <div className="partofcurnon_content">Ai nói bạn không thể lựa chọn gia đình</div>
            <Slider {...test}  className="partofcurnon_slider">
                {
                    item.map(item => <ListItemPart key={item.id} item = {item}/>)
                }
            </Slider>
        </div>
    )
}


const mapStateToProps = (state) => ({
    item: state.imgPartOfCurnon
})
export default connect(mapStateToProps)(PartOfCurnon);