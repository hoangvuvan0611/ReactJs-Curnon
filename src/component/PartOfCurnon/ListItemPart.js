function ListItemPart(props){

    let {item} = props

    return(
        <div>
            <img src={item.image} alt="img"/>        
        </div>
    )
}

export default ListItemPart;