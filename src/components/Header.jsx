import React from "react";
import { Link } from "react-scroll";

function Header(){
    return(
        <>
            <nav>
                <div className="fixed top-0 left-0 z-50 flex flex-row justify-between items-center w-full h-20 bg-black text-white mb-10">
                    <div className="pt-15">
                        <h1>Jarin Simon</h1>
                    </div>
                    <div className="mr-80 relative">
                        <Link activeClass="active" to="Home">Home</Link>
                        <Link activeClass="active" to="work">Work</Link>
                        <Link activeClass="active" to="projects">Projects</Link>
                        <Link activeClass="active" to="extra">More About Me</Link>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Header;