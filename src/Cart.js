import React from 'react';
import CartItem from './CartItem';

class Cart extends React.Component {
	constructor() {
		super();
		this.state = {
			products: [
				{
					price: 99,
					tittle: "Watch",
					qty: 1,
					img: '',
					id:1,
				},
				{
					price: 9997,
					tittle: "Mobile Phone",
					qty: 1,
					img: '',
					id:2,
				},
				{
					price: 699,
					tittle: "Charger",
					qty: 1,
					img: '',
					id:3,
				},
				{
					price: 999,
					tittle: "Battery",
					qty: 1,
					img: '',
					id:4,
				}
			]
		}
	}
	handleIncreaseQuantity=(product)=>{
		
		const { products }=this.state;
		const index=products.indexOf(product);
		products[index].qty+=1;
		this.setState({
			products:products
		},console.log('Hey Please increase the qty of the',product))
	}
	handleDecreaseQuantity=(product)=>{
		
		const { products }=this.state;
		const index=products.indexOf(product);
		if(products[index].qty===0){
			return ;
		}
		products[index].qty-=1;
		this.setState({
			products:products
		},console.log('Hey Please Decrease the qty of the',product))
	}
	handelDeleteProduct=(id)=>{
		
		const{products}=this.state;
		const items=products.filter((item)=>item.id!==id);//Returns an array which will contain products
		this.setState({
		products:items
		},console.log("Product is deleted" ,id))
	}
	render() {
		const { products } = this.state;
		return (
			<div className="cart">
				{products.map((product) => {
					return (<CartItem 
					product={product} 
					key={product.id}
					onIncreaseQuantity={this.handleIncreaseQuantity}	
					onDecreaseQuantity={this.handleDecreaseQuantity}
					onDeleteProduct={this.handelDeleteProduct}	
					/>
					)
					})}
			</div>

		);

	}
}
export default Cart;