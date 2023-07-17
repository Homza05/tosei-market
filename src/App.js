import React from 'react';
import {Route, Routes} from "react-router-dom";
import Home from "./containers/Home/Home";
import Navigation from "./componets/navigation/Navigation";
import Catalogtalog from "./containers/Cotalog/Cotalog";
import Catalog from "./containers/Cotalog/Cotalog";
import CarItem from "./componets/CarItem/CarItem";


const App = () => {
    return (
        <>

            <Navigation/>
            <Routes>
                <Route path="/"  element={<Home/>}/>
                <Route path="/catalog"  element={<Catalog/>}/>
                <Route path="/car/CarItem"  element={<CarItem/>}/>

            </Routes>
        </>
    );
};

export default App;