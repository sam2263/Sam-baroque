function Check(){
    return(
<div>

    {/*<section className="container mt-3">*/}
    {/*    <a href="#" className="text-dark tdd">Home</a>*/}
    {/*    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-right" fill="currentColor"*/}
    {/*         xmlns="http://www.w3.org/2000/svg">*/}
    {/*        <path fill-rule="evenodd"*/}
    {/*              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>*/}
    {/*    </svg>*/}
    {/*    <span> Information</span>*/}
    {/*    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-right" fill="currentColor"*/}
    {/*         xmlns="http://www.w3.org/2000/svg">*/}
    {/*        <path fill-rule="evenodd"*/}
    {/*              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>*/}
    {/*    </svg>*/}
    {/*    <span className="text-secondary"> Shipping</span>*/}
    {/*    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-right" fill="currentColor"*/}
    {/*         xmlns="http://www.w3.org/2000/svg">*/}
    {/*        <path fill-rule="evenodd"*/}
    {/*              d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>*/}
    {/*    </svg>*/}
    {/*    <span>Payment</span>*/}
    {/*    <hr/>*/}
    {/*</section>*/}

    <section className=" container navbar-expand-lg navbar-light">

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#imgcontent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="w-100">
      <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-cart3" fill="currentColor"
           xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd"
              d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
      </svg>
      <span>Show oder summary</span>
      <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-chevron-down" fill="currentColor"
           xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
      </svg>
      <span className="text-right">Rs.5,840.00</span>
    </span>
        </button>
        <div className="float-right collapse navbar-collapse flex-column col-12 col-sm-12 col-md-12 col-lg-5 bg-light w-100"
             id="imgcontent">

            <div className="mr-auto fdr">

                <img src="http://cdn.shopify.com/s/files/1/2277/5269/products/2F6A7423_600x_crop_center.jpg?v=1603540854" className="img-fluid mt-4 float-left tas"/>

                    <p className="mt-5 pl-3 float-left"><b>PECAN</b><br/>
                        Unstitched / Default</p>
                    <span className="mt-5 pl-4 ml-5 float-right">Rs.11,990.00</span>
            </div>
            <section className="input-group pt-4">
                <input type="text" className="form-control" placeholder="Gift card or discount code" aria-label=""
                       aria-describedby="basic-addon1"/>
                    <div className="input-group-append">
                        <button className="btn btn-outline-dark" type="button">Apply</button>
                    </div>
            </section>
            <hr className="bg-dark"/>
                <section className="flex-row container pb-2">
                    <p className="float-left">Subtotal</p><br/>
                    <p className="float-left">Rs.11,990/-</p><br/>
                    <span className="float-left">Shipping</span><br/>
                    <p className="float-right">Calculated at next step</p>
                </section>
                <hr className="bg-dark" />

                    <section className="container flex-row mtt">
                        <p className="mr-auto float-left">Total</p>
                        <h2 className="ml-auto float-right">Rs.11,990.00</h2>
                    </section>
        </div>

    </section>

    <section className="container pt-3">

        <span className="fs">Contact information</span>
        <span className="pt-2 pb-4 float-right">Already have an account?<a href="#" className="text-dark pr-4 tdd">log in</a></span>
        <form action="{{route('order.store')}}" method="post">
            <input type="email" className="col-12 col-sm-12 col-md-12 col-lg-6 p-2" placeholder="Email"
                   name="email"/><br/>
                <div className="mt-2">
                    <input type="checkbox" className="mr-2"/>Keep me up to date on news and exclusive offers
                </div>

                <p className="mt-5 fs">Shipping address</p>
                <input type="text" className="col-12 col-sm-12 col-md-12 col-lg-3 p-2" placeholder="First name"
                       name="fname"/>
                    <input type="text" className="col-12 col-sm-12 col-md-12 col-lg-3 p-2 mt-2" placeholder="Last name"
                           name="lname"/>
                        <input type="text" className="col-12 col-sm-12 col-md-12 col-lg-6 p-2 mt-2"
                               placeholder="Address" name="address"/>
                            <input type="text" className="col-12 col-sm-12 col-md-12 col-lg-6 p-2 mt-2"
                                   placeholder="Apartment, suite, etc. (optional)"/>
                                <input type="text" className="col-12 col-sm-12 col-md-12 col-lg-6 p-2 mt-2"
                                       placeholder="city" name="city"/>
                                    <input type="text" className="col-12 col-sm-12 col-md-12 col-lg-3 p-2 mt-2"
                                           placeholder="Country/Region" name="country"/>
                                        <input type="text" className="col-12 col-sm-12 col-md-12 col-lg-3 p-2 mt-2"
                                               placeholder="Postal code" name="postal_code"/>
                                            <input type="number"
                                                   className="col-12 col-sm-12 col-md-12 col-lg-6 p-2 mt-2"
                                                   placeholder="Phone" name="phone"/>
                                                <div className="mt-2">
                                                    <input type="checkbox" className="mr-2 mb-5"/>Save this information
                                                        for next time
                                                </div>

                                                <button type="submit" className="btn btn-outline-dark"
                                                        data-toggle="modal" data-target="#staticBackdrop">Continue to
                                                    shipping
                                                </button>
        </form>
        <div className="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabIndex="-1"
             aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h6 className="modal-title text-dark text" id="staticBackdropLabel">Thanks so much for shopping
                            our product, You will get your product soon</h6>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                                    {/*<div className="modal-body">*/}
                                    {/*    <h5 className="text-dark text-center">ANVIER - Unstitched / Default</h5>--}}*/}
                                    {/*    <img src="//cdn.shopify.com/s/files/1/2277/5269/products/ht_1_150x150.jpg?v=1597923532" style="margin-left: 38%;">--}}*/}
                                    {/*</div>*/}
                        <div className="modal-footer">
                        <button type="button" className="btn btn-outline-dark btn-block pt-3 pb-3" data-dismiss="modal">Continue</button>
                        </div>
                        </div>
                        </div>
                        </div>
                        <hr className="bg-dark"/>
                        </section>

</div>
    )
}
export default Check;