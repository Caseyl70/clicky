import React from "react";
import '../App.css';
function Image(props) {
    return (
        <div className="card">
            <img style={{ width: 200 }} data-id={props.id} onClick={props.myFunc} src={props.pic} alt="pic" />
        </div>

    )
}
export default Image