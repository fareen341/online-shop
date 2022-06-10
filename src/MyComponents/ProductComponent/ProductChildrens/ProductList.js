import React from 'react'

export const ProductList = () => {
    return (
        <div>
            <div className="col-lg-8 ">
                {/* <div className="row products items" id="myList">
                    <div className="col-lg-3 col-sm-6 col-md-6 mb-5 productItem item"  data-category="{{i.product_belongs}}" data-category="{{i.product_belongs}}">                
                  <a href="/product/{{i.id}}"  style="text-decoration:none; color:black;"><p><img src="{{i.product_image.url}}" className="card-img" alt="..." height="230px" width="100%" ></p>
                      <p className="text-center mt-4 mb-3">{{i.product_name | title}}</p></a>

                      {% if i.sale_price != None and i.sale_last_date >= date%}
                        <p className="text-center lead"><del><b className="me-3">₹{{i.regular_price}}</b></del> <b className="text-danger">₹{{i.sale_price}}</b></p>
                        {% else %}
                        <p className="text-center lead"><b>₹{{i.regular_price}}</b></p>
                      {% endif %} 
                      <a href="/product/{{i.id}}" style="text-decoration:none; color:black;"> <button className="ms-3 text-light p-2" style="width:100%; border:none; background-color:black;">Buy Now <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="" className="bi bi-cart-fill" viewBox="0 0 16 16">
                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                      </svg></button></a>
                </div> */}
                    <div className="buttonToogle" style={{display: "none"}}>
                        <a href="" className="showMore"><p className="btn btn-dark">View More</p></a>
                    </div>
            </div>
            <div className="col-lg-12 mt-5">
                <h4 className="text-center">No product available</h4>
            </div>
        </div>
  )
}
