import React from "react";
import Banner from "../banner";
import { Container } from "postcss";

function Explore() {
 return <>
    <div  className="bg-center" style={{
                background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.33) 0%, rgba(0, 0, 0, 0.33) 100%), url("https://generation-sessions.s3.amazonaws.com/7f2b984c1093a3d44de5ce088d536c9b/img/rectangle-19302.png"), lightgray 50% / cover no-repeat',
                height: '399px'}}>
    </div>
    
    <div className="explore grid grid-cols-2 gap-0 container h-100">
        <Banner
            title="Promotion"
            description="Explore Nature"
            style={{ 
                background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.33) 0%, rgba(0, 0, 0, 0.33) 100%), url("https://generation-sessions.s3.amazonaws.com/7f5be258b22103b83fd57cbdddf06595/img/rectangle-19294.png"), lightgray 50% / cover no-repeat',
                height: '399px'}}
        />
        <div className="col-span-1">
            <Banner
                title="Promotion"
                description="Explore Cities"
                style={{ 
                    background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.33) 0%, rgba(0, 0, 0, 0.33) 100%), url("https://generation-sessions.s3.amazonaws.com/7f2b984c1093a3d44de5ce088d536c9b/img/rectangle-19302.png"), lightgray 50% / cover no-repeat',
                    height: '399px'}}
            />
        </div>
    </div>
 </>;
}

export default Explore;