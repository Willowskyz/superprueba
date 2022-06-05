import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink} from 'react-router-dom'

const NavBar = () => {
    return (
        <nav className='NavBar'>
            <Link to='/'><h1>Tienda Willowsky</h1></Link>
            
            
            <div className='Categories'>
                <NavLink to='/category/Tostado' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Tostado</NavLink>
                <NavLink to='/category/Torrado' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Torrado</NavLink>
                <NavLink to='/category/Intenso' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Intenso</NavLink>
         

               {/*  <Link to='/category/Tostado' className='Option'>Tostado</Link>
                <Link to='/category/Torrado' className='Option'>Torrado</Link>
                <Link to='/category/Intenso' className='Option'>Intenso</Link> */}
{/*                 <button className='Option'>Cafe Colombiano</button>
                <button className='Option'>Cafe Peruano</button>
                <button className='Option'>Cafe Brasilero</button> */}
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar