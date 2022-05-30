const Item = ({id, name,price, categoria, img, stock, description }) => {
    return (
        <div>
            <h1>{id}</h1>
            <h2>{stock}</h2>
            <img src={img} alt='nombre' /> 
        </div>
      
       
    )
}


export default Item