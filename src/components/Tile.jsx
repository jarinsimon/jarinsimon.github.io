import React from "react";

function Tile(props){
    return(
        <>
            <div className="group relative border-solid border-[medium] border-black rounded-xl hover:shadow-2xl h-96 xl:max-w-sm">
                <div className="flex flex-col h-full">
                    <div className="flex mx-auto h-1/3 w-5/6 mt-6 overflow-hidden rounded-xl bg-gray-200">
                        <img className="h-full w-full object-cover border-solid border-[medium] rounded-xl" src={props.image}/>
                    </div>
                    <div className="pt-2">
                        <div className="text-md lg:text-lg font-normal w-11/12 mx-auto my-0">
                            <div className="text-lg lg:text-xl font-bold">{props.title}</div>
                            <div className="pb-2">{props.dates}</div>
                            <div className="pb-4">{props.description}</div>
                            <div className="font-semibold mb-4">{props.skills}</div>
                        </div>
                    </div>
                </div>
            
            </div>
        </>
    )

};

export default Tile;