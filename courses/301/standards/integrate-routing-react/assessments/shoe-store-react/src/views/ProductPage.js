import ProductListing from "../components/ProductListing"
import { useState, useEffect } from "react"

const ProductPage = () => {
  const [product, setProduct] = useState({})
  const [error, setError] = useState(false)
  const id = 1 // Hard-coded

  useEffect(() => {
    fetch("products.json")
      .then(response => response.json())
      .then(parsedResponse => {
        setError(false)
        const product = parsedResponse.products.find(product => product.id === id)
        setProduct(product)
      }).catch(error => {
        setError(true)
      })
  }, [])

  return (
    <div id="product-page">
      { error
        ? <p className="error">There was a problem getting the product list.</p>
        : <ProductListing
            id={product.id}
            name={product.name}
            description={product.description}
            imageUrl={product.imageUrl}
          />
      }
    </div>
  )
}

export default ProductPage
