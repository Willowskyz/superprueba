import './CartWidget.css'

const CartWidget = () => {
    return(
        <button to='/cart' className="CartWidget">
            <img src="/images/cart.svg" alt='cart-widget' className='CartImg'/>
            0
        </button>
    );
}

export default CartWidget