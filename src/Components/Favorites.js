import { Link, useLocation } from "react-router-dom"
import Navbar from "./Navbar"
import Coin from "./Coin"
import "../Styles/Favorites.css"
import { useContext, useEffect } from "react"
import { CoinsContext } from "./CoinsContext"

export default function Favorites(){

    const {favoriteCoins, setFavoriteCoins} = useContext(CoinsContext);

    return(
        
        <div className="watchlist">
            <Navbar showWatchlist={'false'}></Navbar>
            <div className="watchlist__title">My watchlist</div>
            <Link to="/"><div className="watchlist__add">Add to watchlist + </div></Link>   
            <div className="cryptocurrencies-table">
                <div className = "coin__header">
                <div className='coin__position'>#</div>
                <div className= 'coin__name'>Name</div>
                <div className='coin__price'>Price</div>
                <div className='coin__change'>24h%</div>
                <div className='coin__market-cap'>Mkt cap</div>
                <div className='coin__ath'>All time high</div>
            </div>

                {favoriteCoins !== [] && favoriteCoins.map((element, i)=>{
                    return <Coin cryptoId = {element.id}  coin = {element} key = {i} id = {i} onClick={()=>{}}></Coin>
                })}
            </div>
            
        </div>
    )
}