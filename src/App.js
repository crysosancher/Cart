import React from 'react'
import Cart from './Cart';
import Navbar from './Navbar';
//function App() {
//changing fun to class
class App extends React.Component {
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
  getCartCount=()=>{
    const { products }=this.state;
    let count=0;
    products.forEach((product) => {
      count+=product.qty;
    });
    return count;
  }
  getCartTotal=()=>{
    const {products}=this.state;
    let cartTotal=0;
    products.map((product)=>{
      cartTotal=cartTotal+product.qty*product.price;
    })
    return cartTotal;
  }

  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()}/>
        <Cart
        products={products} 
          onIncreaseQuantity={this.handleIncreaseQuantity}	
					onDecreaseQuantity={this.handleDecreaseQuantity}
					onDeleteProduct={this.handelDeleteProduct}	
        />
        <div style={{padding:10,fontSize:20}}>Total:{this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
