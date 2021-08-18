import React from 'react';

class CartItem extends React.Component {
	
		// this.increaseQuantity=this.increaseQuantity.bind(this);
	increaseQuantity =()=>{
		// console.log("this",this.state)
		// this.state.qty =+1;
		//setState form 1: not dependent on previous form
		// this.setState({  
		// 	qty: this.state.qty + 1
		// });
		//setState form 2 :dependent on previous form
		this.setState((prevState)=>{
			return{
				qty:prevState.qty+1
			}
		},()=>{
			console.log("this.state increaseQuantity",this.state)
		});
	}
	decreaseQuantity =()=>{
		const{qty}=this.state;//destructing of array
		if(qty==0){
			return;
		}
		//setState form 2 :dependent on previous form
		this.setState((prevState)=>{
			return{
				qty:prevState.qty-1
			}
		},()=>{//this portion will be called when the operation of setState will be done
			console.log("this.state decreaseQuantity",this.state)
		});
	}
	render() {//jsx
		console.log("this.props",this.props)
		const { price, tittle, qty } = this.props.product;
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

						<img alt="decrease" onClick={this.decreaseQuantity}  className="action-icons" src="https://image.flaticon.com/icons/png/512/1828/1828906.png"></img>

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
		background:'#ccc'

	}
}
export default CartItem;