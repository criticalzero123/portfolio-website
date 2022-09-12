import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Projects.css";
import CustomButton from "../../CustomButton/CustomButton";
import ProjectCard from "../ProjectCard/ProjectCard";

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
      className="lg:mx-28 sm:mx-10 lg:mb-44 sm:mb-44 xl:mx-52 xl:mb-52"
      id="projects"
    >
      <div>
        <p className="header mb-5" style={{ textAlign: "center" }}>
          <span style={{ color: "#95A7EF" }}>#1</span> <span>Projects</span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 justify-items-center">
          {repo &&
            repo.map((rep) => {
              return <ProjectCard project={rep} key={rep.id} />;
            })}
        </div>
        <CustomButton
          marginTop={"mt-12"}
          // text=""
          text="Show More"
          linkTo=""
          hidden={`true`}
          // linkTo="portfolio-website/archive"
        />
      </div>
    </div>
  );
};

export default Projects;
