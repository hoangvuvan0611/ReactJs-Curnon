import Banner from "./Banner/Banner";
import Cart from "./Cart/Cart";
import Category from "./Category/Category";
import ContactCurnon from "./ContactCurnon/ContactCurnon";
import Discover from "./Discover/Discover";
import Wrapper from "./listProductWrapper/Wrapper";
import MenBestseller from "./Menbestseller/MenBestseller";
import PartOfCurnon from "./PartOfCurnon/PartOfCurnon";
import ScrollToTop from "./ScrollToTop/ScrollToTop";
import StoryCurnon from "./StoryOfCurnon/StoryCurnon";
import WomenBestseller from "./Womenbestseller/WomenBestseller";

function MainComponent(){
    return(
        <div>
            <Wrapper/>
            <Banner/>
            <Cart/>
            <Category/>
            <MenBestseller/>
            <WomenBestseller/>
            <Discover/>
            <StoryCurnon/>
            <PartOfCurnon/>
            <ContactCurnon/>
            <ScrollToTop/>
        </div>
    )
}

export default MainComponent;