
function ListWrapperMen(props){

    let {ProductsWapperMen} = props

    return(
        <div className='product col-2'>
            <button>
                <img src={ProductsWapperMen.image}/>
            </button>
            <div>{ProductsWapperMen.name}</div>
        </div>
    )
}

export default ListWrapperMen;
