import './ItemDetail.css'

const ItemDetail = ({name, img}) => {
    return(
        <div>
            <h1>ItemDetail</h1>
            <h2>{name}</h2>
            <img src={img} alt='nombre' /> 
        </div>
        
    )
}

export default ItemDetail