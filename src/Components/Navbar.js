import { GiAbstract005 } from "react-icons/gi";
import { BiSearch } from "react-icons/bi";
import {Link, useNavigate} from "react-router-dom"
import "../Styles/Navbar.css"
import {useEffect, useState} from 'react'
export default function Navbar(props){


    const [inputValue, setInputValue] = useState("")
    const navigate = useNavigate()

    const handleSearch = async (e)=>{
        await setInputValue(e.target.value)
    }

    const onClick = async (e)=>{
        const response = await fetch(`https://api.coingecko.com/api/v3/coins/${inputValue}`)
        const data = await response.json()
        if(data.id){
            navigate(`/crypto/${inputValue}`, { replace: true })
        }
    }

    const onKeyPress = async (e)=>{
        if(e.key === "Enter"){
            const response = await fetch(`https://api.coingecko.com/api/v3/coins/${inputValue}`)
            const data = await response.json()

            if(data.id){
                navigate(`/crypto/${inputValue}`, { replace: true })
            }
        }
    }

    return(
        <div className="navbar">
            <GiAbstract005 className="navbar__logo"></GiAbstract005><Link to='/'>CryptoWatcher</Link>
            <div className="navbar__links">
                <Link to='/favorites' state={{data:props.favoriteCoins}} style={props.showWatchlist && props.showWatchlist === 'false' ? {display:'none'} : {display:'block'}} ><div className="navbar__watchlist">WatchList</div></Link>
                <input type="text" placeholder="Search..." onKeyDown={onKeyPress} onChange={handleSearch}></input>
                <button type="button" onClick={onClick}><BiSearch className="navbar__links--search-icon"></BiSearch></button>
                
                
            </div>
            
        </div>

    
    )
}