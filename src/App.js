import './App.css';
import {useState, useEffect, useContext} from 'react'
import Navbar from './Components/Navbar';
import Coin from './Components/Coin'
import TopSearchedCoin from './Components/TopSearchCoin';
import { CoinsContext } from './Components/CoinsContext';


function App() {
  
  const {favoriteCoins, setFavoriteCoins} = useContext(CoinsContext)
  const [coins, setCoins] = useState([])
    
  
  
  const [topSearchedCoins, setTopSearchedCoins] = useState([])

  const handleAddFavorites = (e)=>{
    let id = e.target.id
    if(!id){
      id = e.target.closest('#').id
    }
    
    if(e.target.id){
      e.target.style = "color: rgb(204, 204, 100)"
      if(!favoriteCoins.find((element)=>{
        let temp = {...element}
        return JSON.stringify(temp) === JSON.stringify(coins[id])
      })){
        setFavoriteCoins([...favoriteCoins, coins[id]])
      }
    }
  }
 

  async function getCoins(){
    const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false');
    const data = await response.json()
    setCoins(data);
  }

  async function getTrendingCoins(){
    const response = await fetch('https://api.coingecko.com/api/v3/search/trending')
    const data = await response.json()
    setTopSearchedCoins(data.coins)
  }



  useEffect(()=>{
    getCoins()
    getTrendingCoins()
    const interval = setInterval(()=>{
      //getCoins()
    }, 10000)
  }, [])

  
  return (
    <div className="App">
        <Navbar favoriteCoins = {favoriteCoins}></Navbar>
        <div className='banner'>Top searched:{topSearchedCoins && topSearchedCoins.map((element)=>{
          return <TopSearchedCoin coin = {element}></TopSearchedCoin>
        })}</div>
        <div className = "cryptocurrencies-table">
        <div className = "coin__header">
            <div className='coin__position'>#</div>
            <div className= 'coin__name'>Name</div>
            <div className='coin__price'>Price</div>
            <div className='coin__change'>24h%</div>
            <div className='coin__market-cap'>Mkt cap</div>
            <div className='coin__ath'>All time high</div>
        </div>
          {coins && coins.map((element)=>{
            return <Coin coin = {element} cryptoId = {element.id} key = {coins && coins.indexOf(element)} id = {coins && coins.indexOf(element)} onClick={handleAddFavorites}></Coin>
          })}
        </div>
    </div>)}

export default App;
