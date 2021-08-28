import React from 'react';

// class CartItem extends React.Component {

// 	render() {
const CartItem = (props) => {
	//jsx
	// console.log("this.props",this.props)
	const { price, tittle, qty } = props.product;
	const {
		product,
		onDecreaseQuantity,
		onIncreaseQuantity,
		onDeleteProduct
	} = props;
	return (
		<div className="cart-item">
			<div className="left-block">
				<img style={styles.images}src={product.img}alt="product logo"/>

			</div>
			<div className="right-block">
				<div style={{ fontsize: 25 }}>{tittle}</div>
				<div style={{ color: '#777' }}>price:{price}</div>
				<div style={{ color: '#777' }}>QTY:{qty}</div>
				<div className="cart-item-actions">
					{/* Buttons */}
					<img alt="increase" onClick={() => { onIncreaseQuantity(product) }} className="action-icons" src="https://image.flaticon.com/icons/png/512/875/875068.png"></img>

					<img alt="decrease" onClick={() => { onDecreaseQuantity(product) }} className="action-icons" src="https://image.flaticon.com/icons/png/512/1828/1828906.png"></img>

					<img alt="delete" onClick={() => { onDeleteProduct(product.id) }} className="action-icons" src="https://image.flaticon.com/icons/png/512/2603/2603105.png"></img>
				</div>

			</div>
		</div>
		
	);
}
const styles = {
	images: {
		height: 110,
		width: 110,
		borderRadius: 4,
		background: '#ccc'

	}
}
export default CartItem;