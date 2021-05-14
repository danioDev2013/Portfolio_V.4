import React from "react";

function About(props) {
    

    return (
        <div className="container-fluid top-m-150">
            <div className="container">
                <div className="card c-updates">
                    <div className="card-body">
                        <div className="row p-5">
                        <h2 className="text-center">About</h2>
                        <h2 className="abtMe text-center" id="aboutTitle2">let me introduce myself...</h2>
                            <div className="col-md-5" id="imgMe"><img src="../images/me.png" className="img-fluid" alt="Danielle Orley" id="me" /><br />
                            </div>
                            <div className="col-md-7">
                                <p className="my-5"> Hi, my name is Danielle Orley. I’m a detail oriented Full-Stack Web Developer, 
                        who recently earned a certificate in web development from the University of Washington. I want to keep learning and push myself 
                        to be a better developer. I take pride in my work and the websites I’ve worked on.  Working in the military, 
                        retail, and quality control, has taught me to stay calm, react quickly, and take initiative. I’m a hard worker and strive for excellence. 
                        <br /><br />
                        My focus is mobile-first responsiveness with HTML, CSS, and JavaScript. 
                        Then I focus on the functionality of the website with Node.js, Express, MySql, and MongoDB. 
                        I’m always learning and experimenting with different languages and tools, and I never get bored. 
                        On my home page you can see some of my completed websites. If you want to get ahold fill out the form below or 
                        email me. </p>

                        <a download href="/" className="res"> Resume </a>

                            </div>
                        </div>
                        <div className="container my-5 form-max-width">
                            <h4 className="text-center">Drop me a line:</h4>
                            <form className="form-horizontal">
                                <div className="mb-3">
                                    <label for="name" className="form-label">Name:</label>
                                    <input type="text" className="form-control" id="name" placeholder="Enter First and Last Name..." />
                                </div>
                                <div className="mb-3">
                                    <label for="email" className="form-label">Email address:</label>
                                    <input type="email" className="form-control" id="email" placeholder="name@example.com" />
                                </div>
                                <div className="mb-3">
                                    <label for="message" className="form-label">Message:</label>
                                    <textarea className="form-control" id="message" placeholder="Enter your email..."
                                        rows="3"></textarea>
                                </div>
                                <div className="mb-3">
                                    <button type="submit"
                                        className="btn btn-primary mb-3 rounded-pill viewProject my-2 px-4">Send
                                        Message</button>
                                </div>
                            </form>
                            <div className="direct-contact-container">
                                <ul className="contact-list">
                                <li className="list-item"><i className="fa fa-map-marker fa-2x"><span className="contact-text place">Marysville, WA</span></i></li>
                                <li className="list-item"><i className="fa fa-envelope fa-2x"><span className="contact-text gmail"><a href="mailto:#" title="Send me an email">danio.2013@outlook.com</a></span></i></li>
                                </ul>
                                <hr></hr>
                                <ul className="social-media-list">
                                <li className="contact-icon"><a href="https://github.com/dorley1993" target="_blank"><i className="icons fab fa-github-square fa-2x"></i></a></li>
                                <li><a className="contact-icon" href="https://www.linkedin.com/in/danielle-orley/" target="_blank"><i className="icons fab fa-linkedin fa-2x"></i></a></li> 
                                <li><a className="contact-icon" href="https://www.instagram.com/rainbowdevmonster/ " target="_blank"><i className="icons fab fa-instagram fa-2x"></i></a></li>
                                <li><a className="contact-icon" href="/" target="_blank"><i className="icons fas fa-home fa-2x"></i></a></li>
                                </ul>
                                <hr></hr>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default About;