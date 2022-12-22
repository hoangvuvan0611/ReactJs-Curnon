import {connect} from "react-redux"

function ListWrapper(props){

    let {ProductsWapper} = props

    return(
        <div className='product col-2'>
            <button>
                <img src={ProductsWapper.image}/>
            </button>
            <div>{ProductsWapper.name}</div>
        </div>
    )
}

export default ListWrapper;
