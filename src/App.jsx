import React from 'react'
import Navbar from "./sections/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import TableOfContents from "./sections/TableOfContents.jsx";
import GoKart from "./sections/GoKart.jsx";

const App = () => {
    return (
        <main className="">
            <Navbar />
            <Hero />
            <TableOfContents />
            <GoKart />
        </main>
    )
}
export default App