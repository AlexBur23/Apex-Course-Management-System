import { FaSearchPlus } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { CiViewList } from "react-icons/ci";
import SidebarIcon from "./SidebarIcon";

const Sidebar = () => {
  return (
    <nav>
      <SidebarIcon icon={<VscAccount size="48" />} />
      <SidebarIcon icon={<CiViewList size="48" />} />
      <SidebarIcon icon={<FaSearchPlus size="48" />} />
    </nav>
  );
};

export default Sidebar;
