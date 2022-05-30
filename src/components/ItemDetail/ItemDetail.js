import './ItemDetail.css'

const ItemDetail = ({title, img}) => {
    return(
        <div>
            <h1>ItemDetail</h1>
            <h2>{title}</h2>
            <img src={img} alt='nombre' /> 
        </div>
        
    )
}

export default ItemDetail