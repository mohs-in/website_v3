import gh from '/gh-2d.svg'
import lin from '/insvg.svg'

export default function Header() {
    return (
        <>
            <header className='pt-24 pb-32'>

                <h1 className='font-myFontOne font-normal text-6xl md:text-8xl mb-6 tracking-tight animate-bounce-2 relative'>Mohsin <br /> Khansab</h1>

                <div className='leading-relaxed text-lg flex justify-between w-full '>

                    <p className='max-w-24em'>Full-stack Software Engineer. <br />Currently improving my proficiency in writing Clean, Efficient and Scalable code. <br />

                        <span className='mt-4 inline-block'>Tech Stack I&apos;m interested in : <br /> React, Typescript, Next.js, Express, Node.js</span></p>

                    <div className='flex flex-row md:flex-col absolute top-20 right-5 md:relative'>
                        <a  className='p-2 md:p-4 md:border border-1 border-grey cursor-alias' href="https://github.com/mohs-in" target='_blank' id='gh'><img src={gh} alt="" /></a>
                        <a className='p-2 md:p-4 md:border border-1 border-grey cursor-pointer' href="https://www.linkedin.com/in/mohsinkhansab" target='_blank' id='in'><img src={lin} alt="" /></a>
                    </div>

                </div>

            </header>
        </>
    )
}