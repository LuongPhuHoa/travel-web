import React from "react";
import Button from "./button";
import "./home/style.css";
const Banner = ({ title, description, style }) => {
    <div className="banner" style={{style}}>
        <div className="flex items-center justify-center">
            <h1 className="banner-title text-center text-5xl font-bold text-white">{title}</h1>
            <h1 className="banner-description text-center text-2xl font-medium text-white">{description}</h1>
            <Button
                text="View Packages"
            />
        </div>
    </div>
}

export default Banner;