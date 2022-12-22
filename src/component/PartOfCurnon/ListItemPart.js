function ListItemPart(props){

    let {item} = props

    return(
        <div>
            <img src={item.image}/>        
        </div>
    )
}

export default ListItemPart;