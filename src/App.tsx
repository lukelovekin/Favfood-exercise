import React from "react"
import Header from "./Header"
import AboutMe from "./AboutMe"
import FavFoods from "./FavFoods"
import Contact from "./Contact"
import Footer from "./Footer"
import "./App.scss"

export default () => {
    return (
        <>
        <Header/>
        <AboutMe/>
        <FavFoods/>
        <Contact/>
        <Footer/>
        </>
    )
}
