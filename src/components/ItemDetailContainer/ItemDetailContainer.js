import './ItemDetailContainer.css'
import { useState, useEffect } from 'react'
import { getProductsById } from '../../asyncmocks'
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState()

    const { productId } = useParams()
    console.log(productId)

    useEffect(() => {
        getProductsById(productId).then(response => {
            setProduct(response)
        })
    }, [])

    return(
        <div className='ItemDetailContainer' >
            <ItemDetail {...product}/>
        </div>
    )
}

export default ItemDetailContainer