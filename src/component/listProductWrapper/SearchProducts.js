import {connect} from 'react-redux'
import {toggleSearch} from '../../reduxModule';


function SearchProduct(props){

    let {toggleSearch} = props

    return(
        <div className='boxSearch'> 
            <div className="input">
                <from>
                    <input placeholder="Nhập từ khóa..."/>
                </from>
            </div>
            <div className="outstanding">
                <div className="title">các từ khóa nổi bật:</div>
                <div>kashmir</div>
                <div>colosseum</div>
                <div>florenge</div>
                <div>mykonos</div>
                <div>jackie cuff</div>
            </div>
            <button onClick={() => toggleSearch(false)} className="close">
                Đóng
            </button>
        </div>
    )
}
const mapDispatchToProps = {toggleSearch};
export default (connect)(null, mapDispatchToProps)(SearchProduct);