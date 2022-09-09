import React, { useEffect, useState } from "react";

import axios from "axios";

import { FiExternalLink, FiFolder } from "react-icons/fi";
const ProjectCard = ({ project }) => {
  const [progLanguages, setProgLanuages] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios(
        `https://api.github.com/repos/criticalzero123/${project.name}/languages`
      );

      setProgLanuages(data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <div
        className="p-7 flex flex-col shadow-md bg-gray-800 my-3 mx-3 
                            hover:-translate-y-2 transition duration-300 cursor-pointer 
                            hover:drop-shadow-[0_10px_15px_rgba(32,41,65,0.6)] card-style "
        onClick={() => window.open(`${project.html_url}`)}
        key={project.name}
      >
        <div className="mt-5">
          <div className="flex mb-5 items-center">
            <FiFolder
              className="mr-auto stroke-1"
              size={45}
              style={{ color: "#95A7EF" }}
            />

            <FiExternalLink size={18} className="align icons " />
          </div>
          <p style={{ fontSize: "1.5rem" }}>{project.name}</p>
        </div>
        <p className="mt-3 icons" style={{ fontSize: "0.9rem" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s.
        </p>
        <div className="flex mt-8">
          {Object.keys(progLanguages).map((key, index) => {
            return (
              <div className="mr-5" key={key}>
                <h6 className="language-tags">{key}</h6>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
