import React from "react";
import { IKImage } from "imagekitio-react";
import { SocialIcon } from "react-social-icons";
import "@fontsource/league-spartan";

const urlEndpoint = "https://ik.imagekit.io/JarinS1/";

function About(){
    return(
        <>
            <div name="home" className="snap-start min-h-fit h-screen w-full pt-[8%] bg-[#eff1ee]">
                <div className="flex flex-col md:flex-row mx-auto items-center justify-center w-11/12">
                    <div className="flex flex-col justify-center w-2/5 mx-8">
                        <IKImage urlEndpoint={urlEndpoint} path="/headshot.jpg" className="rounded-2xl m-auto"/>
                    </div>
                    <div className="flex flex-col my-4 md:my-0 justify-center mx-8">
                        <h2 className="font-header text-4xl">Hi, I'm Jarin</h2>
                        <p className="max-w-md">
                            I am a recent 2023 graduate of Santa Clara University with a B.S. in Computer Science 
                            & Engineering. I am skilled in languages such as C, C++, C#, JavaScript, and Python. 
                        </p><br/>
                        <p className="max-w-md">
                            Additionally, I have previous experience working with React, Node.js, and Boomi Integrations. 
                            Please feel free to contact me or connect with me on LinkedIn! Thank you for visiting 
                            my website!
                        </p>
                    </div>
                    <div className="flex flex-col justify-center w-1/3 mx-8 items-center">
                        <IKImage urlEndpoint={urlEndpoint} path="/scu.jpg" className="w-5/6 h-auto"/>
                        <div className="flex flex-row w-5/6 mx-auto mt-4">
                            <a href='https://www.linkedin.com/in/jarinsimon/' target='_blank' rel='noopener noreferrer' className="mx-auto">
                                <SocialIcon network='linkedin' style={{height:60, width:60}}/>
                            </a>
                            <a href='https://github.com/jarinsimon' target='_blank' rel='noopener noreferrer' className="mx-auto">
                                <SocialIcon network='github' style={{height:60, width:60}}/>
                            </a>
                            <a href='mailto:jarin.simon@gmail.com' className="mx-auto">
                                <SocialIcon network='mailto' style={{height:60, width:60}}/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;