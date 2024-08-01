import {connect} from "react-redux";
import {toggleSort} from "../../reduxModule";
import {toggleSp} from "../../reduxModule";
import {toggleSz} from "../../reduxModule";
import {toggleCl} from "../../reduxModule";
import {toggleCld} from "../../reduxModule";
import {toggleBackground} from "../../reduxModule";
import {toggleSortTop} from "../../reduxModule";
import {toggleSortCenter} from "../../reduxModule";
import {toggleSortBottom} from "../../reduxModule";
//filterSp
import {typeProductsMen} from "../../reduxModule";
//filterSizeMen
import {filterSizeMen} from "../../reduxModule"
import {togglestatusChooseSizeProducts40} from "../../reduxModule"
import {togglestatusChooseSizeProducts42} from "../../reduxModule"
import {togglestatusChooseSizeProducts38} from "../../reduxModule"
//ChangestatusFilter
import {toggleStatusChooseCol} from "../../reduxModule";
import {toggleStatusChooseKas} from "../../reduxModule";
import {toggleStatusChooseWei} from "../../reduxModule";
import {toggleStatusChooseJac} from "../../reduxModule";
import {toggleStatusChooseDet} from "../../reduxModule";
import {toggleStatusChooseFut} from "../../reduxModule";
import {toggleStatusChooseWhi} from "../../reduxModule";
//reset
import {toggleResetFilterProductMen} from "../../reduxModule";
//sortPrice
import {SortProductPriceMen} from "../../reduxModule";
function FilterProductsMen(props){

    let {statusSp, toggleSp, statusSz, toggleSz, statusCl, toggleCl, statusCld, toggleCld} = props

    let {statusSortTop, toggleSortTop, statusSortCenter, toggleSortCenter, statusSortBottom, toggleSortBottom, statusSort, toggleSort} = props;
    
    //filterSp
    let {typeProductsMen} = props; 
    let {statusCol, toggleStatusChooseCol, statusKas, toggleStatusChooseKas, statusWei, toggleStatusChooseWei, statusJac, toggleStatusChooseJac, statusDet, toggleStatusChooseDet, statusFut, toggleStatusChooseFut, statusWhi, toggleStatusChooseWhi} = props
    let {SortProductPriceMen} = props;
    //filterSize
    let {filterSizeMen} = props;
    let {status40, togglestatusChooseSizeProducts40, status42, togglestatusChooseSizeProducts42, status38, togglestatusChooseSizeProducts38} = props;
    //reset
    let {toggleResetFilterProductMen} = props;
    //countProducts
    let {count} = props;

    return(
        <div className="filterproducts">
            <div className="filterproducts_title">đồng hồ nam</div>
            <div className="filterproducts_content d-flex">
                <div className="left">sự tự tin trên cổ tay của người đàn ông hiện đại</div>
                <div className="right">{count.amount} trên 56 sản phẩm</div>
            </div>
            <div className="filterproducts_box d-flex">
                <div className="col-6">
                    <button className="collection" onClick={() => (toggleSp(true))}>
                        <span>BỘ SƯU TẬP</span>
                        <i class="fa-sharp fa-solid fa-chevron-down"></i>
                    </button>
                    <button className="size" onClick={() => (toggleSz(true))}>
                        <span>SIZE</span>
                        <i class="fa-sharp fa-solid fa-chevron-down"></i>
                    </button>
                    <button className="color" onClick={() => (toggleCl(true))}>                        
                        <span>MÀU SẮC</span>
                        <i class="fa-sharp fa-solid fa-chevron-down"></i>
                    </button>
                    <button className="material" onClick={() => (toggleCld(true))}>
                        <span>CHẤT LIỆU DÂY</span>
                        <i class="fa-sharp fa-solid fa-chevron-down"></i>
                    </button>
                    <div className="box">
                        {
                            statusSp &&
                            <div className="SP">
                                <div className="sp d-flex">
                                    <div className='product' onClick={() => {typeProductsMen("colosseum"); toggleStatusChooseCol(true)}}>
                                        {
                                            statusCol && <i class="fa-sharp fa-solid fa-caret-down"></i>
                                        }
                                        <button style={{backgroundImage: `url(https://curnonwatch.com/_next/image/?url=https%3A%2F%2Fshop.curnonwatch.com%2Fmedia%2Fcatalog%2Fcategory%2FColosseum.png&w=128&q=75)`}}></button>
                                        <div>colosseum</div>
                                    </div>
                                    <div className='product' onClick={() => {typeProductsMen("kashmir"); toggleStatusChooseKas(true)}}>
                                        {
                                            statusKas && <i class="fa-sharp fa-solid fa-caret-down"></i>
                                        }
                                        <button style={{backgroundImage: `url(https://curnonwatch.com/_next/image/?url=https%3A%2F%2Fshop.curnonwatch.com%2Fmedia%2Fcatalog%2Fcategory%2FKashmir.png&w=128&q=75)`}}></button>
                                        <div>kashmir</div>
                                    </div>
                                    <div className='product' onClick={() => {typeProductsMen("weimar"); toggleStatusChooseWei(true)}}>
                                        {
                                            statusWei && <i class="fa-sharp fa-solid fa-caret-down"></i>
                                        }
                                        <button style={{backgroundImage: `url(https://curnonwatch.com/_next/image/?url=https%3A%2F%2Fshop.curnonwatch.com%2Fmedia%2Fcatalog%2Fcategory%2FWeimar.png&w=128&q=75)`}}></button>
                                        <div>weimar</div>
                                    </div>
                                    <div className='product' onClick={() => {typeProductsMen("jackson"); toggleStatusChooseJac(true)}}>
                                        {
                                            statusJac && <i class="fa-sharp fa-solid fa-caret-down"></i>
                                        }
                                        <button style={{backgroundImage: `url(https://curnonwatch.com/_next/image/?url=https%3A%2F%2Fshop.curnonwatch.com%2Fmedia%2Fcatalog%2Fcategory%2FJackson.png&w=128&q=75)`}}></button>
                                        <div>jackson</div>
                                    </div>
                                    <div className='product' onClick={() => {typeProductsMen("dettroit"); toggleStatusChooseDet(true)}}>
                                        {
                                            statusDet && <i class="fa-sharp fa-solid fa-caret-down"></i>
                                        }
                                        <button style={{backgroundImage: `url(https://curnonwatch.com/_next/image/?url=https%3A%2F%2Fshop.curnonwatch.com%2Fmedia%2Fcatalog%2Fcategory%2FDetroit_1.png&w=128&q=75)`}}></button>
                                        <div>dettroit</div>
                                    </div>
                                    <div className='product' onClick={() => {typeProductsMen("futura"); toggleStatusChooseFut(true)}}>
                                        {
                                            statusFut && <i class="fa-sharp fa-solid fa-caret-down"></i>
                                        }
                                        <button style={{backgroundImage: `url(https://curnonwatch.com/_next/image/?url=https%3A%2F%2Fshop.curnonwatch.com%2Fmedia%2Fcatalog%2Fcategory%2FFutura.png&w=128&q=75)`}}></button>
                                        <div>futura</div>
                                    </div>
                                    <div className='product' onClick={() => {typeProductsMen("whitesands"); toggleStatusChooseWhi(true)}}>
                                        {
                                            statusWhi && <i class="fa-sharp fa-solid fa-caret-down"></i>
                                        }
                                        <button style={{backgroundImage: `url(https://curnonwatch.com/_next/image/?url=https%3A%2F%2Fshop.curnonwatch.com%2Fmedia%2Fcatalog%2Fcategory%2FWhitesands.png&w=128&q=75)`}}></button>
                                        <div>whitesands</div>
                                    </div>
                                </div>
                                    <div className="feature d-flex">
                                        <div className="left d-flex">
                                            <input type="checkbox"/>
                                            <span>Ẩn sản phẩm hết hàng</span>
                                        </div>
                                        <div className="center">{count.amount} sản phẩm phù hợp</div>
                                        <div className="right" onClick={() => toggleResetFilterProductMen()}>Reset</div>
                                    </div>
                            </div>
                                
                        }
                        {
                            statusSz &&
                            <div className="SZ">
                                <div className="sz d-flex">
                                    <div className="icon" onClick={() => {filterSizeMen(40); togglestatusChooseSizeProducts40(true)}}>
                                        {
                                            status40 && <i class="fa-sharp fa-solid fa-caret-down"></i>
                                        }
                                        <button>40</button>
                                        <div>40mm</div>
                                    </div>
                                    <div className="icon" onClick={() => {filterSizeMen(42); togglestatusChooseSizeProducts42(true)}}>
                                        {
                                            status42 && <i class="fa-sharp fa-solid fa-caret-down"></i>
                                        }
                                        <button>42</button>
                                        <div>42mm</div>
                                    </div>
                                    <div className="icon" onClick={() => {filterSizeMen(38); togglestatusChooseSizeProducts38(true)}}>
                                        {
                                            status38 && <i class="fa-sharp fa-solid fa-caret-down"></i>
                                        }
                                        <button>38</button>
                                        <div>38mm</div>
                                    </div>
                                </div>
                                <div className="feature d-flex">
                                    <div className="left d-flex">
                                        <input type="checkbox"/>
                                        <span>Ẩn sản phẩm hết hàng</span>
                                        </div>
                                    <div className="center">{count.amount} sản phẩm phù hợp</div>
                                    <div className="right" onClick={() => toggleResetFilterProductMen()}>Reset</div>
                                </div>

                            </div>
                        }
                        {
                            statusCl &&
                                <div className="CL">

                                    <div className="cl d-flex">
                                        <div className="color">
                                            <div className="boderimg">
                                                <img src="https://curnonwatch.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fsilver.7ef4c25d.png&w=48&q=75" alt="product men"/>
                                            </div>
                                            <div className="name">Silver</div>
                                        </div>
                                        <div className="color">
                                            <div className="boderimg">
                                                <img src="https://curnonwatch.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Frosegold.1b34d8c5.png&w=48&q=75" alt="product men"/>
                                            </div>
                                            <div className="name">Rosegold</div>
                                        </div>
                                        <div className="color">
                                            <div className="boderimg">
                                                <img src="https://curnonwatch.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fblack.abe55f81.png&w=48&q=75" alt="product men"/>
                                            </div>
                                            <div className="name">Black</div>
                                        </div>
                                        <div className="color">
                                            <div className="boderimg">
                                            </div>
                                            <div className="name">White</div>
                                        </div>
                                        <div className="color">
                                            <div className="boderimg">
                                                <img src="https://curnonwatch.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fnavy.1d1910f2.png&w=48&q=75" alt="product men"/>
                                            </div>
                                            <div className="name">Navy</div>
                                        </div>
                                        <div className="color">
                                            <div className="boderimg">
                                                <img src="https://curnonwatch.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fgrey.3ebfa42e.png&w=48&q=75" alt="product men"/>
                                            </div>
                                            <div className="name">Grey</div>
                                        </div>
                                        <div className="color">
                                            <div className="boderimg">
                                                <img src="https://curnonwatch.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fbrown.c4914078.png&w=48&q=75" alt="product men"/>
                                            </div>
                                            <div className="name">Brown</div>
                                        </div>
                                        <div className="color">
                                            <div className="boderimg">
                                                <img src="https://curnonwatch.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fgrey.3ebfa42e.png&w=48&q=75" alt="product men"/>
                                            </div>
                                            <div className="name">Coffee</div>
                                        </div>
                                        <div className="color">
                                            <div className="boderimg">
                                                <img src="https://curnonwatch.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fsand.661604f3.png&w=48&q=75" alt="product men"/>
                                            </div>
                                            <div className="name">Sand</div>
                                        </div>
                                        <div className="color">
                                            <div className="boderimg">
                                            </div>
                                            <div className="name">Blue</div>
                                        </div>
                                    </div>
                                    <div className="feature d-flex">
                                        <div className="left d-flex">
                                            <input type="checkbox"/>
                                            <span>Ẩn sản phẩm hết hàng</span>
                                        </div>
                                        <div className="center">{count.amount} sản phẩm phù hợp</div>
                                        <div className="right" onClick={() => toggleResetFilterProductMen()}>Reset</div>
                                    </div>
                                </div>
                        }
                        {
                            statusCld && 
                                <div className="CLD">
                                    <div className="cld d-flex">
                                        <div className="typed">
                                            <div className="img" style={{backgroundImage: `url(${"https://curnonwatch.com/_next/image/?url=https%3A%2F%2Fshop.curnonwatch.com%2Fmedia%2Fattribute%2Fswatch%2Fswatch_thumb%2F110x90%2Fb%2Fl%2Fblack.s_1.png&w=96&q=75"})`}}></div>
                                            <div className="type">Dây da Genuine</div>
                                        </div>
                                        <div className="typed">
                                            <div className="img" style={{backgroundImage: `url(${"https://curnonwatch.com/_next/image/?url=https%3A%2F%2Fshop.curnonwatch.com%2Fmedia%2Fattribute%2Fswatch%2Fswatch_thumb%2F110x90%2Fm%2Fe%2Fmesh.png&w=96&q=75"})`}}></div>
                                            <div className="type">Dây kim loại</div>
                                        </div>
                                        <div className="typed">
                                            <div className="img" style={{backgroundImage: `url(${"https://curnonwatch.com/_next/image/?url=https%3A%2F%2Fshop.curnonwatch.com%2Fmedia%2Fattribute%2Fswatch%2Fswatch_thumb%2F110x90%2Fs%2Fs%2Fssblack.png&w=96&q=75"})`}}></div>
                                            <div className="type">Dây thép không gỉ</div>
                                        </div>
                                        <div className="typed">
                                            <div className="img" ></div>
                                            <div className="type">Dây cao su</div>
                                        </div>
                                        <div className="typed">
                                            <div className="img" ></div>
                                            <div className="type">Dây vải Nato</div>
                                        </div>
                                    </div>
                                    <div className="feature d-flex">
                                        <div className="left d-flex">
                                            <input type="checkbox"/>
                                            <span>Ẩn sản phẩm hết hàng</span>
                                        </div>
                                        <div className="center">{count.amount} sản phẩm phù hợp</div>
                                        <div className="right" onClick={() => toggleResetFilterProductMen()}>Reset</div>
                                    </div>
                                </div>
                        }
                    </div>
                </div>
                <button className="sort col-2">
                    <div onClick={() => (toggleSort(true))}>
                        <span>SẮP XẾP THEO</span>
                        <i class="fa-sharp fa-solid fa-chevron-down"></i>
                    </div>
                    {
                        statusSort &&
                            <div className="sortprice">
                                <div className="default" onClick={() => {toggleSortTop(true); SortProductPriceMen("default")}}>
                                    <span>Mặc định</span>
                                    {
                                        statusSortTop && <i class="fa-sharp fa-solid fa-check"></i>
                                    }
                                </div>
                                <div className="default" onClick={() => {toggleSortCenter(true); SortProductPriceMen("increase")}}>
                                    <span>Giá tăng dần</span>
                                    {
                                        statusSortCenter && <i class="fa-sharp fa-solid fa-check"></i>
                                    }
                                </div>
                                <div className="default" onClick={() => {toggleSortBottom(true); SortProductPriceMen("reduce")}} >
                                    <span>Giá giảm dần</span>
                                    {
                                        statusSortBottom && <i class="fa-sharp fa-solid fa-check"></i>
                                    }
                                </div>
                            </div>
                    }
                </button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    statusSp: state.statusSp,
    statusSz: state.statusSz,
    statusCl: state.statusCl,
    statusCld: state.statusCld,
    
    statusSort: state.statusSort,
    productFilterMen: state.productFilterMen,
    statusSortTop: state.statusCheckSortTop,
    statusSortCenter: state.statusCheckSortCenter,
    statusSortBottom: state.statusCheckSortBottom,
    
    statusBackground: state.statusBackground,
    
    //statusChooseProductFilter
    statusCol: state.statusCol,
    statusKas: state.statusKas,
    statusWei: state.statusWei,
    statusJac: state.statusJac,
    statusDet: state.statusDet,
    statusFut: state.statusFut,
    statusWhi: state.statusWhi,
    //statusFilterSize
    status40: state.status40,
    status42: state.status42,
    status38: state.status38,
    //countProduct
    count: state.countProductmen,

})

const mapDispatchToProps = { 
    toggleSort, 
    toggleSp, 
    toggleSz, 
    toggleCl, 
    toggleCld,
    toggleBackground, 
    toggleSortTop, 
    toggleSortCenter, 
    toggleSortBottom ,
    typeProductsMen,

    //statusChooseProductFilter
    toggleStatusChooseCol,
    toggleStatusChooseKas,
    toggleStatusChooseWei,
    toggleStatusChooseJac,
    toggleStatusChooseDet,
    toggleStatusChooseFut,
    toggleStatusChooseWhi,
    //filterSizeMen
    filterSizeMen,
    togglestatusChooseSizeProducts40,
    togglestatusChooseSizeProducts42,
    togglestatusChooseSizeProducts38,
    //reset
    toggleResetFilterProductMen,
    //sortPrice
    SortProductPriceMen,
}


export default connect(mapStateToProps, mapDispatchToProps)(FilterProductsMen)