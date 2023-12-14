import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import action from "../images/nationals-action.jpg"
import self from "../images/nationals-self.jpeg"
import club from "../images/clubsports.jpeg"

const VballSlideshow = () => {
    const images = [action, self, club,];
    return (
        <Slide className="h-full">
            <div className="each-slide-effect relative group">
                <div className="flex mx-auto bg-cover w-11/12">
                    <img className="rounded-xl" src={images[0]}/>
                    <div className="absolute w-11/12 transition-[0.5s] duration-[ease] opacity-0 text-[white] bg-[black] bg-opacity-50 text-xl text-center bottom-0 group-hover:opacity-100">2023 1st Team All-League</div>
                </div>
            </div>
            <div className="each-slide-effect relative group">
                <div className="flex mx-auto bg-cover w-11/12">
                    <img className="rounded-xl" src={images[1]}/>
                    <div className="absolute w-11/12 transition-[0.5s] duration-[ease] opacity-0 text-[white] bg-[black] bg-opacity-50 text-xl text-center bottom-0 group-hover:opacity-100">2023 NCVF <br/>2nd Team All-American</div>
                </div>
            </div>
            <div className="each-slide-effect relative group">
                <div className="flex mx-auto bg-cover w-11/12">
                    <img className="rounded-xl" src={images[2]}/> 
                    <div className="absolute w-11/12 transition-[0.5s] duration-[ease] opacity-0 text-[white] bg-[black] bg-opacity-50 text-xl text-center bottom-0 group-hover:opacity-100">2023 SCU Club Sports<br/>Male Athlete of the Year</div>
                </div>
            </div>
        </Slide>
    );
};

export default VballSlideshow;