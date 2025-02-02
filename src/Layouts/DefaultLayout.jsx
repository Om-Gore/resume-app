import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  LayoutDashboard,
  Home,
  // StickyNote,
  // Layers,
  // Calendar,
  LifeBuoy,
  Settings,
  Power
} from "lucide-react";
import Sidebar, { SidebarItem } from "../Components/Sidebar";

export default ({ children }) => {
  const [activeRoute, setActiveRoute] = useState("/login");
  const navigate = useNavigate();

  const handleSidebarItemClick = (route) => {
    setActiveRoute(route);
    navigate(route);
  };

  return (
    <div className="flex flex-row">
      <div className="flex z-30 sticky top-0 left-0 ">
        <Sidebar>
          <SidebarItem
            icon={<Home size={20} />}
            text="Home"
            active={activeRoute === "/"}
            onClick={() => handleSidebarItemClick("/cadidate-dashboard")}
          />
          <SidebarItem
            icon={<LayoutDashboard size={20} />}
            text="Dashboard"
            active={activeRoute === "/dashboard"}
            onClick={() => handleSidebarItemClick("/dashboard")}
          />
          
          <hr className="my-3" />
          <SidebarItem
            icon={<Settings size={20} />}
            text="Settings"
            active={activeRoute === "/settings"}
            onClick={() => handleSidebarItemClick("/page-not-found")}
          />
          <SidebarItem
            icon={<LifeBuoy size={20} />}
            text="Help"
            active={activeRoute === "/help"}
            onClick={() => handleSidebarItemClick("/page-not-found")}
          />
          <SidebarItem
            icon={<Power size={20} />}
            text="Logout"
            active={activeRoute === "/logout"}
            onClick={() => handleSidebarItemClick("/login")}
          />
        </Sidebar>
        
      </div>

      <div className="flex-auto overflow-y-auto py-2 px-4 ">{children}</div>
    </div>
  );
};
