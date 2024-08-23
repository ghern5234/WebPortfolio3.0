import { Link } from "react-router-dom";
import sliceOverflowImage from "../assets/sliceOverflow.png";
import expressImage from "../assets/Express-Note-Taker.png";
import taskBoardImage from "../assets/Task-Board.png";
import weatherDashboardImage from "../assets/WeatherDashboard.png";



const Projects = () => {
  return (
    <>

  <div className="bg-white rounded-lg m-8 p-8 border-8 flex flex-col items-center">
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

      <div className="bg-white rounded-lg m-8 p-8 border-8 flex flex-col items-center">
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
      </div>
    </>
  );
};

export default Projects;
