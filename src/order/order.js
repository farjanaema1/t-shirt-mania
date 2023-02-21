import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import TShirt from "../tshirt/tshirt";
import Cart from "../cart/cart";
import './order.css'


const Order  = () =>{
    const tshirts=useLoaderData();
    console.log(tshirts)
    const [cart,setCart]=useState([])
    const handleAddToCart = (tshirt) =>{
        const exists =cart.find(ts =>ts._id===tshirt._id);
        if(exists){
            alert('already added')
        }
        else{
            const newCart =[...cart,tshirt];
            setCart(newCart);
        }
        
    }
    const handleRemoveItem = (tshirt) =>{
        const remaining=cart.filter(ts=>ts._id!==tshirt._id);
        setCart(remaining);
    }
    // console.log(tshirts)
    return (
        <div className="home-container">
            <div className="tshirt-container">
                {
                    tshirts.map( tshirt => <TShirt 
                        key={tshirt._id}
                        tshirt={tshirt}
                        handleAddToCart={handleAddToCart}
                    
                    ></TShirt>)
                }
            </div>
            <div className="cart-container">
                
<Cart cart={cart} handleRemoveItem={handleRemoveItem}></Cart>

            </div>
            

        </div>
    )
}
export  default  Order;