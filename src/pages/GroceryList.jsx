import React from 'react';
import Card from '../components/Card';
import { imageMap } from '../data/imageMap';
const GroceryList = () => {

	const groceryList = [
  { id: 1, name: 'Apples - 1Kg', price: 120, pic: imageMap.apple },
  { id: 2, name: 'Bananas - 1Kg', price: 45, pic: imageMap.banana },
  { id: 3, name: 'Oranges - 1Kg', price: 70, pic: imageMap.orange },
  { id: 4, name: 'Tomatoes - 1Kg', price: 30, pic: imageMap.tomato },
  { id: 5, name: 'Onions - 1Kg', price: 25, pic: imageMap.onion },
  { id: 6, name: 'Potatoes - 1Kg', price: 22, pic: imageMap.potato },
  { id: 7, name: 'Carrots - 1Kg', price: 40, pic: imageMap.carrot },
  { id: 14, name: 'Ginger - 100g', price: 12, pic: imageMap.ginger },
  { id: 15, name: 'Garlic - 100g', price: 15, pic: imageMap.garlic },
  { id: 18, name: 'Lemon - 250g', price: 20, pic: imageMap.lemon },

];

	return (
		<div className='px-4 sm:px-6 md:px-8'>
			<h2 className='text-2xl sm:text-3xl font-semibold text-center my-4'>In your nearby store</h2>
			<section className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'>
				{groceryList.map((item) => (
					<Card
					pic={item.pic}
						key={item.id}
						name={item.name}
						price={item.price}
						id={item.id}
					/>
				))}
			</section>
		</div>
	);
};

export default GroceryList;
