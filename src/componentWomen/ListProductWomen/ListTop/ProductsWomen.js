import { connect } from "react-redux"
import ListProductTop from "./ListProductTop"

function ProductsWomen(props){

    let {products} = props

    return(
        <div className="bestseller container">
            <div className="bestseller_products d-flex row">
                {
                    products.map(item => <ListProductTop key={item.id} products = {item}/>)
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    products: state.productsWomenTop
})
export default connect(mapStateToProps)(ProductsWomen);