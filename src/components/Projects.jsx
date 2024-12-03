import { Link } from "react-router-dom";
import sliceOverflowImage from "../assets/sliceOverflow.png";
import expressImage from "../assets/Express-Note-Taker.png";
import taskBoardImage from "../assets/Task-Board.png";
import weatherDashboardImage from "../assets/WeatherDashboard.png";



const Projects = () => {
  return (
    <>
      <div className="m-11">



  {/* <div className="bg-white rounded-lg m-8 p-8 flex flex-col items-center">
    <img src={sliceOverflowImage} width={700} height={250} className="border-8 rounded-lg m-8"></img>
    <Link
          to="https://sliceoverflow-1.onrender.com/"
          className=" flex justify-center text-2xl underline w-60 m-5 p-4 border-4 rounded-lg h-20 bg-base-300"
        >
          Slice Overflow
        </Link>

        <p className="border-4 rounded-md w-1/2 text-lg m-5 p-5 ">A full stack pizza ordering application that enables users to explore a menu of pizzas, select items for their cart, and place orders seamlessly. Key features include user account creation, secure login with authentication, cart management for adding pizzas, and a streamlined checkout process.
        </p>
   </div>






      <br></br>

      <div className="bg-white rounded-lg m-8 p-8 flex flex-col items-center">
        <img src={expressImage} width={700} height={250} className="border-4"></img>
        <br></br>
        <Link
          to="https://github.com/ghern5234/Express-Note-Taker.git"
          className="flex justify-center text-xl underline border-4 rounded-lg w-1/2 p-3 font-bold "
        >
          Express Note Taker
        </Link>
        
      </div>
      <p className="border-4 rounded-md w-auto text-lg m-5 p-5 ">A full stack pizza ordering application that enables users to explore a menu of pizzas, select items for their cart, and place orders seamlessly. Key features include user account creation, secure login with authentication, cart management for adding pizzas, and a streamlined checkout process.
        </p>

      <br></br>

      <div className="bg-white rounded-md m-8 p-8 border-4">
        <img src={taskBoardImage} width={700} height={250}></img>
        <br></br>
        <Link
          to="https://github.com/ghern5234/project-task-board.git"
          className="flex flex-row items-center justify-center text-2xl underline"
        >
          Task Board
        </Link>
      </div>

      <br></br>

      <div className="bg-white rounded-md m-8 p-8 border-4">
        <img src={weatherDashboardImage} width={700} height={250}></img>
        <br></br>
        <Link
          to="https://github.com/ghern5234/weather-dashboard.git"
          className="flex flex-row items-center justify-center text-2xl underline"
        >
          Weather Dashboard
        </Link>
      </div> */}







{/* TAILWIND */}
{/* <div className="bg-white py-24 sm:py-32">
      <div className="w-full px-6 lg:px-2">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-9xl font-bold tracking-tight text-gray-900 sm:text-4xl">Projects</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">

            <article className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
            
                <img
                  src={sliceOverflowImage}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                ></img>
                
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <img src={sliceOverflowImage}>
                    
                  </img>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">Description</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img alt="" src={taskBoardImage} className="h-10 w-10 rounded-full bg-gray-50" />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900"></p>
                    
                  <p className="text-gray-600"></p>
                </div>
              </div>
            </article>

        </div>
      </div>
    </div> */}




<div className="card card-side bg-base-100 shadow-xl">
  <figure>
    <img
      src={sliceOverflowImage}
      alt="Movie" 
     />
  </figure>
  <div className="card-body flex flex-col justify-center items-center text-center"> {/* Added flex, justify-center, and items-center */}
    <h2 className="card-title">SliceOverflow</h2>
   
    <div className="card-actions">
      <button className="btn btn-primary">Watch</button>
    </div>
  </div>
</div>





     </div>
    </>



  );
};

export default Projects;
