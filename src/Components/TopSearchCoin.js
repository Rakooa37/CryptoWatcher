export default function TopSearchedCoin(props){
    return(
        <div className="top-searched-coin">
            <img src={props.coin.item.small ? props.coin.item.small : ""} alt="" width="25px" height="25px"></img>
            <div className="top-searched-coin__name">{props.coin.item.name ? props.coin.item.name : ""}&nbsp;</div>
            <div className="top-searched-coin__mkt-rank">Mkt rank: {props.coin.item.market_cap_rank ? props.coin.item.market_cap_rank: ""}</div>
        </div>
    )
}