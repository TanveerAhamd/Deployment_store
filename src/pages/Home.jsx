
import React from 'react'
import { Link } from 'react-router-dom';

function Home(props) {

    const cart = props.cart;

    if (props.product.length > 0) {
        return (
            <div>
                <div className='container'>
                    <h1>Our Product</h1>  

                    <div className='row '>
                        {
                            props.product.map((product) => {
                                return (
                                    <div className='col-md-3' style={{ marginBottom: "10px" }} key={product.id}>
                                        <div className="card" style={{ width: "18rem" }}>
                                            <img src={product.image} className="card-img-top" alt="..." style={{ width: "100%", height: "200px" }} />
                                            <div className="card-body">
                                                <div className="card-title text-truncate">{product.title}</div>
                                                <p className="card-text">{product.price}</p>
                                                <button onClick={()=>{cart(product)}} href="#" className="btn btn-primary">Add to Cart</button>
                                                <Link to={`/product/${product.id}`} className="btn btn-primary mx-2">View</Link>
                                                <div>
                                                <Link to={`/category/${product.category}`} className="mx-2">{product.category}</Link>
                                                </div>
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
    else {
        return (
            <div>
                <div className='d-block mx-auto my-4 test-center'>
                    <div className="spinner-border text-primary " role="status"  >
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </div>

        )
    }

}

export default Home