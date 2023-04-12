import React from "react";
import "./Tombol.css";

function Tombolbtn(props) {
    return <button type="button" className="tombol">
        {props.teks}
    </button>
}

export default Tombolbtn;