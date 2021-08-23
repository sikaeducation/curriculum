import { useState } from "react"
import "./App.css";
import NavBar from "./components/NavBar"
import HomePage from "./views/HomePage"
import AboutPage from "./views/AboutPage"
import ProductsPage from "./views/ProductsPage"
import ProductPage from "./views/ProductPage"

const App = () => {
  const [currentRoute, setCurrentRoute] = useState("HomePage")

  const views = {
    HomePage: <HomePage />,
    AboutPage: <AboutPage />,
    ProductsPage: <ProductsPage setCurrentRoute={setCurrentRoute} />,
    ProductPage: <ProductPage />,
  }

  const currentView = views[currentRoute]

  return (
    <div id="the-app">
      <h1>Sika Shoes</h1>
      <NavBar setCurrentRoute={setCurrentRoute} currentRoute={currentRoute} />
      <main>
        { currentView }
      </main>
    </div>
  )
}

export default App
