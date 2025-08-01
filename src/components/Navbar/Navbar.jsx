import React, { useContext, useState } from 'react'
import "./Navbar.css";
import { assets } from "../../assets/assets.js";
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext.jsx';

const Navbar = ({ setShowLogin }) => {

    const { getTotalCartAmount } = useContext(StoreContext);
    const [menu, setMenu] = useState("home");

    return (
        <div className="navbar">
            <Link to={"/"}><img src={assets.logo} alt="logo" className="logo" /></Link>
            <ul className="navbar-menu">
                <Link to={"/"} onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</Link>
                <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu</a>
                <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>mobile-app</a>
                <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>contact us</a>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="search_icon" />
                <div className="navbar-search-icon">
                    <Link to={"/cart"}> <img src={assets.basket_icon} alt="basket_icon" /></Link>
                    {getTotalCartAmount() > 0 && <div className="dot"></div>}
                </div>
                <button onClick={() => setShowLogin(true)}>sign in</button>
            </div>
        </div>
    )
}

export default Navbar