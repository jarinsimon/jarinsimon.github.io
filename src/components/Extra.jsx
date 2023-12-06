import React from "react";
import Slideshow from "./Slideshow.jsx";

import junior from "../images/2021.jpeg"
import league from "../images/league-champs.jpg"
import team from "../images/nationals-team.jpeg"
import action from "../images/nationals-action.jpg"


function Extra(){
    return(
        <>
            <div name="extra" className="snap-start snap-y h-screen w-full bg-white">
                <p className="font-header text-5xl pt-24">More About Me</p>
                <div className="w-1/2 box-border relative">
                    <div className="flex flex-row">
                        <div name="vertical-image" className="w-[35%] py-0">
                            <Slideshow/>
                        </div>
                        <div className="flex flex-col w-[65%]">
                            <div name="horizontal-image" className="relative group top-0">
                                <img className="rounded-[1em]" src={team}/>
                                <div className="absolute text-[#f1f1f1] w-full transition-[0.5s] duration-[ease] opacity-0 text-[white] bg-[black] bg-opacity-50 text-xl text-center bottom-0 group-hover:opacity-100">Finished 5th/300+ Teams Nationally</div>
                            </div>
                            <div name="horizontal-image" className="relative group">
                                <img className="rounded-[1em]" src={league}/>
                                <div className="absolute text-[#f1f1f1] w-full transition-[0.5s] duration-[ease] opacity-0 text-[white] bg-[black] bg-opacity-50 text-xl text-center bottom-0 group-hover:opacity-100">2023 NCCVL Champs</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div name="hawaii">

                </div>
                
                
            </div>
        </>
    );
}

export default Extra;