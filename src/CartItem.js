import React from 'react';

class CartItem extends React.Component {
	constructor() {
		super();
		this.state = {
			price: 999,
			tittle: "Phone",
			qty: 1,
			img: ''
		}
		// this.increaseQuantity=this.increaseQuantity.bind(this);

	}
	increaseQuantity =()=>{
		console.log("this",this.state)
	}
	render() {//jsx
		const { price, tittle, qty } = this.state;
		return (
			<div className="cart-item">
				<div className="left-block">
					<img style={styles.images} />

				</div>
				<div className="right-block">
					<div style={{ fontsize: 25 }}>{tittle}</div>
					<div style={{ color: '#777' }}>price:{price}</div>
					<div style={{ color: '#777' }}>QTY:{qty}</div>
					<div className="cart-item-actions">
						{/* Buttons */}
						<img alt="increase" onClick={this.increaseQuantity} className="action-icons" src="https://image.flaticon.com/icons/png/512/875/875068.png"></img>
						<img alt="decrease" className="action-icons" src="https://image.flaticon.com/icons/png/512/1828/1828906.png"></img>
						<img alt="delete" className="action-icons" src="https://image.flaticon.com/icons/png/512/2603/2603105.png"></img>
					</div>

				</div>
			</div>
		);
	}

}
const styles = {
	images: {
		height: 110,
		width: 110,
		borderRadius: 4,

	}
}
export default CartItem;