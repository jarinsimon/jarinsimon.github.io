import React from "react";
import Job from "./Job";
import ttd from "../images/TTD.svg"
import servco from "../images/servco.png"
import dhmp from "../images/dhmp.jpeg"
import iolani from "../images/iolani.png"

function Work(){
    return(
        <>
            <div name="work" className="h-screen w-full pt-20">
                <p className="font-header text-4xl">Work Experience</p>
                <div className="flex flex-col justify-center">
                    <Job
                        alt='The Trade Desk Logo'
                        company='The Trade Desk'
                        dates='June 2022-September 2022'
                        description='I worked with the Dell Boomi AtomSphere platform to build and deploy integrations through iPaaS software. 
                        I developed a project automating the collection and storage of 115,000+ Process Reporting Logs and 
                        used Tableau to prepare and create data visualizations from these data logs. 
                        Over the summer, I also obtained Boomi Associate Developer and Boomi Professional Developer Certifications.'
                        image={ttd}
                        location='Ventura, California'
                        title='Business Engineering Intern'
                    ></Job>
                    <Job
                        alt='Servco Logo'
                        company='Servco Pacific Inc.'
                        dates='June 2021-August 2021'
                        description="I used the Salesforce Commerce Cloud Business Manager with HTML and CSS to upkeep the Servco Lexus and Servco Toyota sites. 
                        I integrated the Roadster Pricing API to access and display vehicle data. Finally, a team of
                        3 other interns and I earned 4th place out of 10 teams in a company hackathon where we 
                        brainstormed and designed an app to incentivize users to use Hawaii's public transportation systems."
                        image={servco}
                        location='Honolulu, Hawaii'
                        title='Software Development Intern'
                    ></Job>
                    <Job
                        alt='DHMP Logo'
                        company='Diamond Head Memorial Park'
                        dates='June 2020-August 2020'
                        description='I performed daily maintenance and groundskeeping duties at Diamond Head Memorial Park to upkeep cleanliness standards.
                        I also spearheaded the process of digitizing 1000s of park records from 2000-2020 and developed
                        a database of records using Microsoft Excel.'
                        image={dhmp}
                        location='Honolulu, Hawaii'
                        title='Summer Assistant'
                    ></Job>
                    <Job
                        alt='Iolani Logo'
                        company='Iolani School'
                        dates='June 2019-August 2019'
                        description='After graduating high school, I returned to Iolani School to work as a Teaching Assistant for the 
                        summer school term. I supported two primary classroom teachers and 30 students in the summer 
                        learning curriculum. I also handled additional safety and supervisory duties during recess
                        and before/after school hours.'
                        image={iolani}
                        location='Honolulu, Hawaii'
                        title='Teaching Assistant'
                    ></Job>
                </div>
            </div>
        </>
    );
}

export default Work;