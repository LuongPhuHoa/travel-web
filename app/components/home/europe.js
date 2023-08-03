import React from "react";
import "./style.css"
import Button from "../button";
import Image from "next/image";
import Destination1 from "./public/Destination 1.png";
import Destination2 from "./public/Destination 2.png";
import Destination3 from "./public/Destination 3.png";
import Destination4 from "./public/Destination 4.png";
import MyImage  from "./public/Illustration (2).png";
function Europe() {
    return (
        <div className="europe container bg-white py-20">
            <div className="grid grid-cols-2 py-20 px-40">
                <div className="col-span-1">
                    <h1 className="category-text py-2 my-2 text-left">Promotion</h1>
                    <h1 className="middle-title text-left text-gray-500 text-3xl py-3 my-3">We Provide You Best Europe Sight Seeing Tours</h1>
                    <p className=" text-gray-500 text-lg font-medium py-3 my-3 text-left">Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam!</p>
                    <Button 
                        text="View Packages"
                    />
                    <div classname="grid grid-flow-row-dense grid-cols-4">
                        <div className="">
                            <Image src={Destination1} alt="" height={250} width={250}/>
                        </div>
                        <div className="">
                            <Image src={Destination2} alt="" height={250} width={250}/>
                        </div>
                        <div className="">
                            <Image src={Destination3} alt="" height={250} width={250}/>
                        </div>
                        <div className="">
                            <Image src={Destination4} alt="" height={250} width={250}/>
                        </div>
                    </div>
                </div>
                <div className="col-span-1">
                    <div classname="items-center justify-center">
                        <Image src={MyImage} alt="" height={800} width={600}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Europe;