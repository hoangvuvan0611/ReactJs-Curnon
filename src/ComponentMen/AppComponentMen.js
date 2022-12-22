import Cart from "../component/Cart/Cart";
import ContactCurnon from "../component/ContactCurnon/ContactCurnon";
import Wrapper from "../component/listProductWrapper/Wrapper";
import PartOfCurnon from "../component/PartOfCurnon/PartOfCurnon";
import Complete from "../componentWomen/Complete/Complete";
import BannerMen from "./BannerMen/BannerMen";
import FilterProductsMen from "./Filter/FilterProductsMen";
import ProductsMen from "./ListProductsMen/ProductsMen";



function AppMen(){
    return(
        <div className="Appwomen">
            <Wrapper/>
            <Cart/>
            <BannerMen/>
            <FilterProductsMen/>
            <ProductsMen/>
            <Complete/>
            <PartOfCurnon/>
            <ContactCurnon/>
        </div>
    )
}

export default AppMen;