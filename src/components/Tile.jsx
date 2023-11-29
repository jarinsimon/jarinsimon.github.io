import React from "react";

function Tile(props){
    return(
        <>
            <div className="group relative border-solid border-[medium] border-black rounded-[2em]">
                <div className="flex mx-auto w-5/6 mt-6 overflow-hidden rounded-[2em] bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                    <img className="h-full w-full object-cover border-solid border-[medium] rounded-[2em]" src={props.image}/>
                </div>
                <div className="mt-4 flex justify-between">
                    <div className="text-xl font-normal w-4/5 mx-auto my-0">
                        <div className="text-2xl font-bold">{props.title}</div>
                        <div className="pb-4">{props.dates}</div>
                        <div className="pb-8">{props.description}</div>
                        <div className="font-semibold mb-4">{props.skills}</div>
                    </div>
                </div>
            </div>
        </>
    )

};

export default Tile;