import {HashRouter, Routes, Route} from "react-router-dom"
import App from "../App"
import Favorites from "./Favorites"
import Crypto from './Crypto'
import { useState } from "react"
import {CoinsContext} from './CoinsContext'



export default function Router(){
    const [favoriteCoins, setFavoriteCoins] = useState([])

    return(
        <HashRouter>
            <Routes>
                    <Route path='/' element={<CoinsContext.Provider value={{favoriteCoins, setFavoriteCoins}}><App/></CoinsContext.Provider>}></Route>
                    <Route path='/favorites' element={<CoinsContext.Provider value={{favoriteCoins, setFavoriteCoins}}><Favorites/></CoinsContext.Provider>}></Route> 
                    <Route path='/crypto/:id' element = {<CoinsContext.Provider value={{favoriteCoins, setFavoriteCoins}}><Crypto/></CoinsContext.Provider>}></Route>
            </Routes>
        </HashRouter>
    )
}