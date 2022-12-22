import { connect } from "react-redux"
import ListWomenProducts from "./ListWomenProducts"

function WomenBestseller(props){

    let {products} = props

    return(
        <div className="bestseller">
            <div className="bestseller_title container">
                <div className="title">Women's best sellers</div>
                <div className="viewall d-flex">
                    <div>xem tất cả</div>
                    <div><i class="fa-solid fa-arrow-right"></i></div>
                </div>
            </div>
            <div className="bestseller_products d-flex container">
                {
                    products.map(item => <ListWomenProducts key={item.id} products = {item}/>)
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    products: state.productWomenbestseller
})
export default connect(mapStateToProps)(WomenBestseller);