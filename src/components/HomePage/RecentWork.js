import React, { useEffect } from "react";
import { useAtom } from "jotai"
import portfolio from "../../utils/portfolio.json";
import WorkCard from "../Work-Cards/";
import { Projects } from "../../utils/Atoms"

function RecentWork(props) {

    const [work, setWork] = useAtom(Projects)

    useEffect(() => {
        getWork();
    }, [])

    function getWork() {
        let currentPage = window.location.pathname;

        if (currentPage === "/" || "home") {
            setWork(portfolio.reverse().slice(0, 3));
        }
        if (currentPage === "/work") {
            setWork(portfolio);
        }

    };

    return (
        <div className="container-fluid top-m-150">
            <h2 className="text-center">{props.title}</h2>
            <div className="container mContentAdjust">
                <div className="row row-adj justify-content-center">
                    {work.map(project => (
                        <div key={project.id}
                            className="col-md-4 col-adj">
                            <WorkCard
                                id={project.id}
                                name={project.name}
                                description={project.description}
                                image={project.image}
                                liveURL={project.live}
                                github={project.gitHub}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}


export default RecentWork;