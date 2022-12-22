
import ContactCurnon from "../component/ContactCurnon/ContactCurnon";
import Wrapper from "../component/listProductWrapper/Wrapper";
import Cart from "../component/Cart/Cart"
import PartOfCurnon from "../component/PartOfCurnon/PartOfCurnon";
import BannerWomen from "./BannerWomen/BannerWomen";
import Complete from "./Complete/Complete";
import FilterProducts from "./Filter/FilterProducts";
import ProductsWomen from "./ListProductWomen/ListTop/ProductsWomen";


function AppWomen(){
    return(
        <div className="Appwomen">
            <Wrapper/>
            <Cart/>
            <BannerWomen/>
            <FilterProducts/>
            <ProductsWomen/>
            <Complete/>
            <PartOfCurnon/>
            <ContactCurnon/>
        </div>
    )
}

export default AppWomen;