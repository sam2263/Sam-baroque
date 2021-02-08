import {Link} from "react-router-dom";
import {useState,useEffect} from "react";

function Cart(){
    const [count, setCount]= useState(1);
    const [price]=useState(11900);
    // useEffect=()=>{
    //     const total = `${count * price}`;
    // }
    const IncNum=()=>{
        setCount(count + 1);
    }
    const DecNum=()=>{
        if (count>0){
            setCount(count - 1);
        }
        else {
            alert('Beta Zero sy or kitna nichy jana ha');
            setCount(0);
        }
    }
    return(
        <div className="container">
            <section>

                <div className="row">

                    <div className="col-lg-7">

                        <div className="mb-3">
                            <div className="pt-4 wish-list">

                                <h5 className="mb-4">Cart (<span>2</span> items)</h5>

                                <div className="row mb-4">
                                    <div className="col-md-5 col-lg-3 col-xl-3">
                                        <div className="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                                            <img className="img-fluid w-75"
                                                 src="http://cdn.shopify.com/s/files/1/2277/5269/products/jhhb_600x_crop_center.jpg?v=1599718426" alt="Image"/>
                                        </div>
                                    </div>
                                    <div className="col-md-7 col-lg-9 col-xl-9">
                                        <div>
                                            <div className="d-flex justify-content-between">
                                                <div>
                                                    <h5>PECAN</h5>
                                                </div>
                                                <div>
                                                    <div className="def-number-input number-input safari_only mb-0 w-100">
                                                        <button className="minus decrease btn-dark btn" onClick={DecNum}>-</button>
                                                        <input className="quantity  p-1 pb-2" min="0" id="quantity" value={count} type="number"/>
                                                            <button className="plus increase btn btn-dark" onClick={IncNum}>+</button>
                                                    </div>
                                                    <small id="passwordHelpBlock" className="form-text text-muted text-center">
                                                        (Note, 1 piece)
                                                    </small>
                                                </div>
                                            </div>
                                            <div className="d-flex justify-content-between align-items-center">
                                                <div>
                                                    <a href="{{route('remove',[$id])}}" type="button" className="card-link-secondary small text-uppercase mr-3"><i
                                                        className="fas fa-trash-alt mr-1"></i> Remove item </a>
                                                </div>
                                                <p className="mb-0"><strong>Rs.11,990/-</strong></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                <hr className="mb-4"/>

                                    <div className="btn btn-dark"><a href="{{url('/')}}" className="text-white">Continue Shoping</a></div>
                            </div>

                        </div>

                    </div>
                    <div className="col-lg-4 ml-5 mt-5 hhaa">

                        <div className="mb-3">
                            <div className="pt-5 mt-3">

                                <h5 className="mb-3">The total amount of</h5>

                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                                        Sub Total
                                        <span id="temp">Rs.{count * price}/-</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                        Shipping
                                        <span>Pakistan, Lahore</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                                        <div>
                                            <strong>The total amount of</strong>
                                            <strong>
                                                <p className="mb-0">(including VAT)</p>
                                            </strong>
                                        </div>
                                        <p className="total-price"><strong><strong>Rs.{count * price}/-</strong></strong></p>
                                    </li>
                                </ul>

                                <Link to="check" className="btn btn-dark btn-block">go to checkout</Link>

                            </div>
                        </div>

                        <div className="mb-3">
                            <div className="pt-4">

                                <a className="dark-grey-text d-flex justify-content-between" data-toggle="collapse" href="#collapseExample"
                                   aria-expanded="false" aria-controls="collapseExample">
                                    Add a discount code (optional)
                                    <span><i className="fas fa-chevron-down pt-1"></i></span>
                                </a>

                                <div className="collapse" id="collapseExample">
                                    <div className="mt-3">
                                        <div className="md-form md-outline mb-0">
                                            <input type="text" id="discount-code" className="form-control font-weight-light"
                                                   placeholder="Enter discount code"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </section>

        </div>
    )
}
export default Cart;