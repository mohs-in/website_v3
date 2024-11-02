import Project from "./Project"
import projectData from './projects'
import blogData from './BlogList'
import Blog from './Blog'
import { useEffect, useState } from 'react'

export default function Body () {

    const [ renderCount, setRenderCount ] = useState( 3 );

    const projects = projectData.map( proj => {
        return (
            <Project 
                key = { proj.id }
                { ...proj }
            />
        )
    })

    const [ renderProjects, setRenderProjects ] = useState( [ projects[0], projects[1], projects[2] ] );

    useEffect( () => {

        setRenderProjects( () => {
            let newResult = [];
            for ( let i = 0; i < renderCount; i++) {
                newResult.push(projects[i]);
            }
            return newResult;
        })

    }, [ renderCount ])

    const blogs = blogData.map( blog => {
        return (
            <Blog 
                key = {blog.id}
                {...blog}
            />
        )
    })

    function handleRenderCount() {
        setRenderCount( prev => prev + 3 );
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
            { ( projects.length != renderCount ) && 
                <p className = " px-3 py-2 font-semibold border-2 border-grey cursor-pointer rounded-lg " 
                    onClick = { handleRenderCount }
                > Show more... </p>}
        </div>

        <h2 className = { "scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0" } 
            id = "blogs"
        > Blogs </h2>    
        
        <div className = " grid md:grid-cols-3 gap-x-1 gap-y-1 w-full ">
            { blogs }
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
