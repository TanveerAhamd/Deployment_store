
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function Categories(props) {

  const params = useParams();
  const productCatagory = params.category;

  const [cat, setCat] =  useState([]);
  // const catogries = {
  //   cat : "jwelry",
  //   Elec : "Electronics"
  // }
  console.log(productCatagory);
  
  useEffect(()=>{
    fetch(`https://fakestoreapi.com/products/category/${productCatagory}`)
            .then(res=>res.json())
            .then((data)=>{
              setCat(data)
              // console.log(data)
            })
  },[])

            console.log(cat);
  return (
    <div>
    <div className='container'>
        <div className='row '>
            {
                cat.map((product) => {
                    return (
                        <div className='col-md-3' style={{ marginBottom: "10px" }} key={product.id}>
                            <div className="card" style={{ width: "18rem" }}>
                                <img src={product.image} className="card-img-top" alt="..." style={{ width: "100%", height: "200px" }} />
                                <div className="card-body">
                                    <div className="card-title text-truncate">{product.title}</div>
                                    <p className="card-text">{product.price}</p>
                                    <button onClick={()=>{props.cart(product)}} href="#" className="btn btn-primary">Add to Cart</button>
                                    <Link to={`/product/${product.id}`} className="btn btn-primary mx-2">View</Link>
                                    {/* <Link to={`/category/${product.category}`} className="mx-2">{product.category}</Link> */}
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>

</div>
  )
}

export default Categories