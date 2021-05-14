import React from "react";

function WorkCard(props) {

    return (
        <div>
            <section className="card c-updates my-3">
                <img src={props.image} className="card-img-top card-img-top-adjust mb-2"
                    alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <p className="card-text">{props.description} </p>
                    <a href={props.liveURL}
                        className="btn btn btn-custom rounded-pill viewProject px-4" target="blank">View
                Live</a> <a href={props.github}
                        className="btn btn btn-custom rounded-pill viewProject px-4 mx-2" target="blank">View
                        on
                Github</a>
                </div>
            </section>
        </div>
    );
}


export default WorkCard;