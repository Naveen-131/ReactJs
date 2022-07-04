import React from 'react'
import "./style.css"
import Button from './Button';

const App = () => {
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Hello World</h1>
            <Button buttonName="Home"></Button>
            <Button buttonName="About Us"></Button>
            
           {/* <button className="button">App Store</button>
            <button className="button">Play Store</button>  */}


        </div>
    );
};

export default App;

