import React from "react";
import Job from "./Job";

import freelance from "../images/freelancer.jpeg"
import ttd from "../images/TTD.svg"
import servco from "../images/servco.png"
import dhmp from "../images/dhmp.jpeg"
import iolani from "../images/iolani.png"

function Work(){
    return(
        <>
            <div name="work" className="min-h-screen h-fit w-full snap-start pb-[4%]">
                <p className="font-header text-5xl pt-[4%] xl:pt-[6%]">Work Experience</p>
                <div className="w-11/12 mx-auto flex flex-col justify-center">
                    <Job
                        alt='The Trade Desk Logo'
                        dates='June 2023-Present'
                        description={(<>
                            <b>Glocol Networks</b> Test Engineer Intern - Perform testing on CCJPA and AceRail trains using Shell Script/Raspberry Pi<br/>
                            <b>Remotasks</b> AI Coding Trainer - Evaluate LLM responses generated from coding prompts<br/>
                            <b>Workifi Inc.</b> Intern - Perform business outreach and client lead generation<br/>
                            <b>Knodemy</b> Coding Instructor - Lead weekly classes teaching middle school students HTML/CSS
                        </>)}
                        image={freelance}
                        location='Santa Clara, California'
                        title='Freelancer'
                        
                    ></Job>
                    <Job
                        alt='The Trade Desk Logo'
                        company='The Trade Desk'
                        dates='June 2022-September 2022'
                        description={(<>
                            - Automated the collection and storage of 115,000+ Process Reporting Logs using Boomi integrations<br/>
                            - Utilized Tableau to prepare and create data visualizations from these logs<br/>
                            - Obtained Boomi Professional Developer & Boomi Associate Developer Certifications
                        </>)}
                        image={ttd}
                        location='Ventura, California'
                        title='Business Engineering Intern'
                        link='https://www.thetradedesk.com/us'
                    ></Job>
                    <Job
                        alt='Servco Logo'
                        company='Servco Pacific Inc.'
                        dates='June 2021-August 2021'
                        description={(<>
                            - Used Salesforce Commerce Cloud with HTML and CSS to upkeep Servco Lexus and Servco Toyota e-commerce sites<br/>
                            - Integrated Roadster Pricing API to access and display vehicle data<br/>
                            - Earned 4th/10 in company hackathon for app design incentivizing use of Hawaii public transit
                        </>)}
                        image={servco}
                        location='Honolulu, Hawaii'
                        title='Software Development Intern'
                        link='https://www.servco.com/'
                    ></Job>
                    <Job
                        alt='DHMP Logo'
                        company='Diamond Head Memorial Park'
                        dates='June 2020-August 2020'
                        description={(<>
                            - Performed daily maintenance and groundskeeping duties<br/>
                            - Helped digitize 5,000+ park records from 2000-2020 using Excel<br/>
                        </>)}
                        image={dhmp}
                        location='Honolulu, Hawaii'
                        title='Summer Assistant'
                        link='https://dhmp.com/'
                    ></Job>
                    <Job
                        alt='Iolani Logo'
                        company='Iolani School'
                        dates='June 2019-August 2019'
                        description={(<>
                            - Supported two primary classroom teachers and 30 students in summer school curriculum<br/>
                        </>)}
                        image={iolani}
                        location='Honolulu, Hawaii'
                        title='Teaching Assistant'
                        link='https://www.iolani.org/'
                    ></Job>
                </div>
            </div>
        </>
    );
}

export default Work;