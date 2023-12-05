import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import action from "../images/nationals-action.jpg"
import self from "../images/nationals-self.jpeg"
import club from "../images/clubsports.jpeg"

const Slideshow = () => {
    const images = [action, self, club,];

    return (
        <Slide className="h-full">
            <div className="each-slide-effect relative w-full h-full">
                <div className="flex mx-auto bg-cover w-11/12">
                    <img className="rounded-[1em]" src={images[0]}/>
                    {/* <span className="text-xl text-center p-5">Slide 1</span> */}
                </div>
            </div>
            <div className="each-slide-effect">
                <div className="flex mx-auto items-center justify-center bg-cover w-11/12 rounded-[2em]">
                    <img className="rounded-[1em]" src={images[1]}/>
                    {/* <span className="text-xl text-center p-5">Slide 2</span> */}
                </div>
            </div>
            <div className="each-slide-effect">
                <div className="flex mx-auto items-center justify-center bg-cover w-11/12 rounded-[2em]">
                    <img className="rounded-[1em]" src={images[2]}/> 
                    {/* <span className="text-xl text-center p-5">Slide 3</span> */}
                </div>
            </div>
        </Slide>
    );
};

export default Slideshow;