import React from "react";
import { Document } from "react-pdf";

function NavBar() {
    

    return (
        <nav className="navbar navbar-expand-md navbar-light nav-cust">
            <div className="container-fluid d-flex px-5 py-2 bd-highlight justify-content-center">
                <button className="navbar-toggler p-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav align-items-center">
                        <li className="nav-item px-4 nav-text">
                            <a className="nav-link" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item px-4 nav-text">
                            <a className="nav-link" href="/Work">Portfolio</a>
                        </li>
                        <li className="nav-item px-4 nav-text">
                            <a className="nav-link" href="/about">About / Contact</a>
                        </li>
                        <li className="nav-item px-4 nav-text">
                        <a className="nav-link" href='/resume.pdf' download>Resume</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}


export default NavBar;