import gh from '/gh-2d.svg'

export default function Project(project) {
    return(
        <article>
            <div>
                <div className="arc--date">
                    <span>
                        {project.date }
                    </span>
                </div>
                <h2 className="arc--h2"> {project.title} </h2>
                <p className="arc--p"> {project.description} </p>
            </div>
            <div className="arc--links">
                {project.github && (
                <a href={project.github} target="_blank">
                    <img src={gh} alt="" />
                </a>
                )}
                {project.demo && (
                <a href={project.demo} target="_blank">
                    Live
                </a>
                )}
            </div>
        </article>
    )
}