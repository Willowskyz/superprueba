import { useState} from "react"
import './ItemCount.css'


const ItemCount = ({stock}) => {

    const [count, setCount] = useState(1) /* Es lo mismo que el codigo comentado de arriba */

    const decrement = () => {
       if (count > 1) setCount(count - 1)
    }

    const increment = () => {
       if (count < stock) setCount(count + 1)
    }

    return (
       <div style={{display: 'flex'}}>
            <button onClick={decrement}>-</button>
            <h1>{count}</h1>
            <button onClick={increment}>+</button>
        </div> 
    )
}

export default ItemCount