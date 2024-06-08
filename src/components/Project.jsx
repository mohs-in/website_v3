import gh from '/gh-2d.svg'

export default function Project(project) {
    return(
        <article className='p-4 border-2 border-grey rounded-1.25 flex flex-row md:flex-col flex-grow basis-[55rem] m-3 
                            shadow-2xl shadow-inner inset-shadow
                            transition ease-in delay-150 duration-300 hover:-translate-y-1 hover:scale-110'
        >
            <div>
                <div className="flex items-center justify-between">
                    <span className='text-xs leading-none'>
                        {project.date }
                    </span>
                </div>
                <h2 className="mt-0 text-lg leading-relaxed font-medium text-light-secondary word-wrap-break"> {project.title} </h2>
                <p className="text-sm leading-tight mt-4 text-light-secondary word-wrap-break"> {project.description} </p>
            </div>
            <div className="flex flex-col md:flex-row pt-3 gap-3 items-center justify-center ml-auto md:m-0">
                {project.github && (
                <a 
                    className='cursor-alias text-light-secondary text-sm leading-tight md:py-3 
                    transition ease-in-out delay-150 duration-300 hover:-translate-y-2 hover:scale-70
                    md:px-4 bg-bgGrey md:border rounded-full border-grey flex justify-center items-center w-3/12' 
                    href={project.github} target="_blank"
                >
                    <img className='w-72px md:w-22px h-22px svg-light' src={gh} alt="" />
                </a>
                )}
                {project.demo && (
                <a 
                    className='cursor-pointer text-light-secondary text-sm leading-tight py-1 px-7 md:py-3
                    transition ease-in-out delay-150 duration-300 hover:-translate-y-2 hover:bg-light-secondary hover:text-dark-primary hover:scale-70
                    md:px-4 bg-bgGrey border rounded-lg border-grey flex justify-center items-center w-7/12' 
                    href={project.demo} target="_blank"
                >
                    Live
                </a>
                )}
            </div>
        </article>
    )
}