import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import NavbarCrypto from "./NavbarCrypto";
import '../Styles/Crypto.css'
import { LineChart, Line} from 'recharts';
import { CoinsContext } from "./CoinsContext";


export default function Crypto(props){
    const msg = useContext(CoinsContext)
    const [crypto, setCrypto] = useState({})
    const [marketData, setMarketData] = useState([])
    const [prices, setMarketPrices] = useState([])
    const params = useParams()
    const id = params.id

    async function getCoins(){
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
        const data = await response.json()
        console.log(data);
        setCrypto(data)
    }

    async function getMarketData(){
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=30`)
        const data = await response.json()
        console.log(data);
        setMarketData(data.prices)
    }

    useEffect(()=>{
        getCoins()
        getMarketData()
    }, [])


    const data = [] 

    marketData.forEach((element)=>{
        let obj = {name:"1", price:element[1]}
        data.push(obj)
    })

    const checkDataValidity = ()=>{
        if(Object.values(crypto.marketData.total_supply !== null)){
            return '-'
        }else{
            return crypto.marketData.total_supplytoLocaleString('en-US')
        }
    }

    return(
        <>
            <NavbarCrypto></NavbarCrypto>
            <div className="crypto">

                    <div className="crypto__right-section">
                        <div className="crypto__main">
                            <img src={crypto.image && crypto.image.small} alt=""></img>
                            <div className="crypto__name">{crypto && crypto.name}</div>
                            <div className="crypto__symbol">{crypto && crypto.symbol}</div>
                        </div>
                        
                        <div className="crypto__secondary">
                            <div className="crypto__rank">Rank #{crypto && crypto.market_cap_rank}</div>
                            <div className="crypto__24h-change" style = {crypto.market_data && crypto.market_data.price_change_percentage_24h > 0 ? {color:'green'} : {color:'red'}}>{crypto.market_data && crypto.market_data.price_change_percentage_24h} %</div>
                        </div>

                        <div className="crypto__price">{crypto.market_data && crypto.market_data.current_price.usd.toLocaleString('en-US')} $</div>

                        <LineChart width={380} height={250} data={data} className="chart">
                            <Line type="monotone" dataKey="price" stroke="#8884d8" dot={false}/>
                        </LineChart>
                    </div>

                    <div className="crypto__left-section">
                        <div className="crypto__table">
                            <div className="crypto__table-left">
                                <div>Market cap:</div>
                                <div>Total volume:</div>
                                <div>Circulating supply:</div>
                                <div>24h-high:</div>
                                <div>24h-low:</div>
                            </div>

                            <div className="crypto__table-right">
                                <div className="crypto__market-cap"> {crypto.market_data && crypto.market_data.market_cap.usd.toLocaleString('en-US')} $</div>
                                <div className="crypto__total-volume"> {crypto.market_data && crypto.market_data.total_volume.usd.toLocaleString('en-US')} $</div>
                                {/* <div className="crypto__total_supply"> {checkDataValidity()}</div> */}
                                <div className="crypto__circulating_supply"> {crypto.market_data && crypto.market_data.circulating_supply.toLocaleString('en-US')}</div>
                                <div className="crypto__24_high"> {crypto.market_data && crypto.market_data.high_24h.usd.toLocaleString('en-US')} $</div>
                                <div className="crypto__24_low"> {crypto.market_data && crypto.market_data.low_24h.usd.toLocaleString('en-US')} $</div>
                            </div>
                        </div>
                       

                    </div>

                    <div className="crypto__third-section">
                        <div className="crypto__table">

                            <div className="crypto__table-left">
                                <div>All-time high:</div>
                                <div>All-time high date:</div>
                                <div>All-time high %:</div>
                                <div>All-time low:</div>
                                <div>Price change in 1y:</div>
                                <div>Homepage:</div>
                                
                            </div>

                            <div className="crypto__table-right">
                                <div className="crypto__ath"> {crypto.market_data && crypto.market_data.ath.usd.toLocaleString('en-US')} $</div>
                                <div className="crypto__ath-date"> {crypto.market_data && crypto.market_data.ath_date.usd.substring(0,10)}</div>
                                <div className="crypto__ath_percentage"> <span style={crypto.market_data && crypto.market_data.ath_change_percentage.usd < 0? {color:'red'}:{color:'green'}}>{crypto.market_data && crypto.market_data.ath_change_percentage.usd} %</span></div>
                                <div className="crypto__atl"> {crypto.market_data && crypto.market_data.atl.usd} $</div>
                                <div className="crypto__price-change-1y" > <span style={crypto.market_data && crypto.market_data.price_change_percentage_1y_in_currency.usd < 0 ? {color:'red'}:{color:'green'}}>{crypto.market_data && crypto.market_data.price_change_percentage_1y_in_currency.usd.toLocaleString('en-US')} %</span></div>
                                <a href={crypto.links && crypto.links.homepage[0]}>{crypto.links && crypto.links.homepage[0]}</a>
                            </div>
                        </div>

                    
                        
                        
                    </div>
            
            </div>
        </>
       
    )
}