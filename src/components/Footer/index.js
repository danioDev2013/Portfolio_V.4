import React from 'react';

function Footer() {


    return (
        <footer>
            <section className="pt-3 container-fluid copyright text-center">
                <p id="connectMe">Connect With Me</p>
                <a href="mailto:danio.2013@outlook.com" title="email" rel="me" class="contact-text" target="_blank">
                    danio.2013@outlook.com
                </a>
            </section>
            <section className="container-fluid py-2 justify-content-center contacts-data text-center">
                <ul className="social-icons">
                    <li>
                        <a className="github" href="https://github.com/dorley1993" target="_blank">
                            <i className="icons fab fa-github-square fa-2x"></i>
                        </a>
                    </li>
                    <li>
                        <a className="linkedin" href="https://www.linkedin.com/in/danielle-orley/" target="_blank">
                            <i className="icons fab fa-linkedin fa-2x"></i>
                        </a>
                    </li> 
                    <li>
                        <a className="instagram" href="https://www.instagram.com/rainbowdevmonster/ " target="_blank">
                            <i className="icons fab fa-instagram fa-2x"></i>
                        </a>
                    </li>
                    <li>
                        <a href="/about" class="mail" id="mailI">
                            <i className="icons fas fa-envelope-square fa-2x"></i>
                        </a>
                    </li>
                </ul>
            </section>
            <section className="pb-2 container-fluid copyright">
                <p>Copyright &copy; .
            </p>
            </section>
        </footer>
    );
}


export default Footer;