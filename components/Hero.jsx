import Project from "./Project"
import projectData from './projects'

export default function Hero () {
    const projects = projectData.map(proj => {
        return(
            <Project 
                id={proj.id}
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
        
    </main>
    </>
    )
}
