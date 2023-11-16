import React from "react";
import { Link } from "react-scroll";

function Header(){
    return(
        <>
            <nav>
                <div className="fixed top-0 left-0 z-50 flex flex-row justify-between items-center w-full h-20 bg-[#282a28] text-white">
                    <div className="ml-24">
                        <p className="font-semibold text-3xl">Jarin Simon</p>
                    </div>
                    <div className="inline-flex relative font-medium text-xl mr-24 h-full">
                        <Link className="flex items-center px-4 h-full hover:bg-[#b7b9b6] hover:text-black" activeClass="active" to="home">Home</Link>
                        <Link className="flex items-center px-4 h-full hover:bg-[#b7b9b6] hover:text-black" activeClass="active" to="work">Work</Link>
                        <Link className="flex items-center px-4 h-full hover:bg-[#b7b9b6] hover:text-black" activeClass="active" to="projects">Projects</Link>
                        <Link className="flex items-center px-4 h-full hover:bg-[#b7b9b6] hover:text-black" activeClass="active" to="extra">More About Me</Link>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;