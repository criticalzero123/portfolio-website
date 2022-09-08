import React, { useState, useEffect } from "react";
import axios from "axios";
import { AiOutlineFolder } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";

import "./Projects.css";
import CustomButton from "../../CustomButton/CustomButton";

const Projects = () => {
  const [repo, setRepo] = useState([]);

  const userGit = "criticalzero123";

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios(
        `https://api.github.com/users/${userGit}/repos`
      );

      setRepo(data);
    };

    fetchData();
  }, []);

  return (
    <div
      className="lg:mx-28 sm:mx-10 lg:mb-28 sm:mb-10 xl:mx-52 xl:mb-52"
      id="projects"
    >
      <div>
        <p className="header mb-5" style={{ textAlign: "center" }}>
          <span style={{ color: "#95A7EF" }}>#1</span> <span>Projects</span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center">
          {repo &&
            repo.map((rep) => {
              return (
                <div
                  className="p-7 max-w-sm shadow-md bg-gray-800 my-3 mx-3 
                            hover:-translate-y-2 transition duration-300 cursor-pointer 
                            hover:drop-shadow-[0_10px_15px_rgba(32,41,65,0.6)] card-style "
                  onClick={() => window.open(`${rep.html_url}`)}
                  key={rep.name}
                >
                  <div className="mt-5">
                    <div className="flex mb-5 items-center">
                      <AiOutlineFolder
                        className="mr-auto "
                        size={50}
                        style={{ color: "#95A7EF" }}
                      />

                      <FiExternalLink size={18} className="align icons" />
                    </div>
                    <p style={{ fontSize: "1.5rem" }}>{rep.name}</p>
                  </div>
                  <p className="mt-3 icons" style={{ fontSize: "0.9rem" }}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </p>
                  <div className="flex mt-8">
                    <div className="mr-5 ">
                      <h6 className="language-tags">React.js</h6>
                    </div>

                    <div>
                      <h6 className="language-tags">Node.js</h6>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
        <CustomButton marginTop={"mt-12"} text="Show More" linkTo="archive" />
      </div>
    </div>
  );
};

export default Projects;
