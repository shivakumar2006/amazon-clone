import React from 'react'; 
import Navbar from './components/Navbar';
import Panel from './components/Panel';
import Hero from './components/Hero';
import './App.css';

const App = () => {
    return (
        <>
            <Navbar />
            <Panel />
            <Hero />
        </>
    )
}

export default App;