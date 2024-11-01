import Header from './Header'
import Body from './Body'
import Time from './Time'

export default function Hero() {

    return (
        <>
            <div className='flex items-center justify-center'>
                <div className='lg:max-w-4xl'>  
                    <Time />            
                    <Header />
                    <Body />
                </div>
            </div>
        </>
    )
}

