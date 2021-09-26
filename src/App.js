import React from 'react';
import './App.css';

import User from "./contents/user/Usrauth";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import NavAppBar from "./ui/navigation/navBar";
import News from './contents/newsContents/newsCategoriesContents'
import Search from "./contents/newsContents/search/search";

function App() {
    return (
        <Router>
            <div>
                <NavAppBar/>

                <Switch>
                    <Route path="/home" component={News}/>
                    <Route path="/login" component={User}/>
                    <Route path="/search" component={Search}/>
                </Switch>

            </div>
        </Router>


    );
}

export default App;
