import { useContext } from "react"
import CartContext from "../../context/CartContext"
import CartItem from '../CartItem/CartItem'
import {addDoc, collection} from 'firebase/firestore'
import {db} from '../../services/firebase'


const Cart = () => {

    const { cart, removeItem, clearCart, getTotal, getQuantity} = useContext(CartContext)

    const createOrder = () => {
        console.log('Crear Orden')

        const objOrder = {
            buyer: {
                name:'Guille',
                email: 'guillermompm@gmail.com',
                phone: '1234',
                address: 'Calle 123',
                comment: 'Comentario Prueba'
                
            },

            items: cart,
            total: getTotal()

        }

        console.log(objOrder)

        const collectionRef = collection(db, 'orders')

        addDoc(collectionRef, objOrder).then(({id}) =>{
            console.log(`Se creo la orden con el id ${id}`)
        })
    }
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
            <button className="Button" onClick={createOrder}>Generar Orden</button>
   
                
        </div>
    )
}



export default Cart