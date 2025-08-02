import StockService from '../../services/StockService.jsx'
import {useState, useEffect} from 'react'


const TradeLedger = (props) =>{
    const [stocks, setStocks] = useState([])

    useEffect(()=>{
        StockService.getAllStocks
    })

    return(
        <div>

        </div>
    )
}

export default TradeLedger