import React from "react";
import VballSlideshow from "./VballSlideshow.jsx";

import league from "../images/league-champs.jpg"
import team from "../images/nationals-team.jpeg"
import hawaii from "../images/seniors.jpg"
import spotify from "../images/spotify_icon.jpg"

function Extra(){
    return(
        <>
            <div name="extra" className="snap-start snap-y h-screen w-full bg-white">
                <p className="font-header text-5xl pt-[4%] xl:pt-[6%]">More About Me</p>
                <div className="flex flex-row">
                    <div className="mx-auto box-border relative w-3/4 xl:w-5/6">
                        <div className="flex flex-row lg:mt-[1%]">
                            <div className="flex flex-col w-[38.5%]">
                                <div name="horizontal-image" className="relative group mb-auto">
                                    <img className="rounded-xl" src={league}/>
                                    <div className="absolute w-full transition-[0.5s] duration-[ease] opacity-0 text-[white] bg-[black] bg-opacity-50 text-xl text-center bottom-0 group-hover:opacity-100">President/Captain of SCU Men's Club Volleyball<br/>2021-2023</div>
                                </div>
                                <div name="horizontal-image" className="relative group">
                                    <img className="rounded-xl" src={team}/>
                                    <div className="absolute w-full transition-[0.5s] duration-[ease] opacity-0 text-[white] bg-[black] bg-opacity-50 text-xl text-center bottom-0 group-hover:opacity-100">2023 NCCVL Champs<br/>Finished 5th/300+ Teams Nationally</div>
                                </div>
                            </div>
                            <div name="vertical-image" className="w-[21.5%]">
                                <VballSlideshow/>
                            </div>
                            <div className="flex flex-col w-[38.5%]">
                                <div name="horizontal-image" className="relative group mb-auto h-[48%]">
                                    <img className="rounded-xl" src={hawaii}/>
                                    <div className="absolute w-full transition-[0.5s] duration-[ease] opacity-0 text-[white] bg-[black] bg-opacity-50 text-xl text-center bottom-0 group-hover:opacity-100">President/Luau Director of SCU Hawaii Club<br/>(Class of 2023 pictured)</div>
                                </div>
                                <div name="logos" className="flex flex-row h-[48%]">
                                    <a href="https://open.spotify.com/user/jarins1" className="flex w-[48%] h-full mr-auto border-solid border-[medium] border-black rounded-xl items-center justify-center" target="_blank">
                                        <img src={spotify} className="flex w-5/6 h-5/6"/>
                                    </a>
                                    <div className="flex w-[48%] h-full border-solid border-[medium] border-black rounded-xl items-center justify-center ">Coming Soon</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Extra;