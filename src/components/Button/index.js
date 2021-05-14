import React from "react";

function Button(props) {

    return (
        <section className="container d-flex justify-content-center my-5">
        <a href={props.link}><button className="btn btn-primary btn-lg rounded-pill px-5 viewMore">{props.btnText}</button></a>
    </section>
    );
}


export default Button;