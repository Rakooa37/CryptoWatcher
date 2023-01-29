import {BrowserRouter, HashRouter, Routes, Route} from "react-router-dom"
import App from "../App"
import Favorites from "./Favorites"
import Crypto from './Crypto'

export default function Router(){
    return(
        <HashRouter>
            <Routes>
                <Route path='/' element={<App/>}></Route>
                <Route path='/favorites' element={<Favorites/>}></Route> 
                <Route path='/crypto/:id' element = {<Crypto/>}></Route>
            </Routes>
        </HashRouter>
    )
}