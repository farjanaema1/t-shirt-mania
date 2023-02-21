const Cart =({cart,handleRemoveItem}) =>{
    let massage;
    if(cart.length===0){
        massage=<p>please buy one</p>
    }
    else{
        massage=<p>thanks for buying</p>
    }
    return(
        <div>
            <h2>cart :{cart.length}</h2>
            {
                cart.map( tshirt => <p key={tshirt._id}>{tshirt.name}<img src={tshirt.picture}></img>
                <button onClick={() =>handleRemoveItem(tshirt)}>X</button></p>)
            }
        </div>
    )
}
export default Cart;