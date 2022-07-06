import Repositories from "./Repositories";
import {Projects, Filter} from "./projectStyle"
import ApiGithub from "/src/Services/ApiGithub";
import { useEffect, useState } from "react";
import {Button} from "../Buttons/buttonStyle";

const Project = () => {
  const [repos, setRepos] = useState([]);
  const [filter, setFilter] = useState([]);

  useEffect(() => {
    ApiGithub.get("repos").then(({ data }) => {
      setRepos(data);
      setFilter(data);
    });
  }, []);

  const Todos = () => {
    setRepos(filter);
  };
  const filterFront = () => {
    const frontRepos = filter.filter((repos) => repos.name.includes("front"));
    setRepos(frontRepos);
  };

  const filterBack = () => {
    const backRepos = filter.filter((repos) => repos.name.includes("back"));
    setRepos(backRepos);
  };
  return (
    <Projects id="Project">
      <h1>Projetos</h1>
    
      <Filter>
        <Button onClick={filterFront}>Frontend</Button>
        <Button onClick={filterBack}>Backend</Button>
        <Button onClick={Todos}>Todos</Button>
      </Filter>

      <section>
        {repos?.map((repos) => (
          <Repositories
          key={repos.id}
          id={repos.id}
          name={repos.description}
          demo={repos.homepage}
          github={repos.html_url}
          language={repos.language}
          />
          ))}
      </section>
    </Projects>
  );
}

export default Project;