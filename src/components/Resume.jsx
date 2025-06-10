import pg1 from "../assets/ResumeScreenshot.png";

import { Link } from "react-router-dom";

const Resume = () => {
  return (
    <>
      <div className="flex flex-col rounded-md m-10 items-center">
        <img
          src={pg1}
          width={800}
          height={900}
          className="rounded-md m-10 border-4"
        ></img>

        <Link
          to="https://docs.google.com/document/d/1tCxIVA0NS-QiEp2HMYAdWiIbxOnNmCYfNhYwDtg5hc4/edit?usp=sharing"
          className=" text-xl underline border-4 rounded-lg w-1/2 p-3 font-bold text-center"
        >
          Click here to view the full resume!
        </Link>
      </div>
    </>
  );
};

export default Resume;
