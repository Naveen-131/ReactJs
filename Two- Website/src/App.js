import React from "react"

import NavBar from "./Navbar";
import HeroSection from "./HeroSection";
import AppSection from "./AppSection"
import CardSection from "./CardSection";
import Fotter from "./Fotter"


const App = () => {
    return (
        <div>
            <h1>Hello</h1>
            <NavBar />
            <HeroSection />
            <AppSection />
            <CardSection />
            <Fotter/>
        </div>
    );
};


export default App;