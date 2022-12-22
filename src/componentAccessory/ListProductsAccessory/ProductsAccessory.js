import { connect } from "react-redux"
import ListProducts from "./ListProducts"

function ProductsAccessory(props){

    let {products} = props

    return(
        <div className="bestseller container">
            <div className="bestseller_products d-flex row">
                {
                    products.map(item => <ListProducts key={item.id} products = {item}/>)
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    products: state.productsAccessory
})
export default connect(mapStateToProps)(ProductsAccessory);