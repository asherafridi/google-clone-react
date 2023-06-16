import React, { useEffect, useState } from 'react'

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Routes,Route } from 'react-router-dom';
import { Container } from './components/Container';


function App() {
    const [darkTheme, setDarkTheme] = useState(false);

    useEffect(()=>{
        console.log(darkTheme);
    })
    return (
        <div className={darkTheme ? 'dark' : ' '}>
            <div className="bg-gray-100 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
                <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
                <Container />
                <Footer />
            </div>
        </div>
    )
}

export default App; 