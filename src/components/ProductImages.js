import React , {useState, useEffect} from 'react';
import Image from "./Image";
import {Link} from "react-router-dom";

function ProductImages(){

    const [count, setCount]= useState(1);

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

    const [img,setImg]=useState({
        img1:"http://cdn.shopify.com/s/files/1/2277/5269/products/jhhb_600x_crop_center.jpg?v=1599718426",
        img2:"http://cdn.shopify.com/s/files/1/2277/5269/products/2F6A7423_600x_crop_center.jpg?v=1603540854",
        img3:"http://cdn.shopify.com/s/files/1/2277/5269/products/2F6A7423_600x_crop_center.jpg?v=1603540854",
        img4:"http://cdn.shopify.com/s/files/1/2277/5269/products/jhhb_600x_crop_center.jpg?v=1599718426",
    });
    const ImgChange=(event)=>{

    }

    return(
        <div>
            <div className="container">
                <section className="mb-5">
                    <div className="row">
                        <div className="col-md-6 mb-4 mb-md-0">
                            <div className="row product-gallery mx-1">
                                <div className="col-9 mb-0">
                                    <figure className="view overlay rounded z-depth-1 main-img re" id="magnifying_area">
                                        <img src="http://cdn.shopify.com/s/files/1/2277/5269/products/2F6A7423_600x_crop_center.jpg?v=1603540854"
                                             className="img-fluid z-depth-1 border pos mt-5" id="main_pic"/>

                                    </figure>
                                </div>
                            </div>
                            <div className="row">

                                    <div className="col btn" onClick={ImgChange}>
                                    <Image img={img.img1} />
                                    </div>

                                    <div className="col btn">
                                    <Image img={img.img2}/>
                                    </div>

                                    <div className="col btn">
                                    <Image img={img.img3}/>
                                    </div>
                                    <div className="col btn">
                                   <Image img={img.img4}/>
                                    </div>
                                    </div>
                                    </div>
                                    <div className="col-md-6 hhaa mt-5">
                                    <form action="cart" method="POST" className="pl-4 mt-4" enctype="multipart/form-data">

                                    <h5>BAROQUE</h5>
                                    <p><span className="mr-1"><strong>11,990/-</strong></span></p>
                                    <ul className="rating pl-3">
                                    <li>
                                    Type
                                    </li>
                                    <li>
                                    Addon
                                    </li>
                                    <li>
                                Available
                                    </li>

                                    </ul>

                                    <div className="table-responsive mb-2">
                                    <table className="table table-sm table-borderless">
                                    <tbody>
                                    <tr>
                                    <td className=" w-25"><b>Quantity</b></td>
                                    </tr>
                                    <tr>
                                    <td className="pl-0">
                                    <div className="def-number-input number-input safari_only mb-0">
                                    <a onClick={DecNum} className="btn-dark btn bg-light">-</a>
                                    <input className="quantity" min="0" name="quantity" value={count} type="number"/>
                                    <a onClick={IncNum} className="btn btn-dark bg-light">+</a>
                                    </div>
                                    </td>
                                    </tr>
                                    <tr>
                                    <td>Select size</td>
                                    </tr>
                                    <tr>
                                    <td>
                                    <div className="mt-1">
                                    <div className="form-check form-check-inline pl-0">
                                    <input type="radio" className="form-check-input" id="small" name="materialExampleRadios"
                                    checked />
                                    <label className="form-check-label small text-uppercase card-link-secondary"
                                    for="small">Small</label>
                                    </div>
                                    <div className="form-check form-check-inline pl-0">
                                    <input type="radio" className="form-check-input" id="medium" name="materialExampleRadios"/>
                                    <label className="form-check-label small text-uppercase card-link-secondary"
                                    for="medium">Medium</label>
                                    </div>
                                    <div className="form-check form-check-inline pl-0">
                                    <input type="radio" className="form-check-input" id="large" name="materialExampleRadios"/>
                                    <label className="form-check-label small text-uppercase card-link-secondary"
                                    for="large">Large</label>
                                    </div>
                                    </div>
                                    </td>
                                    </tr>
                                    </tbody>
                                    </table>
                                    </div>
                                    <Link to="Add_to_cart" className="btn btn-dark btn-md mb-2 w-100">Add to cart</Link>

                                    <div className="table-responsive pt-4">
                                    <table className="table table-sm table-borderless mb-0">
                                    <tbody>
                                    <tr>
                                    <th className="pl-0 w-25" scope="row"><strong>Delivery</strong></th>
                                    <td>Pakistan, Lahore</td>
                                    </tr>
                                    </tbody>
                                    </table>
                                    <p className="pt-4">Product Description</p>

                                    </div>
                                    <hr />
                                    </form>
                                    </div>
                                    </div>
                                    </section>
                                    <hr />
        </div>
        </div>
    )
}
export default ProductImages;