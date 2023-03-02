import { useState } from 'react';
import classes from './InputForm.module.css';

const InputForm = (props) => {
    const [medicineName, setMedicineName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');
    const [productList, setProductList] = useState([]);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const newProduct = { medicineName, description, price, quantity };
        setProductList([...productList, newProduct]);
        setMedicineName('');
        setDescription('');
        setPrice('');
        setQuantity('');
    };

    return (
        <div className={classes.container}>
            <form className={classes.form} onSubmit={handleFormSubmit}>
                <div className={classes.row}>
                    <div className={classes.col}>
                        <label>Medicine Name</label>
                        <input value={medicineName} onChange={(e) => setMedicineName(e.target.value)} />
                    </div>
                    <div className={classes.col}>
                        <label>Description</label>
                        <input value={description} onChange={(e) => setDescription(e.target.value)} />
                    </div>
                </div>
                <div className={classes.row}>
                    <div className={classes.col}>
                        <label>Price</label>
                        <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
                    </div>
                    <div className={classes.col}>
                        <label>Quantity Available</label>
                        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                    </div>
                </div>
                <button className={classes.button} onClick={props.onAddToCart}>Add Product</button>
            </form>
            <div className={classes.listCard}>
                <ul className={classes.list}>
                    {productList.map((product, index) => (
                        <li key={index}>
                            <div>Medi-Name: {product.medicineName}</div>
                            <div>Description: {product.description}</div>
                            <div>$ {product.price}</div>
                            <div className={classes.badge}>{product.quantity}</div>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );
};

export default InputForm;