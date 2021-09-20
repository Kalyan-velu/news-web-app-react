import React from 'react';
import './App.css';
import NavAppBar from "./ui/navigation/navBar";
import Footer from "./ui/footer/Footer";
import User from "./contents/pages/user/Login";


function App() {
    return (
        <div>
            <NavAppBar/>
            <User/>
            <Footer/>
        </div>

    );
}

export default App;
