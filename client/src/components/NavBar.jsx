import { Link } from "react-router-dom"



const NavBar = (props) =>{
    return(
        <div>
            <h1>NavBar</h1>
            <button><Link to="/">Home</Link></button>
            <button><Link to ="/add">ADD TRADE</Link></button>
            <button><Link to="/ledger">LEDGER</Link></button>
        </div>
    )
}

export default NavBar