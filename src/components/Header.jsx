import gh from '/gh-2d.svg'
import lin from '/insvg.svg'
import { HashLink as Link} from 'react-router-hash-link'

export default function Header() {
    return (
        <>
            {/* <div className='block border-t mt-4 w-[50%] ml-[25%]'></div> */}
            <nav className='flex align-center justify-center my-2 md:mt-6 '>
                <Link smooth to='#projects' className='mx-3 border rounded-full px-4 py-2' > Projects </Link>
                <Link smooth to='#blogs' className='mx-3 border rounded-full px-4 py-2' > Blogs </Link>
                {/* <Link smooth to='#thoughts' className='mx-3'> Thoughts </Link> */}

            </nav>
            <header className='pt-16 pb-16 md:pt-32 md:pb-32'>
                <div className='flex items-start justify-between'>
                    <h1 className='font-myFontOne font-normal text-6xl md:text-8xl mb-6 tracking-tight animate-bounce-2 relative'>Mohsin <br /> Khansab</h1>
                    <div className='flex flex-col ml-0 md:ml-10 items-start'>
                        <a  className='p-2 md:p-4 md:border border border-grey cursor-pointer' href="https://github.com/mohs-in" target='_blank' id='gh'><img src={gh} alt="" /></a>
                        <a className='p-2 md:p-4 md:border border border-grey cursor-pointer' href="https://www.linkedin.com/in/mohsinkhansab" target='_blank' id='in'><img src={lin} alt="" /></a>
                    </div>
                </div>
                
                <div className='leading-relaxed text-lg flex justify-between w-full '>

                    <p className='max-w-24em'>Full-stack Software Engineer. <br />Currently improving my proficiency in writing Clean, Efficient and Scalable code. <br />

                        <span className='mt-4 inline-block'>Tech Stack I&apos;m interested in : <br /> React, Typescript, Next.js, Express, Node.js</span></p>

                    {/* <div className='flex flex-row md:flex-col absolute top-10 right-5 md:relative'> */}
                    

                </div>

            </header>
        </>
    )
}