import React from 'react'
import Cart from './Cart';
import Navbar from './Navbar';
import  firebase from 'firebase';
//function App() {
//changing fun to class
class App extends React.Component {
  constructor() {
		super();
		this.state = {
			products: [],
			loading:true,//initially making loading true
		}
		this.db=firebase.firestore();
	}
	componentDidMount (){
		// firebase
		//  .firestore()
		//  .collection('products')//fetching from firebase
		//  .get()
		//  .then((snapshot)=>{
		// 	 console.log(snapshot,"Snap shot");
		// 	snapshot.docs.map((doc )=>{
		// 		 console.log(doc.data())
		// 	 });

		// 	 const products=snapshot.docs.map((doc)=>{
		// 		 const data=doc.data();
		// 		 data['id']=doc.id;
		// 		 return data;
		// 	 })

		// 	 this.setState({
		// 		 products:products,
		// 		 loading:false//after fetching making loading false
		// 	 })
		//  })
		this.db
		 .collection('products')//fetching from firebase
		//  .where('price','<=',999)//queries
		.orderBy('price','desc') 
		 .onSnapshot((snapshot)=>{
			console.log(snapshot,"Snap shot");
		       snapshot.docs.map((doc )=>{
				console.log(doc.data())
			});

			const products=snapshot.docs.map((doc)=>{
				const data=doc.data();
				data['id']=doc.id;
				return data;
			})

			this.setState({
				products:products,
				loading:false//after fetching making loading false
			})
		})
	}
	handleIncreaseQuantity=(product)=>{
		
		const { products }=this.state;
		const index=products.indexOf(product);
		// products[index].qty+=1;
		// this.setState({
		// 	products:products
		// },console.log('Hey Please increase the qty of the',product))
		const docRef=this.db.collection('products').doc(products[index].id);
		

		docRef
		.update({
			qty: products[index].qty + 1
		})
		.then(()=>{
			console.log('Increased successfully')
		})
		.catch((error)=>{
			console.log('Error',Error)
		})
	}
	handleDecreaseQuantity=(product)=>{
		
		const { products }=this.state;
		const index=products.indexOf(product);
		if(products[index].qty===0){
			return ;
		}
		// products[index].qty-=1;
		// this.setState({
		// 	products:products
		// },console.log('Hey Please Decrease the qty of the',product))
		const docRef=this.db.collection('products').doc(products[index].id);
		

		docRef
		.update({
			qty: products[index].qty - 1
		})
		.then(()=>{
			console.log('Decreased successfully')
		})
		.catch((error)=>{
			console.log('Error',Error)
		})
	}
	handelDeleteProduct=(id)=>{
		
		// const{products}=this.state;
		// const items=products.filter((item)=>item.id!==id);//Returns an array which will contain products
		// this.setState({
		// products:items
		// },console.log("Product is deleted" ,id))
		const docRef=this.db.collection('products').doc(id);
		docRef
		.delete()
		.then(()=>{
			console.log('Deleted  successfully')
		})
		.catch((error)=>{
			console.log('Error',Error)
		})

		
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

    products.map(product =>{
	    if(product.qty>0){
      cartTotal=cartTotal+product.qty*product.price;
    }
    return '';
});
    return cartTotal;
  }
addProduct=()=>{
	this.db.collection('products')
	.add({
		img:'https://images.unsplash.com/photo-1501618669935-18b6ecb13d6d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bm90ZWJvb2t8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
		price:455,
		qty: 6,
		tittle: "NoteBook"
	})
	.then((docRef)=>{
		console.log("Product has been added",docRef)
	})
	.catch((error)=>{
		console.log("Error ",error)
	})
}
  render() {
    const { products ,loading} = this.state;//rendering
    return (
      <div className="App">
        <Navbar count={this.getCartCount()}/>
	{/* <button onClick={this.addProduct} style={{padding:20,fontSize:20,margin:0}}>Add Product</button> */}
	<div style={{display:"flex",margin:"right"}}>
        <Cart
        products={products} 
          onIncreaseQuantity={this.handleIncreaseQuantity}	
					onDecreaseQuantity={this.handleDecreaseQuantity}
					onDeleteProduct={this.handelDeleteProduct}
					//products={products}	
        />
	{loading && <h1>Loading Products ....</h1>}
        <div style={{padding:10,fontSize:20,position:'absolute',right:'0'}}>Total:{this.getCartTotal()}</div>
      </div></div>
    );
  }
}

export default App;
