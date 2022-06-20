import { useContext } from 'react'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'
import { Link, NavLink } from 'react-router-dom'
import CartContext from '../../context/CartContext'

const NavBar = () => {

  const { getQuantity } = useContext(CartContext)

  const quantity = getQuantity()

  return (
      <nav className="NavBar" >
          <Link to='/'>
            <h3>Ecommerce</h3>
          </Link>
          <div className="Categories">
              {/* <button className='Option'>Celulares</button>
              <button className='Option'>Tablets</button>
              <button className='Option'>Notebooks</button> */}
              {/* <Link to='/category/celular' className='Option'>Celular</Link>
              <Link to='/category/tablet' className='Option'>Tablet</Link>
              <Link to='/category/notebook' className='Option'>Notebook</Link>
              <Link to='/about' className='Option'>About</Link> */}
              <NavLink to='/category/celular' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Celular</NavLink>
              <NavLink to='/category/tablet' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Tablet</NavLink>
              <NavLink to='/category/notebook' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Notebook</NavLink>
          </div>
          {quantity > 0 && <CartWidget />}
      </nav>
  )
}

export default NavBar