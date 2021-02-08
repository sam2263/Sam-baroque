import React from 'react'



function Image(props) {


    return (
        <div>
            <div className="view overlay rounded z-depth-1 gallery-item">
                <img src={props.img} className="img-fluid lam"/>
            </div>
        </div>
    )
}
export default Image;