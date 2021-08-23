const ProductListing = ({ imageUrl, name, description }) => {
  return (
    <div style={{ marginTop: "64px"}} className="product-listing">
      <div className="image-container"><img src={ imageUrl } alt={ name } /></div>
      <h3>{ name }</h3>
      <p>{ description }</p>
    </div>
  )
}

export default ProductListing
