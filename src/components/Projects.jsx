import React from "react";
import Tile from "./Tile";

import nutriAR from "../images/nutriAR.png"
import website from "../images/website.png"
import flight from "../images/flight.png"
import TripplarLogo from "../images/TripplarLogo.png"

function Projects(){
    return(
        <>
            <div name="projects" className="snap-start snap-y w-full bg-[#eff1ee] pb-[4%]">
                <p className="font-header text-5xl pt-[4%] xl:pt-[6%]">Projects</p>
                <div className="mt-[2%] mx-auto grid grid-cols-2 gap-x-12 gap-y-10 w-5/6 xl:grid-cols-3 xl:w-3/4">
                    <Tile 
                        title='Resume Website' 
                        dates='Oct 2023-Present' 
                        description='- Designed and programmed personal portfolio website'
                        skills='JavaScript, React, Tailwind CSS'
                        image={website}
                        >
                    </Tile>
                    <Tile 
                        title='NutriAR' 
                        dates='Sept 2022 - Jun 2023' 
                        description={(<>
                            - Developed Android app to increase eating habit awareness.<br/>
                            - Worked with 3 other SCU students for Senior capstone project.
                        </>)}
                        skills='C#, Unity'
                        image={nutriAR}>
                    </Tile>
                    <Tile 
                        title='Flight Tracker' 
                        dates='Nov 2021 - Mar 2022' 
                        description='- Built web app using Amadeus Travel APIs to display available flights based 
                        on user preferences.'
                        skills='Bootstrap, JavaScript, Node.js'
                        image={flight}>
                    </Tile>
                    <Tile 
                        title='Tripplar' 
                        dates='Dec 2020 - Jun 2021' 
                        description='- Created iOS app to connect students and
                        Santa Clara small businesses with team of SCU students.'
                        skills='Figma, Flutter'
                        image={TripplarLogo}>
                    </Tile>
                </div>
            </div>
        </>
    );
}

export default Projects;