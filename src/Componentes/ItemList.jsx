import Item from './Item'

const ItemList = ({data}) => {
    return(
        <div className="divItemList">
            {data.map((prod) => <Item key={prod.id} prod= {prod} />)}
            
        </div>
    )
}

export default ItemList