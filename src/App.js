import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Search from "./components/contents/newsContents/search/search";
import NavAppBar from "./ui/navigation/navBar";
import User from "./components/contents/user/Usrauth";
import News from "./components/contents/newsContents/TopHeadlines";
import {Container} from "@mui/material";

function App() {


    return (
        <Router>
            <div>
                <NavAppBar/>
                <Container maxWidth="md">
                    <Switch>
                        <Route path="/" exact component={News}/>
                        <Route path="/login" component={User}/>
                        <Route path="/search" component={Search}/>
                    </Switch>
                </Container>
            </div>
        </Router>
    );
}
export default App;
