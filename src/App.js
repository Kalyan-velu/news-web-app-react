import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route,Routes } from "react-router-dom";
import News from "./components/contents/newsContents/TopHeadlines";
import NavAppBar from "./ui/navigation/navBar";
import {Container} from "@mui/material";

function App() {


    return (
        <Router>
            <div>
                <NavAppBar/>
                <Container maxWidth="md">
                    <Routes>
                        <Route path="/" exact element={<News/>}/>
                    </Routes>
                </Container>
            </div>
        </Router>
    );
}
export default App;
