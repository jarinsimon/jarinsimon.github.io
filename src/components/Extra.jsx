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
                        <div className="flex flex-col w-[65%] space-y-[3%]">
                            <img className="h-[47%] rounded-[1em] hover:opacity-70" src={team}/>
                            <img className="h-[47%] rounded-[1em] hover:opacity-70" src={league}/>
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