import * as React from 'react';
import './App.css';
import {BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Trending from "./components/contents/trending/TopHeadlines";
import NavAppBar from "./components/navigation/NavBar";
import { Grid} from "@mui/material";
import Search from './components/contents/search/Search';
import Business from './components/contents/business/Business';
import Category from './components/contents/categories/Category';
function App(){
    return (
    <Router>
    <div className={"App"}>
        <NavAppBar/>
        <div className="container">
        <Routes> 
                <Route path="/" exact element={<Trending/>}/>
                <Route path="/business" element={<Business/>}/>
                <Route path="/categories/:id" element={<Category/>}/>
                <Route path="/search" element={<Search/>}/>
        </Routes>  
        </div>
    </div>       
    </Router>
    );
}
export default App;
