import {AiOutlineStar} from "react-icons/ai"
import { Link } from "react-router-dom"

export default function Coin(props){
    return(
        <div className = "coin" >
            <div className='coin__position'><button id={props.id} onClick={props.onClick}><AiOutlineStar id = {props.id} className="star" ></AiOutlineStar></button>{props.coin ? props.coin.market_cap_rank : ""}</div>
            <div className="coin__name"><img src={props.coin ? props.coin.image :""} alt="" width="25px" height="25px" className="coin_logo"></img><Link to ={`/crypto/${props.cryptoId}`} className='coin__link'><div id={props.cryptoId}>{props.coin ? props.coin.name : "" }</div></Link></div>
            <div className='coin__price'>{props.coin ? props.coin.current_price.toLocaleString('en-US') : ""}</div>
            <div className='coin__change' style={props.coin && props.coin.price_change_percentage_24h < 0 ? {color: 'red'} : {color:'green'}}>{props.coin ? props.coin.price_change_percentage_24h : ""}%</div>
            <div className='coin__market-cap'>{props.coin ? props.coin.market_cap.toLocaleString('en-US') : ""}</div>
            <div className='coin__ath'>{props.coin ? props.coin.ath.toLocaleString('en-US') : ""}</div>
        </div>
    )
}