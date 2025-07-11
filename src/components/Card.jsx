import React from 'react';
import { toast } from 'react-toastify';
import { useCart } from '../context/CartContext';

const Card = (props) => {
    const { addToCartContext } = useCart();
    const [counter, setCounter] = React.useState(0);

    const incrementCounter = () => {
        setCounter(counter + 1);
        toast.success("Item added to cart");
    };

    const decrementCounter = () => {
        if (counter > 0) {
            setCounter(counter - 1);
        }
        if (counter === 0) {
            toast.error("Please add at least one item to the cart");
        }
    };

    async function addToCart() {
        if (counter === 0) {
            toast.error("Please add at least one item to the cart");
            return;
        }

        const item = {
            pic:props.pic,
            id: props.id,
            name: props.name,
            price: props.price,
            quantity: counter
        };

        addToCartContext(item);
        toast.success(`${props.name} added to cart`);
    }

    return (
        <div className='w-full max-w-xs sm:max-w-sm md:max-w-md p-4 bg-emerald-100 rounded-3xl flex flex-col items-center shadow-md'>
            <div className='w-full aspect-square bg-emerald-500 rounded-2xl overflow-hidden'>
          <img src={props.pic} className='w-full h-full object-cover' alt={props.name} />
        </div>


            <h3 className='text-lg sm:text-xl md:text-2xl font-semibold my-2 text-center'>{props.name}</h3>
            <p className='font-bold text-lg sm:text-xl'>₹{props.price}</p>

            <div className='flex flex-col items-center mt-4 w-full'>
                <div className='flex items-center justify-center space-x-4'>
                    <button onClick={incrementCounter} className='bg-emerald-500 text-white px-3 py-1 rounded'>+</button>
                    <span className='text-xl sm:text-2xl'>{counter}</span>
                    <button onClick={decrementCounter} className='bg-red-500 text-white px-3 py-1 rounded'>-</button>
                </div>
                <button onClick={addToCart} className='bg-emerald-500 text-white px-4 py-2 rounded mt-3 w-full'>
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default Card;
