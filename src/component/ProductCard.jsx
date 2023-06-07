import React from 'react'

function ProductCard( props ) {
    const product = props.product;
    return (
        <div>
            <div className='container'>
                <h1>Our Product</h1>
                <div className='row '>
                    {
                        product.map((product) => {
                            return (
                                <div className='col-md-3' style={{ marginBottom: "10px" }} key={product.id}>
                                    <div className="card" style={{ width: "18rem" }}>
                                        <img src={product.image} className="card-img-top" alt="..." style={{ width: "100%", height: "200px" }} />
                                        <div className="card-body">
                                            <div className="card-title text-truncate">{product.title}</div>
                                            <h5 className="card-title">{props.product.title}</h5>
                                            <p className="card-text">Price : {product.price}</p>
                                            <a href="#" className="btn btn-primary">Add to Cart</a>
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

export default ProductCard