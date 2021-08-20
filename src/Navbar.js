import React from 'react';

	const Navbar=(props)=>{//jsx cahnged it to fucntion component

		return (
			<div style={styles.nav}>
				<div style={styles.cartIconContainer}>
				<img style={styles.cartIcon}src="https://img-premium.flaticon.com/png/512/2838/premium/2838895.png?token=exp=1629460518~hmac=8df65340b45c5afa882cc02d5a634d7e" alt="cart Item"/>
				<span style={styles.cartCount}>{props.count}</span>

				</div>

			</div>
		);
	}

const styles={
	cartIcon:{
		height: 32,
		marginRight:20,
		
	},
	nav:{
		height:70,
		background:'#4267b2',
		display: 'flex',
		justifyContent: 'flex-end',
		alignItems :'center'
	},
	cartIconContainer:{
		position:'relative',
	},
	cartCount:{
		background:'yellow',
		borderRadius:'50%',
		padding:"4px 8px",
		position:'absolute',
		right: 0,
		top: -9,
	},
};
export default Navbar;