const NavBar = ({ currentRoute, setCurrentRoute }) => {
  const handleClick = route => event => {
    event.preventDefault()
    setCurrentRoute(route)
  }

  return (
    <nav className="navigation-bar">
      <ul>
        <li>
          <a
            onClick={handleClick("HomePage")}
            href="#"
            className={ currentRoute === "HomePage" ? "active" : null }
          >Home</a>
        </li>
        <li>
          <a
            onClick={handleClick("ProductsPage")}
            href="#"
            className={ ["ProductsPage", "ProductPage"].includes(currentRoute) ? "active" : null }
          >Products</a>
        </li>
        <li>
          <a
            onClick={handleClick("AboutPage")}
            href="#"
            className={ currentRoute === "AboutPage" ? "active" : null }
          >About</a>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
