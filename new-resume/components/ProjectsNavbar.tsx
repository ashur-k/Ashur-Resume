import { FunctionComponent } from "react";
import { Category } from "../types";

export const NavItem: FunctionComponent<{
  value: Category | "all";
  handlerFilterCategory: Function;
  active: string;
    }> = ({ value, handlerFilterCategory, active }) => {
        let className = "capitalize cursor-pointer hover:text-green";
        if (active === value) className += " text-green";

            return (
                <li className={className} onClick={() => handlerFilterCategory(value)}>
                    {value}
                </li>
        );
};

const ProjectsNavbar = () => {
    return (
        <div>
            
        </div>
    )
}

export default ProjectsNavbar
