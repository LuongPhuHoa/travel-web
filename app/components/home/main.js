import Partners from "./partner";
import React from "react";
import BestService from "./bestService";
import Romantic from "./romantic";
import Booking from "./booking";
import Separatir from "./separatir";
import Europe from "./europe";
import Explore from "./explore";

function Main() {
    return (
        <div className="main">
            <Partners />
            <BestService />
            <Romantic />
            <Booking />
            <Separatir />
            <Europe />
            <Explore />
        </div>
    );
}

export default Main;