import { connect } from "react-redux";
import ListMenProducts from "./ListMenProducts";

function MenBestseller(props){

    let {products} = props

    return(
        <div className="bestseller">
            <div className="bestseller_title container">
                <div className="title">men's best sellers</div>
                <div className="viewall d-flex">
                    <div>xem tất cả</div>
                    <div><i class="fa-solid fa-arrow-right"></i></div>
                </div>
            </div>
            <div className="bestseller_products d-flex container">
                {
                    products.map(item => <ListMenProducts key={item.id} products = {item}/>)
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    products: state.productMenbestseller,
})
export default (connect)(mapStateToProps)(MenBestseller);