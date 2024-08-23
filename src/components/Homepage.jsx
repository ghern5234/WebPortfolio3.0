import image from '../assets/georgeLogo.png'
import imageIcon from '../assets/IconOnly.png'

const Homepage = () => {
    return (

        <>
        <div className='flex items-center'>
          
          <img src={imageIcon} className='z-[-1] mt-64 h-1/2 w-1/2 flex justify-start '></img>

          <p className='text-7xl alegreya transition-all duration-300 hover:scale-110'>George Hernandez</p>
        
        </div>

        </>
    )
}

export default Homepage