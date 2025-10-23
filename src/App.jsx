import './assets/styles/main.css'
import Header from './Components/Header/Header.jsx';
import Hero from "./Components/Hero/Hero.jsx";
import Catalog from "./Components/Catalog/Catalog.jsx";
import MobApp from "./Components/MobApp/MobApp.jsx";
import Conditer from "./Components/Conditer/Conditer.jsx";
import Reviews from "./Components/Reviews/Reviews.jsx";
import Gallery from "./Components/Gallery/Gallery.jsx";


import Footer from './Components/Footer/Footer.jsx';


function App() {

    return (
        <>
            <Header/>
            <Hero/>
            <Catalog/>
            <MobApp/>
            <Conditer/>
            <Reviews/>
            <Gallery/>
            <Footer />

        </>
    )
}

export default App
