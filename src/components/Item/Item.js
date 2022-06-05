import { Link } from 'react-router-dom'

const Item = ({id, name,price, categoria, img, stock, description }) => {
    return (
        <div>
            <h1>{id}</h1>
            <h2>{stock}</h2>
           {/*  <button className="Option">Ver Detalle</button> */}
            <Link className='Option' to={`/detail/${id}`}>Ver Detalle</Link>
            <img src={img} alt='nombre' /> 
            <p>{description}</p>
        </div>
      
       
    )
}


export default Item