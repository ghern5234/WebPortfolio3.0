import image from '../assets/georgeLogo.png'
import imageIcon from '../assets/IconOnly.png'

const Homepage = () => {
    return (

        <>
        <div className='flex items-center relative flex-col'>
          
          <img src={imageIcon} className='z-[-1] h-1/2 w-1/2 object-scale-down'></img>
          <p className='text-9xl alegreya transition-all duration-300 hover:scale-110 text-center relative right-0'>George Hernandez</p>
          <p className='text-5xl alegreya transition-all duration-300 hover:scale-110 text-center relative right-0'>Full Stack Web Developer</p>
        
        </div>


{/* 
<section className='flex items-center w-full'>
                <div className=''>
                <img src={imageIcon} className='z-[-1] h-1/2 w-1/2'></img>
                </div>
                <div className='bg-white rounded-xl p-9 px-9 m-6'>
                 
                
                </div>
            </section> */}

        </>
    )
}

export default Homepage