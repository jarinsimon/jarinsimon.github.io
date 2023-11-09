import React from "react";

function Job(props){
    return(
        <>
        <div name="job" className="flex min-h-fit">
                <div name="job-logo">
                    <img className="max-w-125 max-h-130" src={props.image} alt={props.alt}/>
                </div>
                <div className='job-info'>
                    <div className='job-info-text'>
                        <div className='work-title'>{props.title}</div>
                        <div className='company'>{props.company}</div>
                        <div className='work-dates'>{props.dates}</div>
                        <div className='work-location'>{props.location}</div>
                    </div>
                </div>
                <div className='work-description'>
                    <p>
                        {props.description}
                    </p>
                </div>
            </div>
        </>
    );
}

export default Job;