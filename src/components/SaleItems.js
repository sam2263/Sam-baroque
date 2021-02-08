import React from 'react';
import {Link} from "react-router-dom";

function Saleitems(props){
    return(
        <div>
        <img
            src={props.image}
            className="img-fluid pt-5   " alt="..."/>
    <h6 className="text-center pt-3 c">{props.title}</h6>
    <Link to="Product_Images" className="a">Rs.{props.price}</Link>
        </div>
    )
}
export default Saleitems;