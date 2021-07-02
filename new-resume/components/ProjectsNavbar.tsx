import { FunctionComponent } from "react";
import { ProjectNavbarItems } from "./ProjectNavbarItems";

const ProjectsNavbar: FunctionComponent<{
    handlerFilterCategory: Function;
    active: string;
  }> = (props) => {
    return (
      <div className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
        <ProjectNavbarItems value="all" {...props} />
        <ProjectNavbarItems value="react" {...props} />
        <ProjectNavbarItems value="mongo" {...props} />
        <ProjectNavbarItems value="django" {...props} />
        <ProjectNavbarItems value="JavaScript" {...props} />
        <ProjectNavbarItems value="nextjs" {...props} />
        <ProjectNavbarItems value="typescript" {...props} />
        <ProjectNavbarItems value="main-acheivements" {...props} />
      </div>
    );
  };

export default ProjectsNavbar;