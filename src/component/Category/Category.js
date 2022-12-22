
import {connect} from "react-redux"
import {Link, NavLink} from 'react-router-dom' 


function Category(props){

    let {Product} = props

    return(
        <div className="categoryCart container">
            <div className="categoryCart_box d-flex">
                <NavLink to="/dong-ho-nu">
                    <div className="categoryCart_box1" >
                        <img src={"https://cms.curnonwatch.com/uploads/nu_83e94c34eb.jpg"}/>
                        <div className="categoryCart_boxchild d-flex">
                            <div className="categoryCart_boxchild-title">
                                đồng hồ nữ
                            </div>
                            <div className="categoryCart_boxchild-btn">
                                <i class="fa-solid fa-arrow-right"></i>
                            </div>                
                        </div>
                    </div>
                </NavLink>
                <NavLink to="/dong-ho-nam">
                    <div className="categoryCart_box1" >
                        <img src={"https://cms.curnonwatch.com/uploads/nam_ff98c9d171.jpg"}/>
                        <div className="categoryCart_boxchild d-flex">
                            <div className="categoryCart_boxchild-title">
                                đồng hồ nam
                            </div>
                            <div className="categoryCart_boxchild-btn">
                                <i class="fa-solid fa-arrow-right"></i>
                            </div>                
                        </div>
                    </div>
                </NavLink>
                <NavLink to="/phu-kien-dong-ho">
                    <div className="categoryCart_box1" >
                        <img src={"https://cms.curnonwatch.com/uploads/pk_515e1b9dce.jpg"}/>
                        <div className="categoryCart_boxchild d-flex">
                            <div className="categoryCart_boxchild-title">
                                phụ kiện thời trang
                            </div>
                            <div className="categoryCart_boxchild-btn">
                                <i class="fa-solid fa-arrow-right"></i>
                            </div>                
                        </div>
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

const mapStateToProps = (state) =>({
    Product: state.productCategory
})
export default (connect)(mapStateToProps)(Category);