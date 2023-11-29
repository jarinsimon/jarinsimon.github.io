import React from "react";
import { IKImage } from "imagekitio-react";
import "@fontsource/league-spartan";

const urlEndpoint = "https://ik.imagekit.io/JarinS1/";

function About(){
    return(
        <>
            <div name="home" className="snap-start h-screen w-full pt-20 bg-[#eff1ee]">
                <div className="flex flex-row mx-auto mt-20 items-center justify-center w-11/12 max-h-fit">
                    <div className="flex flex-col justify-center h-[512px] w-[512px] mx-8">
                        <IKImage urlEndpoint={urlEndpoint} path="/headshot.jpg" className="rounded-2xl items-center justify-center"/>
                    </div>
                    <div className="flex flex-col justify-center mx-8">
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
                    <div className="flex flex-col justify-center h-72 w-72 mx-8 items-center">
                        <IKImage urlEndpoint={urlEndpoint} path="/scu.jpg" className=""/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;