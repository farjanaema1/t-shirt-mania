import './tshirt.css'
const TShirt  = ({tshirt,handleAddToCart}) =>{
    const {name,picture,_id}=tshirt;
    
    return (
        <div  className="t-shirt">
            <img src={picture} alt="" />
            <h2>name :{name}</h2>
            <p>id :{_id}</p>
            <button onClick={() =>handleAddToCart(tshirt)}>BUY</button>
        
       
    
       
        </div>
    )
}
export  default  TShirt;