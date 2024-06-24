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
        <h2 className={'scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0'}>Projects</h2>    
        <div className="grid md:grid-cols-3 gap-x-1 gap-y-1 w-full">
            {projects}
        </div>
        <div className="flex">
            <p className="ml-auto">
                <a className='text-light-secondary p-4 underline' href="https://v1-ms.vercel.app/">website V1</a> 
                <a className="text-light-secondary p-4 underline" href="https://v2-ms.vercel.app/">website V2</a>
            </p>
        </div>
        
    </main>
    </>
    )
}
