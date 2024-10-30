import Header from './Header'
import Body from './Body'

export default function Hero() {
    return (
        <>
            <div className='flex items-center justify-center'>
                <div className='lg:max-w-4xl'>
                    <Header />
                    <Body />
                </div>
            </div>
        </>
    )
}