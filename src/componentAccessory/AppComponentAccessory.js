import Cart from "../component/Cart/Cart";
import ContactCurnon from "../component/ContactCurnon/ContactCurnon";
import Wrapper from "../component/listProductWrapper/Wrapper";
import PartOfCurnon from "../component/PartOfCurnon/PartOfCurnon";
import BannerAccessory from "./BannerAccessory/BannerAccessory";
import FilterProductsAccessory from "./Filter/FilterProductsAccessory";
import ProductsAccessory from "./ListProductsAccessory/ProductsAccessory";


function AppComponentAccessory(){
    return(
        <div className="Appwomen">
            <Wrapper/>
            <Cart/>
            <BannerAccessory/>
            <FilterProductsAccessory/>
            <ProductsAccessory/>
            <PartOfCurnon/>
            <ContactCurnon/>
        </div>
    )
}

export default AppComponentAccessory;