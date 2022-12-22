import {connect} from "react-redux"
import {toggleSort} from "../../reduxModule"
import {toggleSp} from "../../reduxModule"
import {toggleSz} from "../../reduxModule"
import {toggleCl} from "../../reduxModule"
import {toggleCld} from "../../reduxModule"
import {toggleBackground} from "../../reduxModule"
import {toggleSortTop} from "../../reduxModule"
import {toggleSortCenter} from "../../reduxModule"
import {toggleSortBottom} from "../../reduxModule"
import {typeProductSpWomen} from "../../reduxModule"
//statusChooseProductFilter
import {toggleStatusChooseHam} from "../../reduxModule"
import {toggleStatusChooseMel} from "../../reduxModule"
import {toggleStatusChooseMor} from "../../reduxModule"
import {toggleStatusChooseSan} from "../../reduxModule"
import {filterSize} from "../../reduxModule"
//filterSize
import {togglestatusChooseSizeProducts24} from "../../reduxModule"
import {togglestatusChooseSizeProducts28} from "../../reduxModule"
import {togglestatusChooseSizeProducts32} from "../../reduxModule"
//filterColor
import {filterChooseColor} from "../../reduxModule"
import {toggleResetFilterProduct} from "../../reduxModule"
import {SortProductPrice} from "../../reduxModule"

