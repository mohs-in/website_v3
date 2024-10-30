import Project from "./Project"
import projectData from './projects'
import blogData from './BlogList'
import Blog from './Blog'

export default function Body () {

    const projects = projectData.map(proj => {
        return(
            <Project 
                key={proj.id}
                {...proj}
            />
        )
    })

    const blogs = blogData.map(blog => {
        return (
            <Blog 
                key = {blog.id}
                {...blog}
            />
        )
    })

    return (
    <>
    <main>
        <h2 className={'scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0'} id="projects">Projects</h2>    
        <div className="grid md:grid-cols-3 gap-x-1 gap-y-1 w-full">
            {projects}
        </div>
        <h2 className={'scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0'} id="blogs">Blogs</h2>    
        <div className="grid md:grid-cols-3 gap-x-1 gap-y-1 w-full">
            {blogs}
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
