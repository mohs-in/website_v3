import Project from "./Project"
import projectData from './projects'
import blogData from './BlogList'
import Blog from './Blog'
import { useEffect, useState } from 'react'

export default function Body () {

    const [ projectsRenderCount, setProjectsRenderCount ] = useState(3);
    const [ blogsRendercount, setBlogsRenderCount ] = useState(3);

    const projects = projectData.map( proj => {
        return (
            <Project 
                key = { proj.id }
                { ...proj }
            />
        )
    })

    const blogs = blogData.map( blog => {
        return (
            <Blog 
                key = {blog.id}
                {...blog}
            />
        )
    })

    const [ renderProjects, setRenderProjects ] = useState( [ projects[0], projects[1], projects[2] ] );
    const [ renderBlogs, setRenderBlogs ] = useState([blogs[0], blogs[1], blogs[2]]);

    useEffect( () => {

        setRenderProjects( () => {
            let newResult = [];
            for ( let i = 0; i < projectsRenderCount; i++) {
                newResult.push(projects[i]);
            }
            return newResult;
        })

        setRenderBlogs( () => {
            let newResult = [];
            for ( let i = 0; i < blogsRendercount; i++) {
                newResult.push(blogs[i]);
            }
            return newResult;
        })

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ projectsRenderCount, blogsRendercount ])

    function handleProjectsRenderCount() {
        setProjectsRenderCount( prev => prev + 3 );
    }

    function handleBlogssRenderCount() {
        setBlogsRenderCount( prev => prev + 3 );
    }

    return (
    <main>
        <h2 
            className = { " scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0 " } 
            id = "projects"
        > Projects </h2>

        <div className = " grid md:grid-cols-3 gap-x-1 gap-y-1 w-full ">
            { renderProjects }
        </div>
        
        <div className = " flex justify-center items-center block ">
            { ( projects.length > projectsRenderCount ) && 
                <p className = " px-3 py-2 font-semibold border-2 border-grey cursor-pointer rounded-lg " 
                    onClick = { handleProjectsRenderCount }
                > Show more... </p>}
        </div>

        <h2 className = { "scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0" } 
            id = "blogs"
        > Blogs </h2>    
        
        <div className = " grid md:grid-cols-3 gap-x-1 gap-y-1 w-full ">
            { renderBlogs }
        </div>

        <div className = " flex justify-center items-center block ">
            { ( blogs.length >= blogsRendercount ) && 
                <p className = " px-3 py-2 font-semibold border-2 border-grey cursor-pointer rounded-lg " 
                    onClick = { handleBlogssRenderCount }
                > Show more... </p>}
        </div>

        <div className = " flex ">
            <p className = " ml-auto ">
                <a className = " text-light-secondary p-4 underline" 
                    href = " https://v1-ms.vercel.app/ "
                > website V1 </a> 
                <a className = " text-light-secondary p-4 underline" 
                    href = " https://v2-ms.vercel.app/ "
                > website V2 </a>
            </p>
        </div>
        
    </main>
    )
}