function FilterProducts(props){

    let {toggleBackground, statusSp, toggleSp, statusSz, toggleSz, statusCl, toggleCl, statusCld, toggleCld} = props;

    let {statusSortTop, toggleSortTop, statusSortCenter, toggleSortCenter, statusSortBottom, toggleSortBottom, statusSort, toggleSort} = props;

    let {typeProductSpWomen, toggleResetFilterProduct, filterChooseColor} = props;

    //statusChooseProductFilter
    let {statusHam, toggleStatusChooseHam, statusMel, toggleStatusChooseMel, statusMor, toggleStatusChooseMor, toggleStatusChooseSan, statusSan, filterSize} = props;
    let {status24, togglestatusChooseSizeProducts24, togglestatusChooseSizeProducts28, status28, togglestatusChooseSizeProducts32, status32} = props
    let {count, SortProductPrice} = props;
    return( 
        <div className="filterproducts">
            <div className="filterproducts_title">đồng hồ nữ</div>
            <div className="filterproducts_content d-flex">
                <div className="left">Trang sức nói lên cá tính của người phụ nữ hiện đại</div>
                <div className="right">{count.amount} trên 22 sản phẩm</div>
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
                                <div className="sp col-7 d-flex">
                                    <div className='product' onClick={() => (typeProductSpWomen("hamilton"), toggleStatusChooseHam(true))}>
                                        {
                                            statusHam && <i class="fa-sharp fa-solid fa-caret-down"></i>
                                        }
                                        <button style={{backgroundImage: `url(https://curnonwatch.com/_next/image/?url=https%3A%2F%2Fshop.curnonwatch.com%2Fmedia%2Fcatalog%2Fcategory%2FHamilton.png&w=128&q=75)`}}></button>
                                        <div>hamilton</div>
                                    </div>
                                    <div className='product' onClick={() =>(typeProductSpWomen("melissani"), toggleStatusChooseMel(true))}>
                                        {
                                            statusMel && <i class="fa-sharp fa-solid fa-caret-down"></i>
                                        }
                                        <button style={{backgroundImage: `url(https://curnonwatch.com/_next/image/?url=https%3A%2F%2Fshop.curnonwatch.com%2Fmedia%2Fcatalog%2Fcategory%2FMelis.png&w=128&q=75)`}}></button>
                                        <div>melissani</div>
                                    </div>
                                    <div className='product' onClick={() => (typeProductSpWomen("moraine"), toggleStatusChooseMor(true))}>
                                        {
                                            statusMor && <i class="fa-sharp fa-solid fa-caret-down"></i>
                                        }
                                        <button style={{backgroundImage: `url(https://curnonwatch.com/_next/image/?url=https%3A%2F%2Fshop.curnonwatch.com%2Fmedia%2Fcatalog%2Fcategory%2FMoraine.png&w=128&q=75)`}}></button>
                                        <div>moraine</div>
                                    </div>
                                    <div className='product' onClick={() => (typeProductSpWomen("santorini"), toggleStatusChooseSan(true))}>
                                        {
                                            statusSan &&<i class="fa-sharp fa-solid fa-caret-down"></i>
                                        }
                                        <button style={{backgroundImage: `url(https://curnonwatch.com/_next/image/?url=https%3A%2F%2Fshop.curnonwatch.com%2Fmedia%2Fcatalog%2Fcategory%2FSantorini.png&w=128&q=75)`}}></button>
                                        <div>santorini</div>
                                    </div>
                                </div>
                                    <div className="feature d-flex">
                                        <div className="left d-flex">
                                            <input type="checkbox"/>
                                            <span>Ẩn sản phẩm hết hàng</span>
                                        </div>
                                        <div className="center">{count.amount} sản phẩm phù hợp</div>
                                        <div className="right" onClick={()=> (toggleResetFilterProduct())}>Reset</div>
                                    </div>
                            </div>
                                
                        }
                        {
                            statusSz &&
                            <div className="SZ">
                                <div className="sz d-flex">
                                    <div className="icon" onClick={() => (filterSize(28), togglestatusChooseSizeProducts28(true))}>
                                        {
                                            status28 && <i class="fa-sharp fa-solid fa-caret-down"></i>
                                        }
                                        <button>28</button>
                                        <div>28mm</div>
                                    </div>
                                    <div className="icon" onClick={() => (filterSize(32), togglestatusChooseSizeProducts32(true))}>
                                        {
                                            status32 && <i class="fa-sharp fa-solid fa-caret-down"></i>
                                        }
                                        <button>32</button>
                                        <div>32mm</div>
                                    </div>
                                    <div className="icon" onClick={() => (filterSize(24), togglestatusChooseSizeProducts24(true))}>
                                        {
                                            status24 && <i class="fa-sharp fa-solid fa-caret-down"></i>
                                        }
                                        <button>24</button>
                                        <div>24x30mm</div>
                                    </div>
                                </div>
                                <div className="feature d-flex">
                                    <div className="left d-flex">
                                        <input type="checkbox"/>
                                        <span>Ẩn sản phẩm hết hàng</span>
                                        </div>
                                    <div className="center">{count.amount} sản phẩm phù hợp</div>
                                    <div className="right" onClick={()=> (toggleResetFilterProduct())}>Reset</div>
                                </div>

                            </div>
                        }
                        {
                            statusCl &&
                                <div className="CL">
                                    <div className="cl d-flex">
                                        <div className="color" onClick={() => filterChooseColor("silver")}>
                                            <div className="boderimg">
                                                <img src="https://curnonwatch.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fsilver.7ef4c25d.png&w=48&q=75"/>
                                            </div>
                                            <div className="name">Silver</div>
                                        </div>
                                        <div className="color">
                                            <div className="boderimg">
                                                <img src="https://curnonwatch.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Frosegold.1b34d8c5.png&w=48&q=75"/>
                                            </div>
                                            <div className="name">Rosegold</div>
                                        </div>
                                        <div className="color">
                                            <div className="boderimg">
                                                <img src="https://curnonwatch.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fblack.abe55f81.png&w=48&q=75"/>
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
                                                <img src="https://curnonwatch.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fnavy.1d1910f2.png&w=48&q=75"/>
                                            </div>
                                            <div className="name">Navy</div>
                                        </div>
                                        <div className="color">
                                            <div className="boderimg">
                                                <img src="https://curnonwatch.com/_next/image/?url=%2F_next%2Fstatic%2Fmedia%2Fbrown.c4914078.png&w=48&q=75"/>
                                            </div>
                                            <div className="name">Brown</div>
                                        </div>
                                        <div className="color">
                                            <div className="boderimg">
                                            </div>
                                            <div className="name">Pink</div>
                                        </div>
                                    </div>
                                    <div className="feature d-flex">
                                        <div className="left d-flex">
                                            <input type="checkbox"/>
                                            <span>Ẩn sản phẩm hết hàng</span>
                                        </div>
                                        <div className="center">{count.amount} sản phẩm phù hợp</div>
                                        <div className="right" onClick={()=> (toggleResetFilterProduct())}>Reset</div>
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
                                    </div>
                                    <div className="feature d-flex">
                                        <div className="left d-flex">
                                            <input type="checkbox"/>
                                            <span>Ẩn sản phẩm hết hàng</span>
                                        </div>
                                        <div className="center">{count.amount} sản phẩm phù hợp</div>
                                        <div className="right" onClick={()=> (toggleResetFilterProduct())}>Reset</div>
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
                                <div className="default" onClick={() => (toggleSortTop(true), SortProductPrice("default"))}>
                                    <span>Mặc định</span>
                                    {
                                        statusSortTop && <i class="fa-sharp fa-solid fa-check"></i>
                                    }
                                </div>
                                <div className="default" onClick={() => (toggleSortCenter(true), SortProductPrice("increase"))}>
                                    <span>Giá tăng dần</span>
                                    {
                                        statusSortCenter && <i class="fa-sharp fa-solid fa-check"></i>
                                    }
                                </div>
                                <div className="default" onClick={() => (toggleSortBottom(true), SortProductPrice("reduce"))} >
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
    wrapperWomen: state.wrapperWomen,
    statusSortTop: state.statusCheckSortTop,
    statusSortCenter: state.statusCheckSortCenter,
    statusSortBottom: state.statusCheckSortBottom,
    
    statusBackground: state.statusBackground,

    //statusChooseProductFilter
    statusHam: state.statusHam,
    statusMel: state.statusMel,
    statusMor: state.statusMor,
    statusSan: state.statusSan,

    status24: state.status24,
    status28: state.status28,
    status32: state.status32,

    //countProducts
    count: state.countProduct,
})

const mapDispatchToProps = { 
    toggleSort, toggleSp, toggleSz, toggleCl, toggleCld,
    toggleBackground, toggleSortTop, toggleSortCenter, toggleSortBottom ,
    
    //statusChooseProductFilter
    typeProductSpWomen,
    toggleStatusChooseHam,
    toggleStatusChooseMel,
    toggleStatusChooseMor,
    toggleStatusChooseSan,
    //filter
    filterSize,
    filterChooseColor,
    //statusChooseSizeProducts
    togglestatusChooseSizeProducts24,
    togglestatusChooseSizeProducts28,
    togglestatusChooseSizeProducts32,

    toggleResetFilterProduct,
    SortProductPrice, 
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterProducts)