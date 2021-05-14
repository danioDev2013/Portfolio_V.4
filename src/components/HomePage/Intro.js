import React from "react";
import Typewriter from "typewriter-effect";

function HomeIntro() {

    return (
        <div className="container-fluid py-2 minh500 intro-bg" id="background">
            <div className="container py-2">
                <section className="text-center">
                    <h1 className="intro-pad"> 
                        <div id="title">
                            <Typewriter
                                onInit={ (Typewriter) => {
                                    Typewriter
                                    .typeString("Hi, I'm Danielle!")
                                
                                    .pauseFor(1000)
                                    .typeString('<br>')
                                    .typeString(" A Full-Stack Web Developer.")
                                    .start();
                            }}
                            />
                        </div>
                    </h1>
                </section>
            </div>
        </div>
    );
}


export default HomeIntro;