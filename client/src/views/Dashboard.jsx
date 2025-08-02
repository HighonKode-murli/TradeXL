import { Link } from "react-router-dom"


const Dashboard = (props) =>{
    return(
        <div> 
            <h1>Dashboard</h1>
            <button><Link to ="/add">ADD TRADE</Link></button>
            <button><Link to="/ledger">LEDGER</Link></button>
        </div>
    )
}

export default Dashboard