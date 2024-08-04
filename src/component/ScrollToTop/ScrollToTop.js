import {toggleScroll} from "../../reduxModule"
import {connect} from "react-redux"
import {useEffect} from "react"

function ScrollToTop (props){

    let {toggleScroll} = props;
    const top = () =>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    return(
        <div className="scrolltop">
            <button onClick={top}>
                <i className="fa-solid fa-chevron-up"></i>
            </button>
        </div>
    )
}


const mapDispatchToProps = {toggleScroll};
export default connect(null,mapDispatchToProps)(ScrollToTop);