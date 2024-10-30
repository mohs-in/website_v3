
export default function Blog(blog) {
    return(
        <article className='p-4 border-2 border-grey rounded-1.25 flex flex-row md:flex-col flex-grow basis-[55rem] m-3 
                            shadow-2xl shadow-inner inset-shadow
                            transition ease-in delay-150 duration-300 hover:-translate-y-1 hover:scale-110'
        >
            <div>
                <h2 className="mt-0 text-lg leading-relaxed font-medium text-light-secondary word-wrap-break"> {blog.title} </h2>
                <p className="text-sm leading-tight mt-4 text-light-secondary word-wrap-break"> {blog.description} </p>
            </div>
            <div className="flex flex-col md:flex-row pt-3 gap-3 items-center justify-center ml-auto md:m-0">
                {blog.link && (
                <a 
                    className='cursor-pointer text-light-secondary text-sm leading-tight py-1 px-7 md:py-3
                    transition ease-in-out delay-150 duration-300 hover:-translate-y-2 hover:bg-light-secondary hover:text-dark-primary hover:scale-70
                    md:px-4 bg-bgGrey border rounded-lg border-grey flex justify-center items-center w-7/12' 
                    href={blog.link} target="_blank"
                >
                    Link
                </a>
                )}
            </div>
        </article>
    )
}