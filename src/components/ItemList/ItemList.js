
import Item from '../Item/Item'

const ItemList = ({products}) => {
    return (
        <div /* onClick={() => console.log('Clickeaste itemlist')} */>
            {products.map(prod => <Item key={prod.id} {...prod} />)}
        </div>
    )
}


export default ItemList
