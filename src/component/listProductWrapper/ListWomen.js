function ListWrapperWomen(props){

    let{ProductsWapperWomen} = props;

    return(
        <div className='product col-2'>
            <button>
                <img src={ProductsWapperWomen.image}/>
            </button>
            <div>{ProductsWapperWomen.name}</div>
        </div>
    )
}

export default ListWrapperWomen;