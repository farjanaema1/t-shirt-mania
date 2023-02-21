import { Link } from "react-router-dom";

const Header  = () =>{
    return (
        <div>

<nav>
    <Link to='/'>home</Link>
    <Link to='/order'>order</Link>
    <Link to='/about'>about</Link>

</nav>
        </div>
    )
}
export  default  Header;