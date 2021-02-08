import React from 'react';

function CaregoriesItems(props){
    return(
    <div>
    <img src={props.img} className="img-fluid pt-5   " alt="..."/>
    <h2 className="text-center pt-3 c">{props.title}</h2>
    <a href="#" className="a">SHOP NOW</a>
    </div>
    )}

export default CaregoriesItems;