import ProductListing from "../components/ProductListing"
import { useState, useEffect } from "react"

const ProductsPage = ({setCurrentRoute}) => {
  const [products, setProducts] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch("products.json")
      .then(response => response.json())
      .then(parsedResponse => {
        setError(false)
        setProducts(parsedResponse.products)
      }).catch(error => {
        setError(true)
      })
  }, [])

  const handleClick = event => {
    event.preventDefault()
    setCurrentRoute("ProductPage")
  }

  const $products = products.map(product => {
    return <li onClick={handleClick} key={product.id}>
      <ProductListing
        id={product.id}
        name={product.name}
        description={product.description}
        imageUrl={product.imageUrl}
      />
    </li>
  })

  return (
    <div id="product-page">
      <h2>Products</h2>
      { error
        ? <p className="error">There was a problem getting the product list.</p>
        : <ul>{$products}</ul>
      }
    </div>
  )
}

export default ProductsPage
