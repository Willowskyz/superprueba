import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
    return (
        <nav>
            <h1>Tienda Willowsky</h1>
            <div>
                <button>Cafe Colombiano</button>
                <button>Cafe Peruano</button>
                <button>Cafe Brasilero</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar