
import React from 'react'

function Cart(props) {
  console.log(props.productInCart)
  return (
    <div className='container'>
    <div className='row'>
      {
        props.productInCart.map((product, index) => {
          return (
            <div className='container'>
            <div className='col-md-12'>
              <div class="card mb-3" style={{height : '240px'}}>
                <div class="row no-gutters">
                  <div class="col-md-4">
                    <img src={product.image} class="card-img" alt="..."  style={{height : '240px'}}/>
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">{product.title}</h5>
                      <p class="card-text">{product.price}</p>
                      <button type="button" class="btn-close" aria-label="Close" onClick={()=>{props.removeCartItem(index)}}></button>
                      <p class="card-text"><small class="text-muted">stars</small></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>

          )
        })
      }
    </div>
    </div>

  )
}

export default Cart