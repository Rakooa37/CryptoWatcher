import { GiAbstract005 } from "react-icons/gi";
import { BiSearch } from "react-icons/bi";
import {Link} from "react-router-dom"
import "../Styles/Navbar.css"
export default function Navbar(props){
    return(
        <div className="navbar">
            <GiAbstract005 className="navbar__logo"></GiAbstract005><Link to='/'>CryptoWatcher</Link>
            <div className="navbar__links">
                <input type="text" placeholder="Search..."></input><BiSearch></BiSearch>
            </div>
            
        </div>

    
    )
}