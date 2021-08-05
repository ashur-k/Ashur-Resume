import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { SiGhost } from "react-icons/si";

const getIcon = (Icon: string): JSX.Element => {
  console.log(Icon)
  switch(Icon) {
    case 'RiComputerLine':
      return (<RiComputerLine className="w-8 h-8 text-green my-3"/>);
    case 'FaServer':
      return (<FaServer className="w-8 h-8 text-green my-3" />);
    case 'AiOutlineApi':
      return (<AiOutlineApi className="w-8 h-8 text-green my-3" />);
    case 'MdDeveloperMode':
      return (<MdDeveloperMode className="w-8 h-8 text-green my-3"/>);
    case 'AiOutlineAntDesign':
      return (<AiOutlineAntDesign className="w-8 h-8 text-green my-3"/>);
    case 'GrHost':
      return (<SiGhost className="w-8 h-8 text-green my-3"/>);
    default:
      return (<small>Icon not Found</small>);
  }
};

export default getIcon;