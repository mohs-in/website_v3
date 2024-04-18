import gh from '/gh-2d.svg'
import lin from '/insvg.svg'

export default function Header() {
    return (
        <header>

            <div className='header--name'>

                <h1>Mohsin <br /> Khansab</h1>
            
            </div>

            <div className='header--desc'>

                <p>Full-stack Software Engineer. <br />Currently improving my proficiency in writing Clean, Efficient and Scalable code. <br />

                <span className='skills'>Tech Stack I'm interested in : <br /> React, Typescript, Next.js, Express, Node.js</span></p>
                
                <div className='social-links'>
                    <a href="https://github.com/mohs-in" target='_blank'><img src={gh} alt="" /></a>
                    <a href="https://www.linkedin.com/in/mohsinkhansab" target='_blank'><img src={lin} alt="" /></a>
                </div>
                
            </div>

        </header>
    )
}