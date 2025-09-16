import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import AboutMe from "./sections/Home/AboutMe.jsx";
import Navbar from "./sections/Navbar";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);