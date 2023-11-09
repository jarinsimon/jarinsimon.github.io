import React from "react";
import { IKImage } from "imagekitio-react";

const urlEndpoint = "https://ik.imagekit.io/JarinS1/";

function About(){
    return(
        <>
            <div name="about" className="h-screen w-full">
                <div className="flex flex-row mx-auto items-center justify-center w-11/12">
                    <div className="w-2/5">
                        <IKImage urlEndpoint={urlEndpoint} path="/headshot.jpg" className="rounded-2xl"/>
                    </div>
                    <div className="flex flex-col justify-center ml-16 md:ml-0 md:px-8">
                        <h2>Hi, I'm Jarin</h2>
                        <p className="max-w-md">
                            I am a recent 2023 graduate of Santa Clara University with a B.S. in Computer Science 
                            & Engineering. I am skilled in languages such as C, C++, C#, JavaScript, and Python. 
                            Additionally, I have previous experience working with React, Node.js, and Boomi Integrations. 
                            Please feel free to contact me or connect with me on LinkedIn! Thank you for visiting 
                            my website!
                        </p>
                    </div>
                    <div className="w-1/3">
                        <IKImage urlEndpoint={urlEndpoint} path="/scu.jpg" className="max-w-400"/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;