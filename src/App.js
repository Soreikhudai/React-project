import React, {useState} from 'react'
import Form from './components/Form/Form'
import CartProvider from './store/CartProvider'
const App = () => {

  const [add, setAdd]=useState(false)

  const addToCartHandler=()=>{
    setAdd(true)
  }
  return <CartProvider>
    <Form onAdd={addToCartHandler}/>
  </CartProvider>
}
export default App;