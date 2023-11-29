import React from "react";
import Tile from "./Tile";


import nutriAR from "../images/nutriAR.png"
import website from "../images/website.png"
import flight from "../images/flight.png"
import TripplarLogo from "../images/TripplarLogo.png"


function Projects(){
    return(
        <>
            <div name="projects" className="h-screen w-full pt-20 bg-[#eff1ee]">
                <p className="font-header text-5xl">Projects</p>
                    <div className="flex mt-6 mx-auto grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 xl:w-5/6">
                        <Tile 
                            title='Resume Website' 
                            dates='Oct 2023-Present' 
                            description='Designed and programmed personal portfolio website'
                            skills='JavaScript, React, Tailwind CSS'
                            image={website}
                            >
                        </Tile>
                        <Tile 
                            title='NutriAR' 
                            dates='September 2022 - June 2023' 
                            description='Developed Android app to increase user awareness of eating habits. 
                            through nutrient info visualization with 3 other SCU students for Senior capstone project.'
                            skills='C#, Unity, Augmented Reality'
                            image={nutriAR}>
                        </Tile>
                        <Tile 
                            title='Flight Tracker' 
                            dates='November 2021 - March 2022' 
                            description='Built a web app using Amadeus Travel APIs to display available flights based 
                            on user preferences.'
                            skills='Bootstrap framework, JavaScript, Node.js'
                            image={flight}>
                        </Tile>
                        <Tile 
                            title='Tripplar' 
                            dates='December 2020 - June 2021' 
                            description='Created iOS app to connect students and
                            nearby small businesses in Santa Clara with team of SCU students.'
                            skills='Figma, Flutter'
                            image={TripplarLogo}>
                        </Tile>
                    </div>
                </div>
        </>
    );
}

export default Projects;