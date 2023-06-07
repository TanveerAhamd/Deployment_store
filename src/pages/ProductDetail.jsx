
import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function ProductDetail(props) {
  const [product, setProduct] = useState([]);
  const params = useParams();
  const productId = params.id;


  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`).then((data) => {
      return data.json();
    }).then((res) => {
      setProduct(res);
    }).catch((error) => {
      console.log(error)
    })
  }, [])

  console.log(Object.keys(product));

  if (Object.keys(product).length > 0) {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <img src={product.image} width='50%' height='400px'></img>
          </div>
          <div className='col-md-6'>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <h2> Price (Rs) : {product.price}</h2>
            <p>Rating : {product.rating["rate"]}</p>
            <button onClick={()=>{props.cart(product)}} className='btn btn-primary'>Add to Cart</button>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    )

  }

}

export default ProductDetail