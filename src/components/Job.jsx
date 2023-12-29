import React from "react";

function Job(props){
    return(
        <>
        <div name="job" className="flex flex-col min-h-fit w-3/4 mx-auto my-4 md:flex-row">
                <div name="job-logo" className="w-1/5">
                    <a href={props.link} target="_blank" rel="noreferrer"><img className="max-w-[125px] max-h-[130px] w-3/5 rounded-xl" src={props.image} alt={props.alt}/></a>
                </div>
                <div className='w-[30%]'>
                    <div className='text-left'>
                        <div className='mx-0 font-bold text-xl'>{props.title}</div>
                        <div className='mx-0 font-semibold text-lg'>{props.company}</div>
                        <div className='mx-0 work-dates'>{props.dates}</div>
                        <div className='mx-0 work-location'>{props.location}</div>
                    </div>
                </div>
                <div className='text-left w-1/2'>
                    <p>
                        {props.description}
                    </p>
                </div>
            </div>
        </>
    );
}

export default Job;