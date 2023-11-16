import React from "react";

function Job(props){
    return(
        <>
        <div name="job" className="flex min-h-fit w-3/4 mx-auto my-4">
                <div name="job-logo" className="w-1/5">
                    <img className="max-w-[125px] max-h-[130px] w-3/5 rounded-xl" src={props.image} alt={props.alt}/>
                </div>
                <div className='w-[30%]'>
                    <div className='text-left'>
                        <div className='mx-0 font-bold text-xl'>{props.title}</div>
                        <div className='mx-0 font-semibold text-lg'>{props.company}</div>
                        <div className='mx-0 work-dates'>{props.dates}</div>
                        <div className='mx-0 work-location'>{props.location}</div>
                    </div>
                </div>
                <div className='text-left w-6/12'>
                    <p>
                        {props.description}
                    </p>
                </div>
            </div>
        </>
    );
}

export default Job;