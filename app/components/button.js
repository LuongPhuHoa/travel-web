import React from "react";

const Button = ({ text, style }) => {
    return (
        <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 m-4 rounded" style={style}>
            {text}
        </button>
    );
}

export default Button;