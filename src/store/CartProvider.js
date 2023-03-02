
import CartContext from './cart-context'


const CartProvider = props => {
    // const [items, updateItems] = useState([])

    // const addItemToCartHandler =(item)=> {
    //     updateItems([...items, item])
    // };

   

    const details={
        // items:items,
        // totalAmount: 0,
        // addItem: addItemToCartHandler,
        // removeItem: removeItemFromCartHandler
        medicineName:'',
        decription: '',
        price: 0,
        quantity: 0
    }
    return <CartContext.Provider value={details}>
        {props.children}
    </CartContext.Provider>
}
export default CartProvider;