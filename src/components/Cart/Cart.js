import { useContext } from "react"
import CartContext from "../../context/CartContext"
import CartItem from '../CartItem/CartItem'


const Cart = () => {

    const { cart, removeItem, clearCart, getTotal, getQuantity} = useContext(CartContext)

    if(getQuantity() === 0) {
        return (
            <h1>No hay items en el carrito</h1>
        )
    }

    return(
        <div>
            <h1>Cart</h1>
            { cart.map(p => <CartItem key={p.id} {...p}/>) }
            <h3>Total: ${getTotal()}</h3>
            <button onClick={() => clearCart()} className="Button">Limpiar carrito</button>
            <button className="Button">Generar Orden</button>
            <div>
                {cart.map(prod => {
                    return(
                        <div key={prod.id} style={{ display: 'flex'}}>
                            <div >{prod.name}</div>
                            <div>Cantidad: {prod.quantity}</div>
                            <div>Precio x Uni: ${prod.price}</div>
                            <div>Subtotal: ${prod.price * prod.quantity}</div>
                            <button onClick={() => removeItem(prod.id)}>X</button>

                            
                        </div>
                        
                    )})
                }
            </div>
                
        </div>
    )
}



export default Cart