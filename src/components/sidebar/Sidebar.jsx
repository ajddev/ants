import "./index.scss";
import SvgLogo from "../../assets/images/ants.svg";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupIcon from "@mui/icons-material/Group";
import FolderIcon from "@mui/icons-material/Folder";
import BugReportIcon from "@mui/icons-material/BugReport";
import NotificationsIcon from "@mui/icons-material/Notifications";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SettingsIcon from "@mui/icons-material/Settings";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LogoutIcon from "@mui/icons-material/Logout";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">
          <img src={SvgLogo} alt="ANTS" />
        </span>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">Main</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li>
          <p className="title">Interface</p>
          <li>
            <GroupIcon className="icon" />
            <span>Users</span>
          </li>
          <li>
            <FolderIcon className="icon" />
            <span>Projects</span>
          </li>
          <li>
            <BugReportIcon className="icon" />
            <span>Tickets</span>
          </li>
          <p className="title">Service</p>
          <li>
            <NotificationsIcon className="icon" />
            <span>Notifications</span>
          </li>
          <li>
            <QueryStatsIcon className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <AssignmentIcon className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <SettingsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">User</p>
          <li>
            <AccountCircleIcon className="icon" />
            <span>Profile</span>
          </li>
          <li>
            <LogoutIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div className="color-option"></div>
        <div className="color-option"></div>
      </div>
    </div>
  );
};

export default Sidebar;
