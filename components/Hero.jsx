import Project from "./Project"
import projectData from './projects'

export default function Hero () {

    const projects = projectData.map(proj => {
        return(
            <Project 
                key={proj.id}
                {...proj}
            />
        )
    })
    return (
    <>
    <main>
        <h2>Projects</h2>    
        <div className="projects-div">
            {projects}
        </div>
        <p className="prev-websites">
            <a href="http://v1.mohs.ink/">website V1</a> 
            <a href="http://v2.mohs.ink/">website V2</a>
        </p>
    </main>
    </>
    )
}
