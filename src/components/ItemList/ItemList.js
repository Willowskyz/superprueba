/* const ItemList = ({products}) => {
    console.log(products)
    return (
        <h1>Listado</h1>
    )
}

export default ItemList
 */
import Item from '../Item/Item'

const ItemList = ({products}) => {
    return (
        <div>
            {products.map(prod => <Item key={prod.id} {...prod}/>)}
        </div>
    )
}

export default ItemList
