import React from 'react'

const CartContext = React.createContext({

    medicineName:'',
    decription: '',
    price: 0,
    quantity: 0
})
export default CartContext;